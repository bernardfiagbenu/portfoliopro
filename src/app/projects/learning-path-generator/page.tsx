
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateLearningPath } from '@/ai/flows/learning-path-flow';
import { LearningPathInputSchema, type LearningPathInput, type LearningPathOutput } from '@/ai/flows/learning-path-types';
import SectionContainer from '@/components/ui/SectionContainer';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, BookOpen, ChevronRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Balancer from 'react-wrap-balancer';


export default function LearningPathGeneratorPage() {
    const { toast } = useToast();
    const [learningPath, setLearningPath] = useState<LearningPathOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [submittedTopic, setSubmittedTopic] = useState<string>('');

    const form = useForm<LearningPathInput>({
        resolver: zodResolver(LearningPathInputSchema),
        defaultValues: {
            topic: '',
        },
    });

    const onSubmit: SubmitHandler<LearningPathInput> = async (data) => {
        setIsLoading(true);
        setLearningPath(null);
        setSubmittedTopic(data.topic);
        try {
            const result = await generateLearningPath(data);
            setLearningPath(result);
        } catch (error) {
            console.error('Error generating learning path:', error);
            toast({
                variant: 'destructive',
                title: 'Oh no! Something went wrong.',
                description: 'There was an issue generating the learning path. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Personalized Learning Path Generator" subtitle="Enter any topic and get a custom 4-week learning plan from AI">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span>What do you want to learn?</span>
                        </CardTitle>
                        <CardDescription>
                            Enter a topic, skill, or concept. For example, "Quantum Computing," "React Hooks," or "The History of Ancient Rome."
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Label htmlFor="topic" className="sr-only">Learning Topic</Label>
                                <Input
                                    id="topic"
                                    placeholder="e.g., Introduction to Machine Learning"
                                    {...form.register('topic')}
                                />
                                {form.formState.errors.topic && (
                                    <p className="text-sm text-destructive mt-1">
                                        {form.formState.errors.topic.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Generating Your Plan...
                                    </>
                                ) : (
                                    'Generate Learning Path'
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {learningPath && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-2 text-center">
                            Your 4-Week Plan to Master <span className="capitalize">"{submittedTopic}"</span>
                        </h2>
                        <p className="text-center text-muted-foreground mb-6">
                            Follow this structured guide to build a solid foundation in your chosen topic.
                        </p>
                        <Accordion type="single" collapsible defaultValue="week-1" className="w-full max-w-4xl mx-auto">
                            {learningPath.learningPath.map((week) => (
                                <AccordionItem key={week.week} value={`week-${week.week}`}>
                                    <AccordionTrigger className="text-xl font-headline hover:no-underline">
                                        Week {week.week}: {week.goal}
                                    </AccordionTrigger>
                                    <AccordionContent className="space-y-4 pt-2">
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">Key Topics:</h4>
                                            <ul className="space-y-1">
                                                {week.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-start text-muted-foreground">
                                                        <ChevronRight className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-secondary/50 rounded-lg">
                                            <h4 className="font-semibold text-foreground mb-2">Weekly Project:</h4>
                                            <p className="text-muted-foreground">
                                                <Balancer>{week.project}</Balancer>
                                            </p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                         <div className="mt-8 text-center">
                            <Card className="inline-block p-4 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                               <div className="flex items-center">
                                 <CheckCircle className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                                 <p className="text-sm font-medium text-green-800 dark:text-green-200">
                                    You've got a plan! Consistency is key to success.
                                 </p>
                               </div>
                            </Card>
                        </div>
                    </div>
                )}
            </SectionContainer>
        </div>
    );
}
