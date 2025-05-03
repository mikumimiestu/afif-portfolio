import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="p-2 rounded-full bg-primary-100 dark:bg-secondary-900 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-secondary-400"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-secondary-700" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-300" />
      )}
    </button>
  );
};