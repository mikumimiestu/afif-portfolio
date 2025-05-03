import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A creative web developer specialized in building beautiful, functional, and accessible digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-400 mb-2">Email: contact@example.com</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600 dark:text-gray-400">Location: New York, USA</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Your Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};