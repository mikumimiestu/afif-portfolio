import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantClasses = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md',
  secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white shadow-md',
  outline: 'bg-transparent border-2 border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-secondary-900',
  ghost: 'bg-transparent hover:bg-primary-50 dark:hover:bg-secondary-900 text-primary-600 dark:text-primary-400'
};

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3'
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  return (
    <button 
      className={`
        rounded-lg font-medium transition-all duration-300
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${icon ? 'flex items-center justify-center gap-2' : ''}
        ${iconPosition === 'right' ? 'flex-row-reverse' : ''}
        ${className || ''}
      `}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};