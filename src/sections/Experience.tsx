import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/resumeData';

export default function Experience() {
  const [visibleExperiences, setVisibleExperiences] = useState(4);
  
  const showMoreExperiences = () => {
    setVisibleExperiences(prev => Math.min(prev + 4, experiences.length));
  };
  
  const showLessExperiences = () => {
    setVisibleExperiences(4);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="A decade of expertise in DevOps engineering, infrastructure management, and process automation across various industries."
        />
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {experiences.slice(0, visibleExperiences).map((experience, index) => (
              <div 
                key={experience.id} 
                className={`md:${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} w-full relative`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={100 * (index % 4)}
                data-aos-duration="600"
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
          
          {experiences.length > 4 && (
            <div className="mt-12 text-center">
              {visibleExperiences < experiences.length ? (
                <button 
                  onClick={showMoreExperiences}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                >
                  Show More
                </button>
              ) : (
                <button 
                  onClick={showLessExperiences}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}