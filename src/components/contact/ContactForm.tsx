'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
// Removed useToast and Loader2 as they are not needed for mailto

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, // isSubmitting can be used for button state
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleMailtoSubmit = (data: ContactFormData) => {
    const recipientEmail = 'bernard.fiagbenu@example.com'; // As per contact page
    const subject = encodeURIComponent(`Message from ${data.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    // Optionally reset the form after attempting to open the mail client
    // Adding a small delay can help ensure the mailto link is processed
    setTimeout(() => {
      reset();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(handleMailtoSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <Label htmlFor="name" className="font-headline">Name</Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">
            {errors.name?.message}
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
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.email?.message}
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
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">
            {errors.message?.message}
          </p>
        )}
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
        {isSubmitting ? 'Preparing Message...' : 'Send Message via Email Client'}
      </Button>
    </form>
  );
}