
import React from 'react';
import { NeonText } from '../neon-text';
import { TypingEffect } from '../typing-effect';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

export const HeroSection = () => {
  const typedTexts = [
    'Building the Future, One Line at a Time.',
    'Software Engineer. Problem Solver. Creator.',
    'BE.IT Student. Full-Stack Developer.',
    'Passionate about Innovation & Technology.',
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 z-0">
        {/* Professional background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-professional-dark to-professional-darker"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-professional-purple/10 rounded-full blur-2xl floating-animation" style={{ animationDelay: '4s' }}></div>
        
        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-6 inline-block animate-scale-in">
          <div className="glass-effect px-6 py-3 rounded-full">
            <span className="text-sm text-muted-foreground">
              BE.IT Student
              <span className="mx-3 text-primary">•</span>
              Software Engineer
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-slide-up">
          Hi, I'm <NeonText as="span" gradient className="text-gradient">Harsh</NeonText>
        </h1>
        
        <div className="h-20 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl md:text-3xl text-muted-foreground">
            <TypingEffect texts={typedTexts} />
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
            <Button className="professional-button text-white font-semibold text-lg px-8 py-4">
              View My Work
            </Button>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
            <Button variant="outline" className="glass-effect border-primary/30 text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-4">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>

      {/* Professional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-muted-foreground text-sm mb-3 font-medium">Scroll Down</span>
        <div className="w-6 h-12 rounded-full border-2 border-primary/30 flex justify-center pt-3">
          <div className="w-1 h-3 bg-primary rounded-full pulse-professional"></div>
        </div>
      </div>
    </section>
  );
};
