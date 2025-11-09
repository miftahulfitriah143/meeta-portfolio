// context/ThemeContext.tsx
'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// 1. Definisikan Tipe
interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Nilai default
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// 2. Buat Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Ambil tema dari localStorage saat inisialisasi
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    }
    return true; // Default ke dark mode jika belum ada di localStorage
  });

  // 3. Efek untuk Menerapkan Class Tailwind dan Menyimpan ke localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Buat Hook Kustom untuk Kemudahan Akses
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};