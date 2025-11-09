// data/data.ts

// --- INTERFACES ---

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface SkillItem {
  name: string;
  iconPath: string; // Path atau nama class icon, sesuai kebutuhan
  alt: string;
}

export interface Achievement {
  title: string;
  imageUrl: string;
}

export interface LanguageLevel { // <-- Tambahkan interface ini
  language: string;
  level: number; 
}

// --- DATA ---

export const EducationData: EducationItem[] = [
  {
    id: 1,
    institution: 'Paramadina University',
    degree: 'Bachelor Degree - Computer Science',
    year: '2022 - 2026',
    description: '• GPA 3.85.\n• Himpunan Mahasiswa - President (2025).\n• Relawan (2024)',
  },
  {
    id: 2,
    institution: 'SMAN 9 Bekasi',
    degree: 'IPA',
    year: '2018 - 2021',
    description: '',
  },
];

export const SkillData: SkillItem[] = [
  { name: 'Figma', iconPath: '/icons/figma.svg', alt: 'Figma Logo' },
  { name: 'Flowbite', iconPath: '/icons/flowbite.svg', alt: 'Flowbite Logo' },
  { name: 'JavaScript', iconPath: '/icons/js.svg', alt: 'JavaScript Logo' },
  { name: 'TypeScript', iconPath: '/icons/ts.svg', alt: 'TypeScript Logo' },
  { name: 'Next.js', iconPath: '/icons/nextjs.svg', alt: 'Next.js Logo' },
  { name: 'Node.js', iconPath: '/icons/nodejs.svg', alt: 'Node.js Logo' },
  { name: 'Python', iconPath: '/icons/python.svg', alt: 'Python Logo' },
  { name: 'Canva', iconPath: '/icons/canva.svg', alt: 'Canva Logo' },
];

export const AchievementData: Achievement[] = [
  { title: 'Achievements 1', imageUrl: '/achievements/cert_1.png' },
  { title: 'Achievements 1', imageUrl: '/achievements/cert_2.png' },
  { title: 'Achievements 1', imageUrl: '/achievements/cert_3.png' },
  { title: 'Achievements 1', imageUrl: '/achievements/cert_4.png' },
  { title: 'Achievements 1', imageUrl: '/achievements/cert_5.png' },
  { title: 'Achievements 1', imageUrl: '/achievements/cert_6.png' },
];

export const LanguageData: LanguageLevel[] = [ // <-- Data Bahasa
  { language: 'Bahasa Indonesia', level: 10 }, 
  { language: 'English', level: 5 },          
  { language: '한국어', level: 2 },           
];