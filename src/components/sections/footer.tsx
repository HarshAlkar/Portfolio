
import React from 'react';
import { NeonText } from '../neon-text';
import { Link } from 'react-scroll';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 px-6 border-t border-border/30 glass-effect">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <NeonText as="h2" gradient className="text-2xl font-bold mb-4">
              HARSH
            </NeonText>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Building the Future, One Line at a Time.
            </p>
            <p className="text-muted-foreground">
              Software Engineer | BE.IT Student
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Connect</h3>
            <ul className="space-y-3">
              {[
                { name: 'GitHub', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Twitter', url: '#' },
                { name: 'Email', url: 'mailto:harsh@example.com' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Harsh. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-sm mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Professional background pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 -z-10 overflow-hidden">
        <div 
          className="absolute left-0 right-0 h-full"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.3
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-background to-transparent"></div>
      </div>
    </footer>
  );
};
