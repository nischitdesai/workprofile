import { Experience, Skill, Education, MenuItem } from '../types';

export const navItems: MenuItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'IQVIA RDS INDIA PVT LTD',
    role: 'Senior Product Sppt Tech Adv',
    period: 'Apr 2025 - current',
    responsibilities: [
      'Leading DevOps initiatives and infrastructure management',
      'Implementing automation for continuous integration and deployment',
      'Managing cloud resources and optimizing performance',
      'Providing technical leadership and mentorship to team members'
    ]
  },
  {
    id: 'exp2',
    company: 'IQVIA RDS INDIA PVT LTD',
    role: 'Product Sppt Tech Adv 2',
    period: 'Feb 2021 - Apr 2025',
    duration: '51 months',
    responsibilities: [
      'Orchestrated DevOps processes for efficient software delivery',
      'Implemented CI/CD pipelines to streamline development workflows',
      'Managed cloud infrastructure and optimized resource utilization',
      'Collaborated with development teams to enhance deployment strategies'
    ]
  },
  {
    id: 'exp3',
    company: 'SkillDemand',
    role: 'Sr. DevOps Engineer (Product Sppt Tech Adv 1)',
    period: 'Apr 2020 - Jan 2021',
    duration: '10 months',
    responsibilities: [
      'Led DevOps initiatives and infrastructure automation',
      'Implemented and managed CI/CD pipelines',
      'Optimized cloud resource utilization and performance',
      'Collaborated with development teams on deployment strategies'
    ]
  },
  {
    id: 'exp4',
    company: 'Nexamatic Software Solution Pvt. Ltd.',
    role: 'DevOps Engineer / Build Release Engineer',
    period: 'Aug 2014 - Feb 2020',
    duration: '67 months',
    responsibilities: [
      'Configured and maintained CI/CD pipelines',
      'Managed cloud infrastructure and deployment automation',
      'Implemented monitoring and logging solutions',
      'Collaborated with development teams to improve deployment processes'
    ]
  },
  {
    id: 'exp5',
    company: 'Ace Cranes FZ LLC - Dubai',
    role: 'Client: Ace Cranes FZ LLC - Dubai - Feb 2017 - Feb 2019 (System administrator visa)',
    period: 'Feb 2017 - Feb 2019',
    responsibilities: [
      'Administered systems and infrastructure',
      'Managed server deployments and maintenance',
      'Implemented security protocols and procedures',
      'Provided technical support and troubleshooting'
    ]
  },
  {
    id: 'exp6',
    company: 'Artech Infosystems Pvt. Ltd.',
    role: 'IT Analyst / Service Desk Engineer',
    period: 'Dec 2013 - Aug 2014',
    duration: '9 months',
    responsibilities: [
      'Provided IT support and troubleshooting services',
      'Managed service desk operations and ticket resolution',
      'Implemented system upgrades and maintenance',
      'Collaborated with IT teams on technical solutions'
    ]
  },
  {
    id: 'exp7',
    company: 'Accenture',
    role: 'IT Analyst, Bangalore',
    period: '',
    responsibilities: [
      'Provided technical support and issue resolution',
      'Collaborated with teams to implement IT solutions',
      'Managed system upgrades and maintenance',
      'Assisted with documentation and process improvements'
    ]
  },
  {
    id: 'exp8',
    company: 'Halliburton',
    role: 'Project: Halliburton Remote IT',
    period: '',
    responsibilities: [
      'Supported remote IT infrastructure and operations',
      'Implemented technical solutions for field operations',
      'Managed system deployments and maintenance',
      'Provided troubleshooting and technical support'
    ]
  }
];

export const skills: Skill[] = [
  // DevOps
  { id: 'skill1', name: 'Jenkins', category: 'devops' },
  { id: 'skill2', name: 'Docker', category: 'devops' },
  { id: 'skill3', name: 'Kubernetes', category: 'devops' },
  { id: 'skill4', name: 'Terraform', category: 'devops' },
  { id: 'skill5', name: 'CI/CD', category: 'devops' },
  { id: 'skill6', name: 'Git', category: 'devops' },
  { id: 'skill7', name: 'Infrastructure as Code', category: 'devops' },
  
  // Cloud
  { id: 'skill8', name: 'AWS', category: 'cloud' },
  { id: 'skill9', name: 'Azure', category: 'cloud' },
  { id: 'skill10', name: 'GCP', category: 'cloud' },
  { id: 'skill11', name: 'Cloud Architecture', category: 'cloud' },
  
  // Programming
  { id: 'skill12', name: 'Python', category: 'programming' },
  { id: 'skill13', name: 'Bash/Shell', category: 'programming' },
  { id: 'skill14', name: 'JavaScript', category: 'programming' },
  { id: 'skill15', name: 'YAML', category: 'programming' },
  
  // Tools
  { id: 'skill16', name: 'Prometheus', category: 'tools' },
  { id: 'skill17', name: 'Grafana', category: 'tools' },
  { id: 'skill18', name: 'ELK Stack', category: 'tools' },
  { id: 'skill19', name: 'Ansible', category: 'tools' },
  
  // Other
  { id: 'skill20', name: 'Agile Methodologies', category: 'other' },
  { id: 'skill21', name: 'System Administration', category: 'other' },
  { id: 'skill22', name: 'Troubleshooting', category: 'other' },
  { id: 'skill23', name: 'Technical Documentation', category: 'other' }
];

export const education: Education[] = [
  {
    id: 'edu1',
    institution: 'University',
    degree: 'Bachelor\'s Degree in Computer Science',
    period: '2010 - 2013'
  }
];

export const profile = {
  name: 'Nischit Desai',
  title: 'Senior DevOps Engineer',
  email: 'nischit.desai@LIVE.com',
  phone: '+91 XXXXXXXXXX',
  location: 'Bangalore, India',
  summary: 'Experienced DevOps Engineer with over 10 years of experience in implementing and managing CI/CD pipelines, cloud infrastructure, and automation solutions. Proficient in various DevOps tools and methodologies including Jenkins, Docker, Kubernetes, and Infrastructure as Code. Strong track record of optimizing development workflows and enhancing operational efficiency.'
};