import SectionTitle from '../components/SectionTitle';
import SkillTag from '../components/SkillTag';
import { skills } from '../data/resumeData';

export default function Skills() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = [
    { id: 'devops', label: 'DevOps' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'programming', label: 'Programming' },
    { id: 'tools', label: 'Tools' },
    { id: 'other', label: 'Other' }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technical skills and competencies I've developed throughout my career."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            skillsByCategory[category.id] && (
              <div 
                key={category.id}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={100 * categories.indexOf(category)}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  {category.label}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory[category.id].map(skill => (
                    <SkillTag key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}