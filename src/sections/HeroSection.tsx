import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { AnimatedText } from '../components/ui/AnimatedText';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  // Animated text typewriter effect
  const [text, setText] = useState('');
  const roles = ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Creative Coder'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const ticker = setInterval(() => {
      const i = roleIndex % roles.length;
      const fullText = roles[i];
      
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }
      
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 1.5);
      }
      
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setDelta(2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex(roleIndex + 1);
        setDelta(500);
      }
    }, delta);
    
    return () => clearInterval(ticker);
  }, [text, isDeleting, roleIndex, isMounted]);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-primary-200 dark:bg-primary-900/30 blur-3xl opacity-50"></div>
        <div className="absolute top-2/3 -right-40 w-96 h-96 rounded-full bg-secondary-200 dark:bg-secondary-900/30 blur-3xl opacity-50"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="mb-2 opacity-0 animate-slide-down" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
                  Welcome to my portfolio
                </span>
              </div>
              
              <AnimatedText
                text="Hello, I'm John Doe"
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                staggerDelay={0.05}
                initialDelay={0.4}
              />
              
              <div className="h-10 mb-6 flex items-center">
                <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">I am a </span>
                <span className="text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-400 ml-2">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              <AnimatedText
                text="Building beautiful, functional web experiences with clean code and creative solutions."
                as="p"
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
                staggerDelay={0.015}
                initialDelay={0.8}
              />
              
              <div className="flex flex-wrap gap-4 mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <Button 
                  size="lg"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                >
                  Contact Me
                </Button>
              </div>
              
              <div className="flex space-x-5 opacity-0 animate-slide-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 opacity-0 transform translate-y-20"
              style={{ 
                animation: 'fadeIn 1s ease-out forwards, slideUp 1s ease-out forwards',
                animationDelay: '0.5s',
              }}
            >
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Portrait of John Doe" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Badge - Experience */}
            <div 
              className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 opacity-0 animate-slide-right"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            
            {/* Floating Badge - Projects */}
            <div 
              className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 opacity-0 animate-slide-left"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
            >
              <div className="text-xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
          <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
          <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};