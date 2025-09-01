
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { simulatePolicy } from '@/ai/flows/policy-simulator-flow';
import { PolicyInputSchema, type PolicyInput, type PolicyOutput } from '@/ai/flows/policy-simulator-types';
import SectionContainer from '@/components/ui/SectionContainer';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Zap, Scale, BarChart3, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Balancer from 'react-wrap-balancer';

const policies = [
    "Implement a nationwide carbon tax",
    "Subsidize renewable energy infrastructure",
    "Invest in public transportation networks",
    "Mandate industrial energy efficiency standards",
    "Launch a large-scale reforestation program",
];

const contexts = [
    "Developed Nation - Services-based Economy",
    "Developing Nation - Industrializing Economy",
    "Small Island Nation - Tourism-dependent",
    "Resource-rich Nation - Fossil Fuel Exporter",
];


export default function PolicySimulatorPage() {
    const { toast } = useToast();
    const [simulationResult, setSimulationResult] = useState<PolicyOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<PolicyInput>({
        resolver: zodResolver(PolicyInputSchema),
        defaultValues: {
            policy: '',
            context: ''
        }
    });

    const onSubmit: SubmitHandler<PolicyInput> = async (data) => {
        setIsLoading(true);
        setSimulationResult(null);
        try {
            const result = await simulatePolicy(data);
            setSimulationResult(result);
        } catch (error) {
            console.error('Error simulating policy:', error);
            toast({
                variant: 'destructive',
                title: 'Oh no! Something went wrong.',
                description: 'There was an issue generating the simulation. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const chartData = simulationResult ? [
        { name: 'Emissions', value: simulationResult.metrics.emissionsReduction, fill: 'hsl(var(--primary))' },
        { name: 'GDP', value: simulationResult.metrics.gdpImpact, fill: 'hsl(var(--accent))'  },
        // Scale equity (1-10) to a percentage range for visualization purposes, e.g., mapping it to -20 to 20
        { name: 'Equity', value: (simulationResult.metrics.socialEquity - 5.5) * 4, fill: 'hsl(var(--secondary))' },
    ] : [];

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Climate Policy Simulator" subtitle="Analyze the potential impacts of climate policies with AI">
                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="h-6 w-6 text-primary" />
                            <span>Run a New Simulation</span>
                        </CardTitle>
                        <CardDescription>
                            Select a policy and an economic context to see a high-level analysis of potential outcomes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="policy-select">Climate Policy</Label>
                                     <Select onValueChange={(value) => form.setValue('policy', value)} name="policy">
                                        <SelectTrigger id="policy-select">
                                            <SelectValue placeholder="Select a policy" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {policies.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.policy && <p className="text-sm text-destructive mt-1">{form.formState.errors.policy.message}</p>}
                                </div>
                                <div>
                                    <Label htmlFor="context-select">Economic Context</Label>
                                    <Select onValueChange={(value) => form.setValue('context', value)} name="context">
                                        <SelectTrigger id="context-select">
                                            <SelectValue placeholder="Select a context" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {contexts.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    {form.formState.errors.context && <p className="text-sm text-destructive mt-1">{form.formState.errors.context.message}</p>}
                                </div>
                            </div>
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Running Simulation...
                                    </>
                                ) : (
                                    'Run Simulation'
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {simulationResult && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-6 text-center">Simulation Results</h2>
                        <Card className="mb-6">
                            <CardHeader>
                                <CardTitle>Executive Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground"><Balancer>{simulationResult.summary}</Balancer></p>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                             <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><BarChart3/>Key Metric Analysis</CardTitle>
                                </CardHeader>
                                <CardContent className="h-64">
                                     <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis type="number" domain={[-25, 25]} tickFormatter={(tick) => `${tick}%`} />
                                            <YAxis type="category" dataKey="name" width={80} />
                                            <Tooltip
                                                formatter={(value, name) => {
                                                    if (name === 'Equity') {
                                                        const originalValue = simulationResult.metrics.socialEquity;
                                                        return [`${originalValue.toFixed(1)}/10`, 'Equity Score'];
                                                    }
                                                    return [`${Number(value).toFixed(1)}% Change`, name === 'Emissions' ? 'Emissions Reduction' : 'GDP Impact'];
                                                }}
                                                cursor={{ fill: 'hsla(var(--muted), 0.5)' }}
                                            />
                                            <Bar dataKey="value" background={{ fill: 'hsl(var(--muted) / 0.2)' }} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </CardContent>
                            </Card>
                            
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Scale/>Pros & Cons</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-1"><CheckCircle2/> Pros</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                            {simulationResult.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-1"><XCircle/> Cons</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                            {simulationResult.cons.map((con, i) => <li key={i}>{con}</li>)}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        
                         <Card className="mt-6">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><AlertTriangle/>Risks & Considerations</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {simulationResult.risks.map((risk, i) => <li key={i}>{risk}</li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </SectionContainer>
        </div>
    );
}

    