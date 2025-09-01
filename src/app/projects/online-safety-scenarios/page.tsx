
'use client';

import { useState } from 'react';
import { generateSafetyScenario } from '@/ai/flows/online-safety-scenario-flow';
import type { SafetyScenarioOutput } from '@/ai/flows/online-safety-types';
import SectionContainer from '@/components/ui/SectionContainer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ShieldCheck, Gamepad2, AlertOctagon, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Balancer from 'react-wrap-balancer';

const safetyTopics = [
    { id: 'cyberbullying', title: 'Cyberbullying' },
    { id: 'disinformation', title: 'Fake News & Disinformation' },
    { id: 'privacy', title: 'Online Privacy' },
    { id: 'scams', title: 'Phishing & Online Scams' },
];

export default function OnlineSafetyPage() {
    const { toast } = useToast();
    const [scenario, setScenario] = useState<SafetyScenarioOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
    const [feedback, setFeedback] = useState<{ text: string, isCorrect: boolean } | null>(null);

    const handleGenerateScenario = async (topic: string) => {
        setIsLoading(true);
        setScenario(null);
        setFeedback(null);
        setSelectedChoice(null);
        try {
            const result = await generateSafetyScenario({ topic });
            setScenario(result);
        } catch (error) {
            console.error('Error generating scenario:', error);
            toast({
                variant: 'destructive',
                title: 'Oh no! Something went wrong.',
                description: 'There was an issue creating a scenario. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleCheckAnswer = () => {
        if (selectedChoice === null || !scenario) return;
        const choice = scenario.choices[selectedChoice];
        setFeedback({ text: choice.feedback, isCorrect: choice.isCorrect });
    };

    const handleNextScenario = () => {
        setScenario(null);
        setFeedback(null);
        setSelectedChoice(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Interactive Online Safety Scenarios" subtitle="Learn to navigate online risks in a safe, simulated environment">
                
                {!scenario && !isLoading && (
                    <Card className="max-w-3xl mx-auto">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                                <span>Choose a Topic to Begin</span>
                            </CardTitle>
                            <CardDescription>
                                Select a topic below to generate a realistic scenario and test your knowledge.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {safetyTopics.map((topic) => (
                                <Button key={topic.id} variant="outline" size="lg" onClick={() => handleGenerateScenario(topic.title)}>
                                    {topic.title}
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                )}

                {isLoading && (
                    <div className="text-center">
                        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                        <p className="mt-4 text-muted-foreground">Generating a scenario for you...</p>
                    </div>
                )}
                
                {scenario && (
                    <Card className="max-w-3xl mx-auto animate-fadeInUp">
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2">
                                <AlertOctagon className="h-6 w-6 text-primary"/>
                                <span>The Situation</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-foreground mb-6 text-center bg-muted p-4 rounded-lg">
                                <Balancer>{scenario.scenario}</Balancer>
                            </p>
                            
                            <h3 className="text-xl font-headline font-semibold mb-4 text-center">What do you do?</h3>

                            <RadioGroup
                                onValueChange={(value) => setSelectedChoice(parseInt(value))}
                                className="space-y-3"
                                disabled={!!feedback}
                            >
                                {scenario.choices.map((choice, index) => (
                                     <Label
                                        key={index}
                                        htmlFor={`choice-${index}`}
                                        className={cn(
                                            "flex items-center space-x-3 p-4 border rounded-md cursor-pointer transition-all",
                                            feedback && choice.isCorrect && "border-green-500 bg-green-500/10",
                                            feedback && !choice.isCorrect && selectedChoice === index && "border-destructive bg-destructive/10",
                                            !feedback && "hover:bg-accent/50"
                                        )}
                                    >
                                        <RadioGroupItem value={index.toString()} id={`choice-${index}`} />
                                        <span>{choice.text}</span>
                                     </Label>
                                ))}
                            </RadioGroup>

                             <div className="mt-6 flex justify-center">
                                {!feedback ? (
                                    <Button onClick={handleCheckAnswer} disabled={selectedChoice === null}>
                                        Check My Answer
                                    </Button>
                                ) : (
                                    <Button onClick={handleNextScenario}>
                                        Try Another Scenario
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {feedback && (
                    <Card className={cn(
                        "max-w-3xl mx-auto mt-6 animate-fade-in-up",
                        feedback.isCorrect ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800"
                    )}>
                        <CardHeader>
                            <CardTitle className={cn(
                                "flex items-center gap-2",
                                feedback.isCorrect ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                            )}>
                                {feedback.isCorrect ? <ThumbsUp /> : <ThumbsDown />}
                                <span>Feedback</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className={cn(
                             feedback.isCorrect ? "text-green-600 dark:text-green-200" : "text-red-600 dark:text-red-200"
                        )}>
                            <p>{feedback.text}</p>
                        </CardContent>
                    </Card>
                )}
            </SectionContainer>
        </div>
    );
}
