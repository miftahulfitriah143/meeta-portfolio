// components/PageLayout.tsx

import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    // Gunakan div dengan container untuk membatasi lebar, mx-auto untuk menengahkan, 
    // dan px untuk padding horizontal yang konsisten
    <div className="container mx-auto px-4 md:px-8">
      {children}
    </div>
  );
}