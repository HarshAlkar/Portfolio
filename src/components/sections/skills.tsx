
import React, { useState } from 'react';
import { NeonText } from '../neon-text';
import { Code, Palette, Wrench, Lightbulb, Star, ChevronRight } from 'lucide-react';

type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
type SkillType = 'technical' | 'creative' | 'productivity' | 'soft';

interface SkillItem {
  name: string;
  level: SkillLevel;
  percentage: number;
  type: SkillType;
  description: string;
  experience: string;
}

interface SkillCategory {
  id: SkillType;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'technical',
    name: 'Development',
    icon: Code,
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'creative',
    name: 'Design & Media',
    icon: Palette,
    color: 'text-purple-400',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'productivity',
    name: 'Tools & Office',
    icon: Wrench,
    color: 'text-green-400',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'soft',
    name: 'Communication',
    icon: Lightbulb,
    color: 'text-orange-400',
    gradient: 'from-orange-500 to-red-500'
  }
];

const skillsData: SkillItem[] = [
  // Technical Skills
  { 
    name: 'Python', 
    level: 'advanced', 
    percentage: 85, 
    type: 'technical',
    description: 'Backend development, automation, data analysis',
    experience: '2+ years'
  },
  { 
    name: 'Java', 
    level: 'advanced', 
    percentage: 80, 
    type: 'technical',
    description: 'Object-oriented programming, enterprise applications',
    experience: '2+ years'
  },
  { 
    name: 'JavaScript/TypeScript', 
    level: 'advanced', 
    percentage: 80, 
    type: 'technical',
    description: 'Frontend development, modern frameworks',
    experience: '2+ years'
  },
  { 
    name: 'React & Next.js', 
    level: 'intermediate', 
    percentage: 75, 
    type: 'technical',
    description: 'Modern web applications, component architecture',
    experience: '1+ years'
  },
  { 
    name: 'Node.js & Express', 
    level: 'intermediate', 
    percentage: 72, 
    type: 'technical',
    description: 'Server-side development, REST APIs',
    experience: '1+ years'
  },
  { 
    name: 'SQL & Databases', 
    level: 'intermediate', 
    percentage: 70, 
    type: 'technical',
    description: 'Database design, query optimization',
    experience: '1+ years'
  },

  // Creative Skills
  { 
    name: 'UI/UX Design', 
    level: 'intermediate', 
    percentage: 70, 
    type: 'creative',
    description: 'User interface design, prototyping',
    experience: '1+ years'
  },
  { 
    name: 'Adobe Creative Suite', 
    level: 'intermediate', 
    percentage: 65, 
    type: 'creative',
    description: 'Photoshop, Premiere Pro, visual content',
    experience: '1+ years'
  },
  { 
    name: 'Video Editing', 
    level: 'intermediate', 
    percentage: 70, 
    type: 'creative',
    description: 'Final Cut Pro, content creation',
    experience: '1+ years'
  },
  { 
    name: 'Figma', 
    level: 'intermediate', 
    percentage: 70, 
    type: 'creative',
    description: 'Design systems, collaborative design',
    experience: '1+ years'
  },

  // Productivity Tools
  { 
    name: 'Microsoft Office Suite', 
    level: 'expert', 
    percentage: 90, 
    type: 'productivity',
    description: 'Advanced Excel, Word, PowerPoint',
    experience: '5+ years'
  },
  { 
    name: 'Project Management', 
    level: 'intermediate', 
    percentage: 65, 
    type: 'productivity',
    description: 'Agile methodologies, team coordination',
    experience: '1+ years'
  },

  // Soft Skills
  { 
    name: 'Content Writing', 
    level: 'advanced', 
    percentage: 80, 
    type: 'soft',
    description: 'Technical documentation, creative writing',
    experience: '2+ years'
  },
  { 
    name: 'English Proficiency', 
    level: 'expert', 
    percentage: 90, 
    type: 'soft',
    description: 'Professional communication, presentations',
    experience: 'Native level'
  }
];

