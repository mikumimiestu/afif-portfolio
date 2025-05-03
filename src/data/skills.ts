export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML & CSS',
    percentage: 95,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    percentage: 80,
    category: 'frontend',
  },
  {
    name: 'React.js',
    percentage: 78,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    percentage: 75,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    percentage: 92,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    percentage: 82,
    category: 'frontend',
  },
  
  // Backend
  {
    name: 'Node.js',
    percentage: 80,
    category: 'backend',
  },
  // {
  //   name: 'Express.js',
  //   percentage: 78,
  //   category: 'backend',
  // },
  {
    name: 'MongoDB',
    percentage: 75,
    category: 'backend',
  },
  // {
  //   name: 'PostgreSQL',
  //   percentage: 72,
  //   category: 'backend',
  // },
  // {
  //   name: 'GraphQL',
  //   percentage: 70,
  //   category: 'backend',
  // },
  
  // Design
  {
    name: 'Figma',
    percentage: 95,
    category: 'design',
  },
  {
    name: 'Adobe XD',
    percentage: 90,
    category: 'design',
  },
  {
    name: 'UI/UX Design',
    percentage: 82,
    category: 'design',
  },
  {
    name: 'Photoshop',
    percentage: 85,
    category: 'design',
  },
  {
    name: 'Canva',
    percentage: 90,
    category: 'design',
  },
  
  // Other
  {
    name: 'Git & GitHub',
    percentage: 68,
    category: 'other',
  },
  {
    name: 'Adobe Premiere Pro',
    percentage: 75,
    category: 'other',
  },
  {
    name: 'Adobe After Effects',
    percentage: 80,
    category: 'other',
  },
  {
    name: 'Alight Motion',
    percentage: 80,
    category: 'other',
  },
];