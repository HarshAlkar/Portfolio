
import React, { useState } from 'react';
import { NeonText } from '../neon-text';
import { Calendar, MapPin, Building, ExternalLink, Award, Users } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'internship' | 'project' | 'volunteer';
  description: string[];
  technologies?: string[];
  achievements?: string[];
  link?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 'internship-1',
    title: 'Software Development Intern',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    period: 'Jun 2024 - Aug 2024',
    type: 'internship',
    description: [
      'Developed responsive web applications using React and TypeScript',
      'Collaborated with senior developers on full-stack projects',
      'Implemented RESTful APIs and database integrations'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    achievements: [
      'Improved application performance by 25%',
      'Successfully delivered 3 client projects'
    ]
  },
  {
    id: 'project-1',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    type: 'work',
    description: [
      'Created custom websites for small businesses and startups',
      'Provided ongoing maintenance and technical support',
      'Managed client relationships and project timelines'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Figma'],
    achievements: [
      'Delivered 10+ successful projects',
      'Maintained 100% client satisfaction rate'
    ]
  },
  {
    id: 'volunteer-1',
    title: 'Technical Content Creator',
    company: 'Tech Community Blog',
    location: 'Remote',
    period: 'Mar 2024 - Present',
    type: 'volunteer',
    description: [
      'Write technical articles and tutorials for beginner developers',
      'Create video content explaining programming concepts',
      'Engage with the developer community through social media'
    ],
    technologies: ['Content Writing', 'Video Editing', 'Social Media'],
    achievements: [
      'Published 15+ technical articles',
      'Gained 2k+ followers across platforms'
    ]
  },
  {
    id: 'project-2',
    title: 'Mobile App Development Project',
    company: 'Academic Project',
    location: 'University',
    period: 'Sep 2024 - Dec 2024',
    type: 'project',
    description: [
      'Developed a cross-platform mobile application using React Native',
      'Implemented user authentication and data persistence',
      'Conducted user testing and gathered feedback for improvements'
    ],
    technologies: ['React Native', 'Firebase', 'JavaScript'],
    achievements: [
      'Achieved 95% project grade',
      'Featured in university tech showcase'
    ]
  }
];

const typeConfig = {
  work: {
    label: 'Work Experience',
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Building
  },
  internship: {
    label: 'Internships',
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500',
    icon: Users
  },
  project: {
    label: 'Projects',
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500',
    icon: Award
  },
  volunteer: {
    label: 'Volunteer',
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500',
    icon: ExternalLink
  }
};

export const ExperienceSection = () => {
  const [selectedType, setSelectedType] = useState<'all' | keyof typeof typeConfig>('all');
  
  const filteredExperience = selectedType === 'all' 
    ? experienceData 
    : experienceData.filter(exp => exp.type === selectedType);

  return (
    <section id="experience" className="relative py-24 px-6 bg-gradient-to-br from-slate-800/30 via-slate-900/50 to-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <NeonText as="h2" gradient className="text-4xl md:text-6xl font-bold mb-6">
            Professional Experience
          </NeonText>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A journey through my professional development, internships, and project experiences that have shaped my career in technology.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
              selectedType === 'all'
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
              : 'glass-effect text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Calendar className="w-5 h-5" />
            All Experience
          </button>
          
          {Object.entries(typeConfig).map(([type, config]) => {
            const IconComponent = config.icon;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type as keyof typeof typeConfig)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  selectedType === type
                  ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
                  : 'glass-effect text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {filteredExperience.map((experience, index) => {
            const config = typeConfig[experience.type];
            const IconComponent = config.icon;
            
            return (
              <div 
                key={experience.id}
                className="group relative professional-card hover-lift p-8 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${config.gradient}`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 lg:mb-0">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${config.gradient}/20 flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 ${config.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                        <div className="flex items-center gap-4 text-slate-300 mb-2">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span className="font-semibold">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${config.gradient}/20 border border-current/20`}>
                      <span className={`font-semibold capitalize ${config.color}`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {experience.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className={`w-2 h-2 rounded-full ${config.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  {experience.technologies && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Achievements */}
                  {experience.achievements && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300">
                            <Award className={`w-4 h-4 ${config.color} mt-0.5 flex-shrink-0`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="professional-card hover-lift p-8">
            <NeonText as="h3" color="purple" className="text-3xl font-bold mb-4">
              Ready for New Opportunities
            </NeonText>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and contribute to innovative projects. Let's connect and explore how we can work together.
            </p>
            <button className="professional-button text-white px-8 py-3">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