const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 'beginner': return 'text-yellow-400';
    case 'intermediate': return 'text-orange-400';
    case 'advanced': return 'text-blue-400';
    case 'expert': return 'text-purple-400';
    default: return 'text-gray-400';
  }
};

const getLevelStars = (level: SkillLevel): number => {
  switch (level) {
    case 'beginner': return 2;
    case 'intermediate': return 3;
    case 'advanced': return 4;
    case 'expert': return 5;
    default: return 1;
  }
};

export const SkillsSection = () => {
  const [selectedType, setSelectedType] = useState<SkillType | 'all'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const filteredSkills = selectedType === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.type === selectedType);

  const selectedCategory = skillCategories.find(cat => cat.id === selectedType);

  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <NeonText as="h2" gradient className="text-4xl md:text-6xl font-bold mb-6">
            Expertise & Skills
          </NeonText>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities, creative skills, and professional expertise gained through continuous learning and hands-on experience.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                selectedType === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                : 'glass-effect text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Star className="w-5 h-5" />
              All Skills
            </button>
            
            {skillCategories.map(category => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedType(category.id)}
                  className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    selectedType === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                    : 'glass-effect text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                </button>
              );
            })}
          </div>
          
          {selectedCategory && (
            <div className="text-center">
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r ${selectedCategory.gradient}/20 border border-current/20`}>
                <selectedCategory.icon className={`w-6 h-6 ${selectedCategory.color}`} />
                <span className={`font-semibold ${selectedCategory.color}`}>
                  {selectedCategory.name} Skills
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredSkills.map((skill) => {
            const category = skillCategories.find(cat => cat.id === skill.type);
            const IconComponent = category?.icon || Code;
            
            return (
              <div 
                key={skill.name}
                className="group relative professional-card hover-lift p-8 overflow-hidden"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${category?.gradient || 'from-blue-500 to-purple-500'}`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category?.gradient || 'from-blue-500 to-purple-500'}/20`}>
                        <IconComponent className={`w-6 h-6 ${category?.color || 'text-blue-400'}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < getLevelStars(skill.level)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-slate-600'
                              }`}
                            />
                          ))}
                          <span className={`ml-2 text-sm font-semibold capitalize ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${category?.color || 'text-blue-400'}`}>
                        {skill.percentage}%
                      </div>
                      <div className="text-xs text-slate-400">{skill.experience}</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${category?.gradient || 'from-blue-500 to-purple-500'}`}
                        style={{ 
                          width: `${hoveredSkill === skill.name ? skill.percentage : 0}%`,
                          transitionDelay: hoveredSkill === skill.name ? '200ms' : '0ms'
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center text-sm text-slate-400 group-hover:text-white transition-colors">
                    <span>View projects</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Certifications Section */}
        <div className="professional-card hover-lift p-10">
          <div className="text-center mb-10">
            <NeonText as="h3" color="purple" className="text-3xl font-bold mb-4">
              Certifications & Training
            </NeonText>
            <p className="text-slate-300">Continuous learning through structured programs and professional development</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Programming With Python',
                provider: 'Internshala Training',
                period: 'Dec 2024 - Jan 2025',
                type: 'Virtual Training',
                color: 'bg-blue-500'
              },
              {
                title: 'Core Java Development',
                provider: 'Internshala Training',
                period: 'Jun 2024 - Jul 2024',
                type: 'Virtual Training',
                color: 'bg-orange-500'
              },
              {
                title: 'Android Application Development',
                provider: 'EduKill Training Program',
                period: 'Aug 2024 - Sep 2024',
                type: 'Specialized Course',
                color: 'bg-green-500'
              },
              {
                title: 'TCS iON Career Edge - Young Professional',
                provider: 'TCS iON',
                period: 'Mar 2024 - Apr 2024',
                type: 'Professional Development',
                color: 'bg-purple-500'
              }
            ].map((cert, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-4 h-4 ${cert.color} rounded-full mt-2 flex-shrink-0`}></div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-2">{cert.title}</h4>
                    <p className="text-slate-300 font-semibold mb-1">{cert.provider}</p>
                    <p className="text-slate-400 text-sm mb-2">{cert.period}</p>
                    <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                      {cert.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
