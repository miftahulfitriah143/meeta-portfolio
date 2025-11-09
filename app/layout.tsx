import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext'; // Import ThemeProvider

// 1. Inisialisasi Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mita's Portfolio",
  description: "High-performance portfolio built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Terapkan Fonts ke <html>
    // Kita tidak menerapkan tema di sini karena ThemeProvider akan menambahkan class 'dark' secara dinamis
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`antialiased`}>
        {/* 3. Bungkus Aplikasi dengan ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
