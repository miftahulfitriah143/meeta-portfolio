// app/contact/page.tsx

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import LanguageBar from '@/components/LanguageBar';
import { LanguageData } from '@/data/languageData';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar activeLink="Contact" /> 

      <main className="container mx-auto px-4 py-20 md:px-8">
        
        {/* Bagian Get In Touch & Info Kontak */}
        <ContactSection />
        
        {/* Bagian Language */}
        <LanguageBar data={LanguageData} />
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}