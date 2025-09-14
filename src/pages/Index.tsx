import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const Index = () => {
  const activeSection = useScrollSpy(['hero', 'about', 'experience', 'projects', 'contact']);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
