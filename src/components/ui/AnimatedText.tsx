import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  staggerDelay?: number;
  initialDelay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  as: Component = 'p',
  staggerDelay = 0.05,
  initialDelay = 0.1,
  direction = 'up',
  once = true,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ once });
  
  const words = text.split(' ');
  
  // Mapping direction to animation class
  const directionClassMap = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };
  
  const initialClass = directionClassMap[direction];

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Component className="inline-block">
        {words.map((word, i) => (
          <span 
            key={i} 
            className="inline-block"
            style={{
              opacity: 0,
              transform: initialClass,
              animation: isVisible 
                ? `fadeIn 0.6s ease-out forwards, slideUp 0.6s ease-out forwards` 
                : 'none',
              animationDelay: `${initialDelay + i * staggerDelay}s`
            }}
          >
            {word}
            {i !== words.length - 1 && ' '}
          </span>
        ))}
      </Component>
    </div>
  );
};