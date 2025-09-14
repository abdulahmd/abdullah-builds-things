import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Animated Blob */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 blob-animation opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 blob-animation opacity-40" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I'm{' '}
            <span className="text-gradient">Abdullah Ahmed</span>{' '}
            <span className="wave">👋</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 slide-up" style={{ animationDelay: '0.2s' }}>
            Systems & Mechatronics Engineering Undergrad
          </h2>
          
          <p className="text-lg md:text-xl text-foreground mb-12 slide-up" style={{ animationDelay: '0.4s' }}>
            Building things that move and think.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="accent-gradient hover:shadow-blue transition-all duration-300"
              asChild
            >
              <a href="https://github.com/abdullah" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover-lift"
              asChild
            >
              <a href="https://linkedin.com/in/abdullah" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="hover-lift"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};