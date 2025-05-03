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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media managers with real-time data visualization.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Chart.js', 'Firebase', 'Material UI'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Redux', 'Firebase', 'Health API'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile',
  },
  {
    id: 4,
    title: 'Weather App Design',
    description: 'Clean and intuitive weather application design with daily and hourly forecasts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['UI/UX', 'Figma', 'Adobe XD', 'Prototyping'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'design',
  },
  {
    id: 5,
    title: 'Task Management Tool',
    description: 'Collaborative task management platform for teams with real-time updates.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'Socket.io', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'web',
  },
  {
    id: 6,
    title: 'Travel Planning App',
    description: 'All-in-one travel planner with itinerary builder, booking integration, and recommendations.',
    image: 'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React Native', 'Google Maps API', 'Firebase', 'AI recommendations'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile',
  },
];