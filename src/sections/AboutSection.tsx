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
              I'm a passionate web developer with expertise in building modern, responsive web applications.
              With a strong foundation in front-end technologies and a keen eye for design, I create seamless 
              user experiences that are both functional and visually appealing.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in web development began 5 years ago, and I've since worked with various clients 
              and companies to bring their digital visions to life. I specialize in React.js and modern 
              JavaScript frameworks, with a focus on creating fast, accessible, and user-friendly interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through articles and tutorials. I'm constantly learning 
              and evolving my skills to stay at the forefront of web development.
            </p>
            <Button icon={<Download size={16} />}>
              Download Resume
            </Button>
          </div>
        );
      case 'experience':
        return (
          <div className="space-y-6">
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Senior Frontend Developer</h4>
              <p className="text-primary-600 dark:text-primary-400">ABC Tech Inc. | 2021 - Present</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Lead frontend development for enterprise applications, managing a team of developers
                and implementing modern web technologies and best practices.
              </p>
            </div>
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Frontend Developer</h4>
              <p className="text-primary-600 dark:text-primary-400">XYZ Solutions | 2018 - 2021</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Developed responsive web applications using React, Redux and TypeScript. Collaborated
                with designers and back-end developers to create seamless user experiences.
              </p>
            </div>
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Web Developer</h4>
              <p className="text-primary-600 dark:text-primary-400">StartUp Studio | 2016 - 2018</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Built and maintained websites for various clients using JavaScript, HTML, and CSS.
                Implemented responsive designs and ensured cross-browser compatibility.
              </p>
            </div>
          </div>
        );
      case 'education':
        return (
          <div className="space-y-6">
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Master's in Computer Science</h4>
              <p className="text-primary-600 dark:text-primary-400">Tech University | 2014 - 2016</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Specialized in Human-Computer Interaction and Web Technologies.
                Graduated with honors.
              </p>
            </div>
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Bachelor's in Computer Science</h4>
              <p className="text-primary-600 dark:text-primary-400">State University | 2010 - 2014</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Focused on software development fundamentals, data structures, and algorithms.
                Participated in multiple hackathons and coding competitions.
              </p>
            </div>
            <div className="border-l-2 border-primary-500 dark:border-primary-400 pl-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Professional Certifications</h4>
              <p className="text-primary-600 dark:text-primary-400">Various | 2015 - Present</p>
              <ul className="text-gray-600 dark:text-gray-300 mt-2 list-disc list-inside">
                <li>AWS Certified Developer</li>
                <li>Google Cloud Professional Developer</li>
                <li>React Certification - Meta</li>
              </ul>
            </div>
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
                src="https://images.pexels.com/photos/3770000/pexels-photo-3770000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="John Doe working at desk" 
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
                  <div className="text-xl font-bold text-gray-900 dark:text-white">5+ Years</div>
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