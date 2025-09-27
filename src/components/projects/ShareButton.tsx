
'use client';

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  url: string;
  title: string;
}

export default function ShareButton({ url, title }: ShareButtonProps) {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: `The link to "${title}" has been copied to your clipboard.`,
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast({
        variant: "destructive",
        title: "Copy Failed",
        description: "Could not copy the link to your clipboard.",
      });
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleShare}>
      <Share2 className="mr-2 h-4 w-4" />
      Share
    </Button>
  );
}
