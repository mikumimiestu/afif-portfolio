import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 
        className={`text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 
          ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl ${centered ? 'mx-auto' : ''}
            ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          {subtitle}
        </p>
      )}
      
      <div 
        className={`h-1 w-20 bg-primary-500 dark:bg-primary-400 mt-3 rounded-full
          ${centered ? 'mx-auto' : ''} 
          ${isVisible ? 'animate-slide-left opacity-100' : 'w-0 opacity-0'}`}
        style={{ animationDelay: '0.6s', transition: 'width 0.6s ease-out' }}
      ></div>
    </div>
  );
};