import SectionTitle from '../components/SectionTitle';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications."
          center
        />
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-all border-l-4 border-blue-600 dark:border-blue-400"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}