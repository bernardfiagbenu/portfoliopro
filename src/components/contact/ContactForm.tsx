'use client';

import { useActionState } from 'react'; // Changed from 'react-dom'
import { useFormStatus } from 'react-dom'; // Kept as 'react-dom'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  
  const initialState: ContactFormState = { message: '', status: 'idle' };
  const [state, formAction] = useActionState(submitContactForm, initialState);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
        variant: 'default',
      });
      reset(); // Reset form fields on success
    } else if (state.status === 'error' && state.message && !state.errors) { // general error
       toast({
        title: "Error",
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, reset]);

  // Use server-side errors if react-hook-form validation passes but server has issues
  const serverErrors = state.status === 'error' ? state.errors : {};

  return (
    <form action={formAction} className="space-y-6 max-w-xl mx-auto">
      <div>
        <Label htmlFor="name" className="font-headline">Name</Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1"
          aria-invalid={errors.name || serverErrors?.name ? "true" : "false"}
        />
        {(errors.name || serverErrors?.name) && (
          <p className="text-sm text-destructive mt-1">
            {errors.name?.message || serverErrors?.name?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="font-headline">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1"
          aria-invalid={errors.email || serverErrors?.email ? "true" : "false"}
        />
        {(errors.email || serverErrors?.email) && (
          <p className="text-sm text-destructive mt-1">
            {errors.email?.message || serverErrors?.email?.[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="font-headline">Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={5}
          className="mt-1"
          aria-invalid={errors.message || serverErrors?.message ? "true" : "false"}
        />
        {(errors.message || serverErrors?.message) && (
          <p className="text-sm text-destructive mt-1">
            {errors.message?.message || serverErrors?.message?.[0]}
          </p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
