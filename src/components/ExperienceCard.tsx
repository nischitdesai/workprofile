import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600 dark:border-blue-400">
      <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
      
      <div className="mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
      </div>
      
      {experience.period && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.period} {experience.duration && `(${experience.duration})`}
        </p>
      )}
      
      {experience.description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
      )}
      
      <ul className="space-y-2">
        {experience.responsibilities.map((responsibility, index) => (
          <li 
            key={index} 
            className="flex items-start text-gray-700 dark:text-gray-300"
          >
            <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}