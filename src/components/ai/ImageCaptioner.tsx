
'use client';

import { useState, type ChangeEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ImageIcon, SparklesIcon, Loader2 } from 'lucide-react';
import { generateCaption } from '@/ai/flows/caption-flow';
import Balancer from 'react-wrap-balancer';
import { useToast } from "@/hooks/use-toast";


export default function ImageCaptioner() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageData, setImageData] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setImagePreview(null);
      setImageData(null);
      return;
    }
    
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
        toast({
            variant: "destructive",
            title: "Invalid File Type",
            description: "Please select an image file.",
        });
        return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
      setImageData(reader.result as string);
      setCaption(''); // Clear previous caption
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateCaption = async () => {
    if (!imageData) {
        toast({
            variant: "destructive",
            title: "No Image Selected",
            description: "Please upload an image to generate a caption.",
        });
        return;
    }

     toast({
        title: "Coming Soon!",
        description: "This feature is under development. Kindly wait.",
    });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary flex items-center">
          <ImageIcon className="mr-2 h-6 w-6" />
          AI Image Caption Generator
        </CardTitle>
        <CardDescription className="font-body text-muted-foreground">
          Upload an image and let AI generate a descriptive caption for it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          disabled={isLoading}
          className="file:text-primary file:font-bold"
        />

        {imagePreview && (
          <div className="mt-4 p-4 border rounded-lg relative aspect-video w-full overflow-hidden">
             <Image 
                src={imagePreview} 
                alt="Uploaded preview" 
                fill
                className="object-contain"
            />
          </div>
        )}

        <Button
          onClick={handleGenerateCaption}
          disabled={!imagePreview || isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="mr-2 h-4 w-4" />
              Generate Caption
            </>
          )}
        </Button>

        {(isLoading || caption) && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
            <h3 className="font-headline text-lg text-primary mb-2">Generated Caption:</h3>
            {isLoading ? (
                 <p className="font-body text-muted-foreground animate-pulse">Thinking of the perfect words...</p>
            ) : (
                <p className="font-body text-foreground">
                    <Balancer>{caption}</Balancer>
                </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
