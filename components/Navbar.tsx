// components/Navbar.tsx
'use client'; 
import React, { useState, useEffect, useCallback, useRef } from 'react';

// Fungsi untuk menggulir ke ID
const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const targetElement = document.getElementById(id);
    if (targetElement) {
        // Offset 90px untuk Navbar yang fixed + sedikit margin tambahan
        window.scrollTo({
            top: targetElement.offsetTop - 90, 
            behavior: 'smooth',
        });
    }
};

interface NavLinkProps {
  href: string; // Akan menjadi ID, misal '#about'
  text: string;
  activeLink: string; // Prop untuk menentukan tautan yang aktif
}

function NavLink({ href, text, activeLink }: NavLinkProps) {
  const targetId = href.substring(1); 
  const isActive = activeLink.toLowerCase() === text.toLowerCase(); // Cek status aktif

  return (
    // Gunakan <a> tag untuk smooth scroll
    <a
      href={href}
      onClick={(e) => handleScrollTo(e, targetId)} 
      className={`relative text-white hover:text-green-400 transition-colors cursor-pointer ${
        isActive ? 'font-semibold text-green-400' : 'text-brand-light-gray'
      }`}
    >
      {text}
      {isActive && (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 transform scale-x-75"></span>
      )}
    </a>
  );
}

// Komponen Navbar Utama
const SECTION_IDS = ['home', 'about', 'projects', 'experience', 'contact'];

export default function Navbar() {
  // State untuk menyimpan ID section yang sedang terlihat
  const [currentActiveLink, setCurrentActiveLink] = useState('home'); 

  // Intersection Observer Logic
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      // Jika section masuk ke viewport (intersecting)
      if (entry.isIntersecting) {
        // Cek apakah section tersebut berada di atas (berdasarkan bounding box)
        if (entry.boundingClientRect.top <= window.innerHeight / 2) {
             setCurrentActiveLink(entry.target.id);
        }
      }
    });
  }, []);

  useEffect(() => {
    // Inisialisasi Intersection Observer
    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null, // Mengamati dari viewport
      rootMargin: '-50% 0px -50% 0px', // Aktifkan ketika bagian tengah section mencapai bagian tengah viewport
      threshold: 0,
    });

    const observer = observerRef.current;

    // Amati setiap section
    SECTION_IDS.forEach(id => {
      const target = document.getElementById(id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      // Cleanup observer saat komponen di-unmount
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observerCallback]);

  return (
    // Latar belakang di-set ke Hitam (Sesuai skema warna)
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-sm bg-brand-black/90 text-brand-light-gray border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        {/* Logo/Nama */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, 'home')} 
          className="text-xl font-bold text-brand-accent cursor-pointer"
        >
          Miftahul Fitriah
        </a>

        {/* Navigasi Utama */}
        <div className="hidden md:flex space-x-8">
          {/* Mapping melalui SECTION_IDS untuk memastikan konsistensi */}
          {SECTION_IDS.map(id => (
             <NavLink 
                key={id} 
                href={`#${id}`} 
                text={id.charAt(0).toUpperCase() + id.slice(1)} // Uppercase huruf pertama
                activeLink={currentActiveLink} 
              />
          ))}
        </div>
      </div>
    </nav>
  );
}