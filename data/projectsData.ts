// data/projectsData.ts

// Interface untuk data teknologi/skill yang digunakan
export interface Technology {
  name: string;
  iconPath: string; // Path ke ikon di folder public (e.g., /icons/react.svg)
  alt: string;
}

// Interface untuk data proyek
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Path ke gambar proyek
  technologies: Technology[];
  liveUrl?: string; // Tautan ke live demo (opsional)
  githubUrl?: string; // Tautan ke repositori GitHub (opsional)
}

// Data Dummy Teknologi (Sesuaikan path ikon Anda)
const TechStack: { [key: string]: Technology } = {
  NEXTJS: { name: 'Next.js', iconPath: '/icons/nextjs.svg', alt: 'Next.js' },
  REACT: { name: 'React', iconPath: '/icons/react.svg', alt: 'React' },
  TYPESCRIPT: { name: 'TypeScript', iconPath: '/icons/typescript.svg', alt: 'TypeScript' },
  TAILWIND: { name: 'Tailwind CSS', iconPath: '/icons/tailwind.svg', alt: 'Tailwind' },
  JS: { name: 'JavaScript', iconPath: '/icons/js.svg', alt: 'JavaScript' },
  NODE: { name: 'Node.js', iconPath: '/icons/node.svg', alt: 'Node.js' },
};

// Data Dummy Proyek
export const ProjectsData: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project_images/project1.png', // Ganti dengan path gambar Anda
    technologies: [TechStack.REACT, TechStack.JS, TechStack.TAILWIND],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project_images/project2.png',
    technologies: [TechStack.NEXTJS, TechStack.TYPESCRIPT, TechStack.TAILWIND],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project_images/project3.png',
    technologies: [TechStack.REACT, TechStack.NODE],
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project_images/project4.png',
    technologies: [TechStack.JS, TechStack.TAILWIND],
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project_images/project5.png',
    technologies: [TechStack.NEXTJS, TechStack.TYPESCRIPT],
    liveUrl: '#',
  },
  {
    id: 6,
    title: 'Project 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '/project_images/project6.png',
    technologies: [TechStack.REACT, TechStack.JS],
    githubUrl: '#',
  },
];