
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, User as UserIcon, LogOut } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfilePage() {
  const { user, loading, logout } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, redirect to auth page
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/auth');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
        return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  }

  if (loading || !user) {
    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="My Profile" subtitle="Your personal dashboard">
                <Card className="w-full max-w-2xl mx-auto">
                    <CardHeader className="text-center">
                        <Skeleton className="w-32 h-32 rounded-full mx-auto" />
                        <Skeleton className="h-8 w-48 mx-auto mt-4" />
                        <Skeleton className="h-4 w-64 mx-auto mt-2" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                           <Skeleton className="h-6 w-6 rounded-sm"/>
                           <Skeleton className="h-4 w-full" />
                        </div>
                         <div className="flex items-center space-x-4">
                           <Skeleton className="h-6 w-6 rounded-sm"/>
                           <Skeleton className="h-4 w-full" />
                        </div>
                         <div className="flex items-center space-x-4">
                           <Skeleton className="h-6 w-6 rounded-sm"/>
                           <Skeleton className="h-4 w-full" />
                        </div>
                        <Skeleton className="h-10 w-full mt-6" />
                    </CardContent>
                </Card>
            </SectionContainer>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <SectionContainer title="My Profile" subtitle="Your personal dashboard">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader className="text-center items-center">
                    <Avatar className="w-32 h-32 border-4 border-primary shadow-lg">
                        <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                        <AvatarFallback className="text-4xl">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4 text-3xl font-headline">{user.displayName || 'User'}</CardTitle>
                    <CardDescription>{user.email ? 'Welcome back!' : 'Welcome to your profile.'}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border-t pt-4">
                         <h3 className="text-lg font-semibold mb-3">Details</h3>
                        {user.displayName && (
                             <div className="flex items-center space-x-4 text-muted-foreground">
                                <UserIcon className="w-5 h-5 text-accent"/>
                                <span>{user.displayName}</span>
                            </div>
                        )}
                        {user.email && (
                            <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                                <Mail className="w-5 h-5 text-accent"/>
                                <span>{user.email}</span>
                            </div>
                        )}
                        {user.phoneNumber && (
                            <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                                <Phone className="w-5 h-5 text-accent"/>
                                <span>{user.phoneNumber}</span>
                            </div>
                        )}
                    </div>
                     <Button onClick={handleLogout} variant="destructive" className="w-full mt-6">
                        <LogOut className="mr-2 h-4 w-4"/>
                        Logout
                    </Button>
                </CardContent>
            </Card>
      </SectionContainer>
    </div>
  );
}
