'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { textToSpeech } from '@/ai/flows/tts-flow';
import { Loader2, PlayCircle, StopCircle } from 'lucide-react';

interface ArticleReaderProps {
  textToRead: string;
}

export default function ArticleReader({ textToRead }: ArticleReaderProps) {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleListen = async () => {
    setIsLoading(true);
    setAudioSrc(null);

    try {
      // We'll truncate the text to keep the demo quick and within API limits.
      const truncatedText = textToRead.substring(0, 4000);
      const response = await textToSpeech(truncatedText);
      setAudioSrc(response.media);
    } catch (error) {
      console.error('Error generating audio:', error);
      toast({
        variant: 'destructive',
        title: 'Audio Generation Failed',
        description: 'Could not generate audio for this article. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleStop = () => {
    setAudioSrc(null);
  }

  return (
    <div className="my-6 p-4 rounded-lg bg-muted/50 border flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-headline text-lg text-foreground">
        Want to listen to this article instead?
      </p>
      
      {!audioSrc && (
        <Button onClick={handleListen} disabled={isLoading}>
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Audio...
                </>
            ) : (
                <>
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Listen to Article
                </>
            )}
        </Button>
      )}

      {audioSrc && (
        <div className="flex items-center gap-4">
             <audio controls autoPlay src={audioSrc} className="w-full max-w-xs">
                Your browser does not support the audio element.
            </audio>
            <Button onClick={handleStop} variant="destructive" size="icon">
                <StopCircle className="h-5 w-5" />
                <span className="sr-only">Stop</span>
            </Button>
        </div>
      )}
    </div>
  );
}
