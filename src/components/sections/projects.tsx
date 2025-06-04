
import React, { useState } from 'react';
import { NeonText } from '../neon-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Define project data
const projectsData = [
  {
    id: 1,
    title: 'AI Content Generator',
    description: 'A machine learning-powered tool that generates blog content based on user prompts and preferences.',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Customizable content types and styles',
      'Export options for various platforms',
      'User history and favorites',
    ]
  },
  {
    id: 2,
    title: 'Crypto Portfolio Tracker',
    description: 'Real-time cryptocurrency portfolio tracking with price alerts and performance analytics.',
    image: '/placeholder.svg',
    tags: ['React', 'TypeScript', 'Firebase', 'CoinGecko API'],
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Real-time price updates',
      'Portfolio performance charts',
      'Custom alert settings',
    ]
  },
  {
    id: 3,
    title: 'Smart Home Dashboard',
    description: 'Centralized control system for IoT devices with customizable widgets and automation rules.',
    image: '/placeholder.svg',
    tags: ['Vue.js', 'Express', 'MQTT', 'WebSockets'],
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Device grouping and scenes',
      'Energy usage monitoring',
      'Voice command integration',
    ]
  },
  {
    id: 4,
    title: 'Social Media Scheduler',
    description: 'Tool for planning and scheduling social media content across multiple platforms.',
    image: '/placeholder.svg',
    tags: ['React', 'Redux', 'Express', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    features: [
      'Calendar view and content planning',
      'Analytics dashboard',
      'Multi-account management',
    ]
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProjectDetails = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <NeonText as="h2" gradient className="text-4xl md:text-5xl font-bold mb-4">
            Projects
          </NeonText>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore my latest work. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={cn(
                "relative group transition-all duration-500",
                activeProject === project.id ? "md:-translate-y-2" : ""
              )}
            >
              <Card className="professional-card hover-lift h-full overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <NeonText as="h3" className="text-xl font-semibold" color="purple">
                      {project.title}
                    </NeonText>
                    <div 
                      className={cn(
                        "w-10 h-10 flex items-center justify-center rounded-full glass-effect",
                        "cursor-pointer transition-all duration-300 hover:scale-110",
                        activeProject === project.id ? "bg-primary/20" : "hover:bg-primary/10"
                      )}
                      onClick={() => toggleProjectDetails(project.id)}
                    >
                      <span className="text-primary text-xl font-bold">
                        {activeProject === project.id ? '−' : '+'}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 h-12 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-3 py-1 glass-effect border border-primary/20 rounded-full text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      activeProject === project.id ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="text-primary mb-3 text-sm font-semibold">Key Features:</h4>
                      <ul className="space-y-2 text-muted-foreground mb-4 text-sm">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect border-primary/30 text-primary hover:bg-primary/10 flex-1 font-medium"
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect border-accent/30 text-accent hover:bg-accent/10 flex-1 font-medium"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="professional-button text-white font-semibold px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
