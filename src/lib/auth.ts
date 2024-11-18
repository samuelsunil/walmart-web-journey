import { authMiddleware } from "@clerk/nextjs";

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
}

export interface AuthProvider {
  getUser(): Promise<AuthUser | null>;
  signIn(credentials: any): Promise<void>;
  signOut(): Promise<void>;
}

export class ClerkAuthProvider implements AuthProvider {
  async getUser(): Promise<AuthUser | null> {
    // Implement Clerk-specific logic
    return null;
  }

  async signIn(credentials: any): Promise<void> {
    // Implement Clerk-specific logic
  }

  async signOut(): Promise<void> {
    // Implement Clerk-specific logic
  }
} 