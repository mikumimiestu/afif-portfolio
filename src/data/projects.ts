export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'all';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Go Green',
    description: 'Go Green web design and development project focused on environmental awareness.',
    image: '/assets/design1.png',
    tags: ['UI/UX', 'Figma'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'design',
  },
  {
    id: 2,
    title: 'Indonesian Cultural Exploration',
    description: 'A web application showcasing the rich cultural heritage of Indonesia.',
    image: '/assets/design2.png',
    tags: ['UI/UX', 'Figma'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'design',
  },
];