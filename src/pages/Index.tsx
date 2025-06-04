import React, { useEffect } from 'react';
import { CursorTrail } from '@/components/cursor-trail';
import { FloatingObjects } from '@/components/floating-objects';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { ThreeBackground } from '@/components/three-background';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { ExperienceSection } from '@/components/sections/experience';

const Index = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulating system boot for immersive effect
    const bootSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      toast({
        title: "System initializing...",
        description: "Loading portfolio assets",
      });
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Welcome to Harsh's Portfolio",
        description: "Ready to explore",
      });
    };
    
    bootSequence();
  }, [toast]);

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* Background Elements */}
      <ThreeBackground />
      <FloatingObjects />
      {!isMobile && <CursorTrail />}
      
      {/* Main Content */}
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
