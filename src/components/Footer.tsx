import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground flex items-center">
            © {currentYear} Abdullah Ahmed — Built with{' '}
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            and curiosity.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">Switch theme:</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};