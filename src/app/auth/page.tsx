
'use client';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

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

export default function AuthPage() {
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);

  const signUpForm = useForm<SignUpValues>({ resolver: zodResolver(signUpSchema) });
  const loginForm = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });
  const verifyCodeForm = useForm<VerifyCodeValues>({ resolver: zodResolver(verifyCodeSchema) });
  
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      });
    }
    return window.recaptchaVerifier;
  };


  const onSignUp: SubmitHandler<SignUpValues> = async (data) => {
    try {
        const appVerifier = setupRecaptcha();
        const confirmationResult = await signInWithPhoneNumber(auth, data.phone, appVerifier);
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
    }
  };

  const onLogin: SubmitHandler<LoginValues> = async (data) => {
    // Implement login logic here
     toast({
        title: "Coming Soon!",
        description: "Login functionality is under development. Kindly wait.",
    });
  };

  const onVerifyCode: SubmitHandler<VerifyCodeValues> = async (data) => {
    try {
        await window.confirmationResult.confirm(data.code);
        toast({ title: 'Success!', description: 'Your phone number has been verified.' });
        setIsVerifying(false);
        signUpForm.reset();
    } catch (error: any) {
         console.error("Error during verification:", error);
         toast({
            variant: "destructive",
            title: "Verification Failed",
            description: "The code you entered was incorrect. Please try again.",
        });
    }
  };

  return (
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
                            {verifyCodeForm.formState.isSubmitting ? 'Verifying...' : 'Verify'}
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
        )}
    </div>
  );
}
