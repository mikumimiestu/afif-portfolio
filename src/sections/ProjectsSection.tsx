import React, { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from '../components/ui/ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/projects';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design';

export const ProjectsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="Explore my recent work and creative solutions"
          centered 
        />
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {(['all', 'web', 'mobile', 'design'] as ProjectCategory[]).map((category) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out',
            transitionDelay: '0.2s'
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index * 100}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div 
          className="mt-16 text-center"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            transitionDelay: '0.6s'
          }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work or have a project in mind?
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};