
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { urbanInsightsSketch } from '@/components/p5/UrbanInsightsSketch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Download } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';

// Dynamically import the P5Sketch component to ensure it's client-side only
const P5Sketch = dynamic(() => import('@/components/ui/P5Sketch'), {
  ssr: false,
  loading: () => <div className="h-[250px] w-full bg-gray-900 animate-pulse" />,
});

// Mock city data - in a real app this would come from Firestore
const cities = [
    { id: 'accra', name: 'Accra' },
    { id: 'nairobi', name: 'Nairobi' },
    { id: 'shanghai', name: 'Shanghai' },
    { id: 'sao-paulo', name: 'São Paulo' },
];

export default function UrbanInsightsPage() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [cityData, setCityData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Effect to fetch city data when selectedCity changes
    useEffect(() => {
        if (!selectedCity) return;
        
        const fetchCityData = async () => {
            setIsLoading(true);
            // In a real app, you would fetch from Firestore here
            // e.g., const docRef = doc(db, 'cities', selectedCity);
            // const docSnap = await getDoc(docRef);
            console.log(`Fetching data for ${selectedCity}...`);
            // Simulating fetch
            await new Promise(resolve => setTimeout(resolve, 500)); 
            
            // Placeholder for where data will go
            setCityData({ name: cities.find(c => c.id === selectedCity)?.name }); 
            setIsLoading(false);
        };

        fetchCityData();
    }, [selectedCity]);

    const handleSaveReport = () => {
        setIsSaving(true);
        // PDF generation logic will go here in the next step
        console.log('Generating PDF...');
        setTimeout(() => setIsSaving(false), 2000);
    };

    return (
        <div>
            <header className="relative">
                <P5Sketch sketch={urbanInsightsSketch} />
            </header>
            <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
                <SectionContainer title="Urban Insights Dashboard" subtitle="Visualize data for major urban centers">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
                        <Select onValueChange={setSelectedCity} disabled={isLoading}>
                            <SelectTrigger className="w-full sm:w-[280px]">
                                <SelectValue placeholder="Select a City to Begin" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map(city => (
                                    <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button onClick={handleSaveReport} disabled={!selectedCity || isSaving}>
                            {isSaving ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Download className="mr-2 h-4 w-4" />
                            )}
                            Save Report as PDF
                        </Button>
                    </div>

                    {isLoading && (
                         <div className="text-center p-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                            <p className="mt-4 text-muted-foreground">Loading city data...</p>
                        </div>
                    )}
                    
                    {!isLoading && selectedCity && cityData && (
                        <div id="dashboard-content" className="animate-fadeInUp space-y-6">
                            <h2 className="text-3xl font-headline font-bold text-center">
                                Dashboard for <span className="text-primary">{cityData.name}</span>
                            </h2>
                            {/* Placeholder for charts and widgets */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <Card><CardHeader><CardTitle>Population Growth</CardTitle></CardHeader><CardContent className="h-48 flex items-center justify-center text-muted-foreground">Chart coming soon...</CardContent></Card>
                                <Card><CardHeader><CardTitle>Housing Situation</CardTitle></CardHeader><CardContent className="h-48 flex items-center justify-center text-muted-foreground">Chart coming soon...</CardContent></Card>
                                <Card><CardHeader><CardTitle>Inequality Score</CardTitle></CardHeader><CardContent className="h-48 flex items-center justify-center text-muted-foreground">Chart coming soon...</CardContent></Card>
                                <Card className="lg:col-span-3"><CardHeader><CardTitle>Infrastructure & Climate Risk</CardTitle></CardHeader><CardContent className="h-32 flex items-center justify-center text-muted-foreground">Widgets coming soon...</CardContent></Card>
                            </div>
                        </div>
                    )}

                    {!isLoading && !selectedCity && (
                        <div className="text-center p-12 border-2 border-dashed rounded-lg">
                            <p className="text-muted-foreground">Please select a city to view its dashboard.</p>
                        </div>
                    )}

                </SectionContainer>
            </div>
        </div>
    );
}
