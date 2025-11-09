// data/experiencesData.ts

export interface ExperienceItem {
  id: number;
  period: string;
  title: string;
  company: string;
  description: string;
  detailsUrl: string;
  isEven: boolean; // Digunakan untuk menentukan penempatan (kiri/kanan)
}

export const ExperiencesData: ExperienceItem[] = [
  {
    id: 1,
    period: 'Sep 2025 - Jan 2026',
    title: 'Teacher Assistant',
    company: "Paramadina Uniersity",
    description: 'Served as a Lecturer Assistant for Algorithms and Structured Programming, delivering theoretical and practical instruction to over 49 students and evaluating their learning outcomes weekly throughout the semester.',
    detailsUrl: '#',
    isEven: false, // Kartu Ganjil (Kiri)
  },
  {
    id: 2,
    period: 'Sep 2025 - Jan 2025',
    title: 'Teacher Assistant',
    company: "Paramadina Uniersity",
    description: 'Served as a Lecturer Assistant for Algorithms and Structured Programming, delivering theoretical and practical instruction to over 49 students and evaluating their learning outcomes weekly throughout the semester.',
    detailsUrl: '#',
    isEven: true, 
  },
  {
    id: 3,
    period: 'Oct 2025 - Des 2025',
    title: 'Internship as WordPress Administrator',
    company: "Paramadina University",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    detailsUrl: '#',
    isEven: false, // Kartu Ganjil (Kiri)
  },
  {
    id: 4,
    period: 'Sep 2024 - Jan 2025',
    title: 'Teacher Assistant',
    company: "Paramadina University",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    detailsUrl: '#',
    isEven: true, // Kartu Genap (Kanan)
  },
];