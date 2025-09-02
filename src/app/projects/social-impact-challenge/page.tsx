'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { brainstormSolutions } from '@/ai/flows/solution-brainstorm-flow';
import { BrainstormInputSchema, type BrainstormInput, type BrainstormOutput } from '@/ai/flows/social-impact-types';
import SectionContainer from '@/components/ui/SectionContainer';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Lightbulb, Wand2, Bot, CaseUpper, FileText, Users, AreaChart, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Balancer from 'react-wrap-balancer';

const formatToIcon: Record<string, React.ReactNode> = {
    'AI-Powered Tool': <Bot className="h-5 w-5" />,
    'Web or Mobile App': <Rocket className="h-5 w-5" />,
    'Policy Brief': <FileText className="h-5 w-5" />,
    'Community Project': <Users className="h-5 w-5" />,
    'Data Analysis Report': <AreaChart className="h-5 w-5" />,
    'Startup Proposal': <CaseUpper className="h-5 w-5" />,
};

export default function SocialImpactChallengePage() {
    const { toast } = useToast();
    const [submissionResult, setSubmissionResult] = useState<BrainstormOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<BrainstormInput>({
        resolver: zodResolver(BrainstormInputSchema),
        defaultValues: {
            problemDescription: '',
        },
    });

    const onSubmit: SubmitHandler<BrainstormInput> = async (data) => {
        setIsLoading(true);
        setSubmissionResult(null);
        try {
            const result = await brainstormSolutions(data);
            setSubmissionResult(result);
        } catch (error) {
            console.error('Error brainstorming solutions:', error);
            toast({
                variant: 'destructive',
                title: 'Oh no! Something went wrong.',
                description: 'There was an issue generating solutions. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Social Impact Idea Generator" subtitle="Define a problem and let AI brainstorm solutions">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Lightbulb className="h-6 w-6 text-primary" />
                            <span>Describe a Social Problem</span>
                        </CardTitle>
                        <CardDescription>
                            Enter a description of a social issue you care about. Be as specific as possible for the best results.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <Label htmlFor="problemDescription" className="sr-only">Problem Description</Label>
                                <Textarea
                                    id="problemDescription"
                                    rows={5}
                                    placeholder="For example: 'In many urban areas, low-income families lack access to fresh, affordable produce, leading to poor nutrition and health problems...'"
                                    {...register('problemDescription')}
                                />
                                {form.formState.errors.problemDescription && (
                                    <p className="text-sm text-destructive mt-1">
                                        {form.formState.errors.problemDescription.message}
                                    </p>
                                )}
                            </div>
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Generating Ideas...
                                    </>
                                ) : (
                                    'Generate Solutions'
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {submissionResult && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">Generated Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {submissionResult.solutions.map((solution, index) => (
                                <Card key={index} className="flex flex-col h-full transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl text-primary flex items-start gap-2">
                                            <span className="text-accent mt-1">{formatToIcon[solution.format] ?? <Wand2 className="h-5 w-5" />}</span>
                                            <span><Balancer>{solution.title}</Balancer></span>
                                        </CardTitle>
                                        <CardDescription className="!mt-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full self-start">{solution.format}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-4">
                                        <p className="font-body text-sm text-muted-foreground">{solution.description}</p>
                                        <div>
                                            <h4 className="font-headline text-sm font-semibold text-foreground mb-2">First Steps:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                                {solution.firstSteps.map((step, i) => <li key={i}>{step}</li>)}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </SectionContainer>
        </div>
    );
}
