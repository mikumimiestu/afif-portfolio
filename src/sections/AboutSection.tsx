import React, { useState } from 'react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from '../components/ui/Button';
import { Download, User, Briefcase, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState<'about' | 'experience' | 'education'>('about');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            My name is AFIF ASMALENDRA PUTRA, I am a design assistant and front-end developer. With a strong foundation in front-end technologies and an eye for design, I create seamless user experiences that are both functional and visually appealing.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            My journey in web development began 1 year ago, and since then I have worked with various clients and companies to bring their digital visions to life. I specialize in React.js and modern JavaScript frameworks for the front-end, Figma and Photoshop for design, with a focus on creating fast, accessible, and user-friendly interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            When I’m not coding, you’ll find me exploring new technologies, contributing to open source projects, or sharing my knowledge through articles and tutorials. I am constantly learning and developing my skills to stay on the cutting edge of web development.
            </p>
            {/* <Button icon={<Download size={16} />}>
              Download Resume
            </Button> */}
          </div>
        );
      
      // Experience Tab
      case 'experience':
        return (
          <div className="space-y-6">
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Design Assistant</h4>
              <p className="text-primary-600 dark:text-primary-400">Tech Nova Group| 2024 - Present</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Collaborated with the design team to create user-friendly interfaces and improve user
                experience. Assisted in conducting user research and usability testing.
              </p>
            </div>

          </div>
        );
      
      // Education Tab
      case 'education':
        return (
          <div className="space-y-6">
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor's in Informatic Enginering</h4>
              <p className="text-primary-600 dark:text-primary-400">Universitas Putra Indonesia "YPTK" Padang | 2024 - Present</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Currently pursuing a Bachelor's degree in Informatics Engineering, focusing on software development, 
                web technologies, and data science. Engaged in various projects and research to enhance practical skills.
              </p>
            </div>
            {/* <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white"></h4>
              <p className="text-primary-600 dark:text-primary-400">Various | 2015 - Present</p>
              <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside">
                <li>AWS Certified Developer</li>
                <li>Google Cloud Professional Developer</li>
                <li>React Certification - Meta</li>
              </ul>
            </div> */}
          </div>
        );
    }
  };
  
  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, skills, and experience"
          centered 
        />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div 
            className="lg:w-5/12 relative"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '0.2s'
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-primary-500 dark:bg-primary-700 transform rotate-6"></div>
              <img 
                src="/images/about.png"
                alt="Afif" 
                className="relative z-10 rounded-xl shadow-lg w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            
            {/* Experience badge */}
            <div 
              className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-20 transform hover:scale-105 transition-transform duration-300"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0, 0)' : 'translate(20px, 20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: '0.6s'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/50">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">1+ Years</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className="lg:w-7/12"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              transitionDelay: '0.4s'
            }}
          >
            {/* Tabs */}
            <div className="flex mb-8 border-b border-gray-200 dark:border-gray-700">
              <button 
                className={`py-2 px-4 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'about' 
                    ? 'border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setActiveTab('about')}
              >
                <User size={18} />
                About
              </button>
              <button 
                className={`py-2 px-4 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'experience' 
                    ? 'border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={18} />
                Experience
              </button>
              <button 
                className={`py-2 px-4 font-medium flex items-center gap-2 border-b-2 transition-colors ${
                  activeTab === 'education' 
                    ? 'border-primary-500 dark:border-primary-400 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={18} />
                Education
              </button>
            </div>
            
            {/* Tab Content */}
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};