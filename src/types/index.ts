export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  location?: string;
  description?: string;
  responsibilities: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'devops' | 'cloud' | 'programming' | 'tools' | 'other';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface MenuItem {
  id: string;
  label: string;
  href: string;
}