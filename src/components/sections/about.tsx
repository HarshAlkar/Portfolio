
import React, { useState } from 'react';
import { NeonText } from '../neon-text';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <NeonText as="h2" gradient className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </NeonText>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="professional-card hover-lift p-8 order-2 md:order-1">
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px]' : 'max-h-[300px] md:max-h-[400px]'}`}>
              <div className="mb-6">
                <NeonText as="h3" className="text-xl font-semibold mb-3" color="purple">
                  Who am I?
                </NeonText>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I'm Harsh Alkar, a dedicated B.E. (Bachelor of Engineering) student at Padmabhushan Vasantdada Patil Pratishthan's College of Engineering. Currently pursuing my degree (2023-2027), I'm passionate about software development and emerging technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Based in Mumbai, I specialize in full-stack development with hands-on experience in Python, Java, React, and modern web technologies. I'm actively building my expertise through practical projects and industry-relevant training programs.
                </p>
              </div>

              <div className="mb-6">
                <NeonText as="h3" className="text-xl font-semibold mb-3" color="purple">
                  My Journey
                </NeonText>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Currently gaining industry experience through my internship at Suvidha Foundation, Mumbai (Aug 2024), where I'm working on real-world projects and developing practical skills in software development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I've completed comprehensive training programs including Programming with Python, Android Application Development, Core Java, and specialized courses in cybersecurity and AI. My focus is on building scalable applications and staying current with industry best practices.
                </p>
              </div>

              <div className="mb-6">
                <NeonText as="h3" className="text-xl font-semibold mb-3" color="purple">
                  Professional Development
                </NeonText>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  I've completed multiple certifications including Core Java development, Information Security Fundamentals, and specialized training in AI and software engineering through reputable platforms like Internshala and TCS iON Career Edge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As an active member of my college's Training and Placement Organization and Information Technology Students Association, I help bridge the gap between academic knowledge and industry requirements while contributing to peer learning initiatives.
                </p>
              </div>

              <div>
                <NeonText as="h3" className="text-xl font-semibold mb-3" color="purple">
                  Leadership & Community
                </NeonText>
                <p className="text-muted-foreground leading-relaxed">
                  I served as Chairman of FESA Event, where I led a team to successfully organize and execute events, ensuring seamless experiences for all participants. I'm passionate about knowledge sharing and actively contribute to creating collaborative learning environments.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                variant="ghost" 
                className="glass-effect border border-primary/30 text-primary hover:bg-primary/10 font-medium px-6 py-2"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show Less' : 'Read More'}
              </Button>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="professional-border w-72 h-72 md:w-80 md:h-80 mx-auto rounded-2xl overflow-hidden hover-lift">
              <div className="w-full h-full rounded-2xl professional-card flex items-center justify-center">
                <div className="text-8xl font-bold text-gradient animate-pulse-professional">H</div>
              </div>
            </div>
            
            {/* Professional floating elements */}
            <div className="absolute -top-6 -left-6 glass-effect px-4 py-3 rounded-xl floating-animation">
              <div className="text-sm">
                <NeonText color="purple" className="font-semibold">B.E. Student</NeonText>
                <div className="text-muted-foreground">2023-2027</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-effect px-4 py-3 rounded-xl floating-animation" style={{ animationDelay: '2s' }}>
              <div className="text-sm">
                <NeonText className="font-semibold">Current Intern</NeonText>
                <div className="text-muted-foreground">Suvidha Foundation</div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-12 glass-effect px-3 py-2 rounded-lg floating-animation" style={{ animationDelay: '4s' }}>
              <div className="text-xs">
                <NeonText color="accent" className="font-semibold">Mumbai</NeonText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
