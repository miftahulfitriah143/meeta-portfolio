// components/ExperienceCard.tsx
import Link from 'next/link';
import { ExperienceItem } from '@/data/experiencesData';

interface ExperienceCardProps {
  item: ExperienceItem;
  position: 'left' | 'right';
}

export default function ExperienceCard({ item, position }: ExperienceCardProps) {
  // Tentukan alignment teks dan border
  const isRight = position === 'right';
  const cardClasses = isRight
    ? 'lg:ml-auto lg:text-left'
    : 'lg:mr-auto lg:text-left';

  return (
    // Kartu Kontainer
    <div className={`w-full max-w-xl p-5 bg-gray-800 rounded-lg shadow-xl border border-gray-700 ${cardClasses}`}>
      
      {/* Header (Periode & Judul) */}
      <div className={`flex flex-col ${isRight ? 'text-left' : 'text-right'} lg:flex-row lg:justify-between mb-3`}>
        {/* Periode/Tanggal (Kiri/Kanan tergantung posisi kartu) */}
        <div className={`flex items-center text-sm font-mono text-green-400 ${isRight ? 'order-2' : 'order-1'}`}>
          <span className="mr-1">&#128197;</span> {/* Ikon Kalender */}
          {item.period}
        </div>
        
        {/* Judul Pengalaman */}
        <h3 className={`text-lg font-bold text-white ${isRight ? 'order-1' : 'order-2'}`}>
          {item.title}
        </h3>
      </div>
      
      {/* Deskripsi */}
      <p className="text-gray-400 text-sm mb-3 text-left">
        <span className="font-semibold text-gray-200 block mb-1">{item.company}</span>
        {item.description}
      </p>

      {/* Tombol View Details */}
      <div className={`flex ${isRight ? 'justify-start' : 'justify-start'} mt-3`}>
        <Link 
          href={item.detailsUrl} 
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-green-400 rounded-md hover:bg-green-300 transition-colors shadow-lg shadow-green-900/50"
        >
          View Details
          <span className="ml-1 text-sm">&#x2197;</span> {/* Ikon Panah Luar */}
        </Link>
      </div>
    </div>
  );
}