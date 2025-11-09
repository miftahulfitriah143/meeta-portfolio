// data/languageData.ts

export interface LanguageLevel {
  language: string;
  level: number; // Angka 1-10 (10: Mahir, 5: Menengah, 2: Dasar)
}

export const LanguageData: LanguageLevel[] = [
  { language: 'Bahasa Indonesia', level: 10 }, // Mahir
  { language: 'English', level: 5 },          // Menengah
  { language: '한국어', level: 2 },           // Dasar
];