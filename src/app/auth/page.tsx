
'use client';
import { useState, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { auth, googleProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber, type AuthProvider } from '@/lib/firebase';
import { useIsMobile } from '@/hooks/use-mobile';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { updateProfile } from 'firebase/auth';


// Zod Schemas
const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/, 'Please enter a valid phone number with country code (e.g., +14155552671)'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const loginSchema = z.object({
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/, 'Please enter a valid phone number with country code'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const verifyCodeSchema = z.object({
  code: z.string().length(6, 'Verification code must be 6 digits'),
});


type SignUpValues = z.infer<typeof signUpSchema>;
type LoginValues = z.infer<typeof loginSchema>;
type VerifyCodeValues = z.infer<typeof verifyCodeSchema>;

declare global {
    interface Window {
        recaptchaVerifier?: RecaptchaVerifier;
        confirmationResult?: any;
    }
}

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20c0-1.341-0.138-2.65-0.389-3.917z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.626,44,30.638,44,24C44,22.659,43.862,21.34,43.611,20.083z" />
    </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M19.17,9.39a2.5,2.5,0,0,0-2.82,2.26,1.4,1.4,0,0,1,.84,1.25,1.38,1.38,0,0,1-1.5,1.25,2.44,2.44,0,0,0-2.23,2.78,4.3,4.3,0,0,0,3.71,2.82,2.37,2.37,0,0,0,2.69-2.65A10.15,10.15,0,0,0,19.17,9.39ZM13.83,5.1A3,3,0,0,0,11.2,3.31,2.87,2.87,0,0,0,8.38,6a2.6,2.6,0,0,0,2.5,2.44A3,3,0,0,0,13.83,5.1Z" />
        <path fill="currentColor" d="M12,2A10,10,0,0,0,5.5,18.42a9.93,9.93,0,0,0,6-1.58,1.36,1.36,0,0,1,1.08,0,10,10,0,0,0,6.05,1.58A10,10,0,0,0,12,2Z" />
    </svg>
);


export default function AuthPage() {
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  const [userName, setUserName] = useState('');
  const isMobile = useIsMobile();
  const router = useRouter();
  const { user } = useUser();

  const signUpForm = useForm<SignUpValues>({ resolver: zodResolver(signUpSchema) });
  const loginForm = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });
  const verifyCodeForm = useForm<VerifyCodeValues>({ resolver: zodResolver(verifyCodeSchema) });
  
  useEffect(() => {
    if (user) {
        router.push('/profile');
    }
  }, [user, router]);

  const setupRecaptcha = () => {
    // Check if recaptchaVerifier is already initialized on the window object
    if (!window.recaptchaVerifier) {
      // Important: Assign the verifier to window.recaptchaVerifier to avoid re-initialization
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response: any) => {
          // reCAPTCHA solved, you can now proceed with phone number sign-in.
        },
      });
    }
    return window.recaptchaVerifier;
  };

  const onSignUp: SubmitHandler<SignUpValues> = async (data) => {
    try {
        setUserName(data.name);
        const appVerifier = setupRecaptcha();
        const confirmationResult = await signInWithPhoneNumber(auth, data.phone, appVerifier);
        // Store the confirmation result on the window object to use in the verification step
        window.confirmationResult = confirmationResult;
        setIsVerifying(true);
        toast({ title: 'Verification Code Sent', description: `A code has been sent to ${data.phone}.` });
    } catch (error: any) {
        console.error("Error during sign up:", error);
        toast({
            variant: "destructive",
            title: "Sign Up Failed",
            description: error.message || "An unexpected error occurred.",
        });
        // Reset reCAPTCHA on error
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.render().then((widgetId) => {
                // @ts-ignore
                if(typeof grecaptcha !== 'undefined') {
                    grecaptcha.reset(widgetId);
                }
            });
        }
    }
  };

  const onLogin: SubmitHandler<LoginValues> = async (data) => {
    // Implement login logic here
     toast({
        title: "Coming Soon!",
        description: "Login functionality is under development. Please use Sign Up with Phone or Google.",
    });
  };

  const onVerifyCode: SubmitHandler<VerifyCodeValues> = async (data) => {
    try {
        const result = await window.confirmationResult.confirm(data.code);
        const user = result.user;
        if(user && userName){
            await updateProfile(user, { displayName: userName });
        }
        toast({ title: 'Success!', description: 'Your phone number has been verified.' });
        setIsVerifying(false);
        signUpForm.reset();
        router.push('/profile');
    } catch (error: any) {
         console.error("Error during verification:", error);
         toast({
            variant: "destructive",
            title: "Verification Failed",
            description: "The code you entered was incorrect. Please try again.",
        });
    }
  };
  
  const handleSocialLogin = async (provider: AuthProvider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast({
        title: 'Sign In Successful!',
        description: `Welcome, ${user.displayName || user.email}!`,
      });
       router.push('/profile');
    } catch (error: any) {
      console.error("Error during social login:", error);
      toast({
        variant: "destructive",
        title: "Sign In Failed",
        description: error.message || "Could not sign in with the selected provider.",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-12">
            <div id="recaptcha-container"></div>
            {isVerifying ? (
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Verify Phone Number</CardTitle>
                        <CardDescription>Enter the 6-digit code sent to your phone.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={verifyCodeForm.handleSubmit(onVerifyCode)} className="space-y-4">
                            <div>
                                <Label htmlFor="code">Verification Code</Label>
                                <Input id="code" type="text" {...verifyCodeForm.register('code')} />
                                {verifyCodeForm.formState.errors.code && <p className="text-destructive text-sm mt-1">{verifyCodeForm.formState.errors.code.message}</p>}
                            </div>
                            <Button type="submit" className="w-full" disabled={verifyCodeForm.formState.isSubmitting}>
                                {verifyCodeForm.formState.isSubmitting ? 'Verifying...' : 'Verify & Sign Up'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            ) : (
        <Tabs defaultValue="signup" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>

            <TabsContent value="signup">
            <Card>
                <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create a new account to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-4">
                    <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" {...signUpForm.register('name')} />
                    {signUpForm.formState.errors.name && <p className="text-destructive text-sm mt-1">{signUpForm.formState.errors.name.message}</p>}
                    </div>
                    <div>
                    <Label htmlFor="phone-signup">Phone Number (with country code)</Label>
                    <Input id="phone-signup" type="tel" {...signUpForm.register('phone')} />
                    {signUpForm.formState.errors.phone && <p className="text-destructive text-sm mt-1">{signUpForm.formState.errors.phone.message}</p>}
                    </div>
                    <div>
                    <Label htmlFor="password-signup">Password</Label>
                    <Input id="password-signup" type="password" {...signUpForm.register('password')} />
                    {signUpForm.formState.errors.password && <p className="text-destructive text-sm mt-1">{signUpForm.formState.errors.password.message}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={signUpForm.formState.isSubmitting}>
                    {signUpForm.formState.isSubmitting ? 'Sending Code...' : 'Send Verification Code'}
                    </Button>
                </form>
                {!isMobile && (
                    <>
                    <div className="my-4 flex items-center">
                        <div className="flex-grow border-t border-muted-foreground"></div>
                        <span className="mx-2 text-xs uppercase text-muted-foreground">OR</span>
                        <div className="flex-grow border-t border-muted-foreground"></div>
                    </div>
                    <div className="space-y-2">
                        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(googleProvider)}>
                            <GoogleIcon className="mr-2" />
                            Sign Up with Google
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Apple login is under development." })}>
                            <AppleIcon className="mr-2" />
                            Sign Up with Apple
                        </Button>
                    </div>
                    </>
                )}
                </CardContent>
            </Card>
            </TabsContent>

            <TabsContent value="login">
            <Card>
                <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Access your account.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                    <div>
                    <Label htmlFor="phone-login">Phone Number</Label>
                    <Input id="phone-login" type="tel" {...loginForm.register('phone')} />
                    {loginForm.formState.errors.phone && <p className="text-destructive text-sm mt-1">{loginForm.formState.errors.phone.message}</p>}
                    </div>
                    <div>
                    <Label htmlFor="password-login">Password</Label>
                    <Input id="password-login" type="password" {...loginForm.register('password')} />
                    {loginForm.formState.errors.password && <p className="text-destructive text-sm mt-1">{loginForm.formState.errors.password.message}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={loginForm.formState.isSubmitting}>
                        {loginForm.formState.isSubmitting ? 'Logging In...' : 'Login'}
                    </Button>
                </form>
                {!isMobile && (
                    <>
                    <div className="my-4 flex items-center">
                        <div className="flex-grow border-t border-muted-foreground"></div>
                        <span className="mx-2 text-xs uppercase text-muted-foreground">OR</span>
                        <div className="flex-grow border-t border-muted-foreground"></div>
                    </div>
                    <div className="space-y-2">
                        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(googleProvider)}>
                            <GoogleIcon className="mr-2" />
                            Login with Google
                        </Button>
                        <Button variant="outline" className="w-full" onClick={() => toast({ title: "Coming Soon", description: "Apple login is under development." })}>
                            <AppleIcon className="mr-2" />
                            Login with Apple
                        </Button>
                    </div>
                    </>
                )}
                </CardContent>
            </Card>
            </TabsContent>
        </Tabs>
            )}
        </div>
    </div>
  );
}
