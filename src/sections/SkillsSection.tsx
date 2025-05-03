import React, { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills, Skill } from '../data/skills';
import { Code, Server, Palette, PenTool as Tool } from 'lucide-react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'design' | 'other';

const categoryIcons = {
  frontend: <Code className="w-5 h-5" />,
  backend: <Server className="w-5 h-5" />,
  design: <Palette className="w-5 h-5" />,
  other: <Tool className="w-5 h-5" />,
};

export const SkillsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical abilities and expertise"
          centered 
        />
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'frontend', 'backend', 'design', 'other'] as SkillCategory[]).map((category) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category !== 'all' && categoryIcons[category]}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
            transitionDelay: '0.2s'
          }}
        >
          {filteredSkills.map((skill, index) => (
            <ProgressBar 
              key={skill.name}
              label={skill.name} 
              percentage={skill.percentage}
              color={
                skill.category === 'frontend' ? 'bg-primary-500 dark:bg-primary-400' :
                skill.category === 'backend' ? 'bg-secondary-500 dark:bg-secondary-400' :
                skill.category === 'design' ? 'bg-accent-500 dark:bg-accent-400' :
                'bg-gray-500 dark:bg-gray-400'
              }
              duration={1 + (index * 0.1)}
            />
          ))}
        </div>
        
        {/* Additional Skills */}
        <div 
          className="mt-16 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            transitionDelay: '0.5s'
          }}
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'SASS/SCSS',
              'Vite', 'Responsive Design', 'SEO', 'WordPress',
              'Performance Optimization'
            ].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};