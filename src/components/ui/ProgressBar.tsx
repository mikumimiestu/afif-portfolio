import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
  color?: string;
  animate?: boolean;
  duration?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  className = '',
  color = 'bg-primary-500',
  animate = true,
  duration = 1.5,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div className={`mb-6 ${className}`} ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
        <div 
          className={`h-2.5 rounded-full ${color} transition-all ${animate ? 'ease-out' : ''}`}
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transition: animate ? `width ${duration}s ease-out` : 'none',
          }}
        ></div>
      </div>
    </div>
  );
};