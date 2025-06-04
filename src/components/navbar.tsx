
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NeonText } from './neon-text';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Skills', target: 'skills' },
    { name: 'Contact', target: 'contact' }
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 px-6 py-3',
        scrolled
          ? 'bg-black/50 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <NeonText as="h1" color="cyan" className="text-xl font-bold">
            HARSH
            <span className="text-cyan-500 ml-0.5 animate-pulse">_</span>
          </NeonText>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-gray-300 hover:text-cyber-neon cursor-pointer transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-neon group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cyber-border p-1 rounded-md"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-cyber-neon mb-1.5"></div>
            <div className="w-6 h-0.5 bg-cyber-neon mb-1.5"></div>
            <div className="w-6 h-0.5 bg-cyber-neon"></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md cyber-border p-4 flex flex-col space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyber-neon py-2 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
