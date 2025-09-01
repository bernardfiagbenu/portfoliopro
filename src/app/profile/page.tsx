
'use client';

import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { user, loading, logout } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, redirect to auth page
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name[0].toUpperCase();
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/auth');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  // While loading, show a placeholder
  if (loading) {
    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Profile" subtitle="Loading your profile...">
                <div className="flex justify-center items-center h-48">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </SectionContainer>
        </div>
    );
  }

  // If there's a user, show the profile
  return user ? (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="My Profile" subtitle="Welcome to your personal dashboard">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="items-center text-center">
              <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
                <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">{user.displayName || 'Anonymous User'}</CardTitle>
              <CardDescription>{user.email || user.phoneNumber || 'No contact info'}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                This is your profile page. More features coming soon!
              </p>
              <Button onClick={handleLogout} variant="destructive">
                Log Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </div>
  ) : null; // Return null while redirecting
}

    