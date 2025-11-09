// components/ContactSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10 md:mt-0">
      
      {/* Kolom Kiri: Gambar */}
      <div className="lg:col-span-5 relative w-full aspect-square max-h-[500px] overflow-hidden rounded-lg">
        <Image
          src="/miftahul-fitriah-contact.png" // Ganti dengan path gambar Anda
          alt="Miftahul Fitriah Contact Photo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      {/* Kolom Kanan: Teks & Kontak */}
      <div className="lg:col-span-7 lg:pl-10">
        <h1 className="text-5xl font-extrabold text-green-400 mb-6">
          Get In Touch!
        </h1>
        
        {/* Tombol Hire Me */}
        <Link 
          href="mailto:miftahulfitriah143@gmail.com" 
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-black bg-green-400 rounded-lg hover:bg-green-300 transition-colors mb-8 shadow-xl shadow-green-900/50"
        >
          Hire me
          <span className="ml-2">&#x2192;</span> {/* Ikon panah */}
        </Link>
        
        <p className="text-gray-300 text-lg mb-8">
          Feel free to reach out if you're looking for someone who's passionate about technology, design, and creating great user experiences. Whether in frontend, backend, full stack development, or UI/UX, I also have experience in the hospitality industry, bringing strong communication and customer service skills. I'd be happy to connect and explore how we can work together.
        </p>

        {/* Informasi Kontak */}
        <div className="space-y-3">
          <ContactLink 
            icon="&#9993;" // Ikon Email
            text="miftahulfitriah143@gmail.com" 
            href="mailto:miftahulfitriah143@gmail.com"
          />
          <ContactLink 
            icon="&#9742;" // Ikon Telepon
            text="+62 895346050403" 
            href="https://wa.me/62895346050403"
          />
          <ContactLink 
            icon="&#xe800;" // Placeholder untuk LinkedIn (Ganti dengan ikon font/SVG)
            text="miftahulfitriah143" 
            href="https://linkedin.com/in/miftahulfitriah143"
          />
          <ContactLink 
            icon="&#x1F4F7;" // Ikon Instagram
            text="@miftahulfitriah_" 
            href="https://instagram.com/miftahulfitriah_"
          />
        </div>
      </div>
    </section>
  );
}

interface ContactLinkProps {
    icon: string;
    text: string;
    href: string;
}

function ContactLink({ icon, text, href }: ContactLinkProps) {
    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
            <span className="text-xl text-green-400 w-8">{icon}</span>
            <span className="text-base">{text}</span>
        </Link>
    );
}