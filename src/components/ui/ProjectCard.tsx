import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  delay = 0,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="overflow-hidden h-64 relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200 text-sm line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              icon={<Github size={16} />}
              as="a" 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </Button>
          )}
          
          {liveUrl && (
            <Button 
              variant="primary" 
              size="sm"
              icon={<ExternalLink size={16} />}
              as="a" 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};