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
    period: 'Sep 2025 - Nov 2025',
    title: 'Experience 1',
    company: "Company's Name",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    detailsUrl: '#',
    isEven: false, // Kartu Ganjil (Kiri)
  },
  {
    id: 2,
    period: 'Sep 2025 - Nov 2025',
    title: 'Experience 2',
    company: "Company's Name",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    detailsUrl: '#',
    isEven: true, // Kartu Genap (Kanan)
  },
  {
    id: 3,
    period: 'Sep 2024 - Mar 2025',
    title: 'Experience 3 (Internship)',
    company: "Company's Name",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    detailsUrl: '#',
    isEven: false, // Kartu Ganjil (Kiri)
  },
  {
    id: 4,
    period: 'Jan 2024 - Jun 2024',
    title: 'Experience 4 (Volunteering)',
    company: "Organization Name",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
    detailsUrl: '#',
    isEven: true, // Kartu Genap (Kanan)
  },
];