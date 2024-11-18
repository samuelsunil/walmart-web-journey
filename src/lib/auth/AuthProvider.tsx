import { ClerkProvider } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

interface AuthConfig {
  provider: 'clerk' | 'other';
  // Add other auth configuration options
}

export const AuthProvider = ({ 
  children,
  config 
}: PropsWithChildren<{ config: AuthConfig }>) => {
  // This could be switched based on the provider type
  if (config.provider === 'clerk') {
    return <ClerkProvider>{children}</ClerkProvider>;
  }
  
  return <>{children}</>;
}; 