import { Skill } from '../types';

interface SkillTagProps {
  skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'devops':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cloud':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'programming':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'tools':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(skill.category)}`}>
      {skill.name}
    </span>
  );
}