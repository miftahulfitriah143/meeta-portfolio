// components/ExperienceTimeline.tsx
import { ExperienceItem } from '@/data/experiencesData';
import ExperienceCard from './ExperienceCard';

interface ExperienceTimelineProps {
  data: ExperienceItem[];
}

export default function ExperienceTimeline({ data }: ExperienceTimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto">
      
      {/* Garis Tengah Timeline (Hanya terlihat di layar besar) */}
      <div className="hidden lg:block absolute left-1/2 w-0.5 bg-green-500 h-full transform -translate-x-1/2"></div>

      {data.map((item, index) => {
        // Tentukan posisi kartu (Ganjil/Kiri, Genap/Kanan)
        const isRight = index % 2 !== 0; 
        const position = isRight ? 'right' : 'left';
        
        // Tentukan kelas grid untuk penempatan
        const gridClasses = isRight 
          ? 'lg:grid-cols-2 lg:col-start-2' // Kartu di kolom kanan
          : 'lg:grid-cols-2 lg:col-start-1'; // Kartu di kolom kiri

        return (
          <div key={item.id} className="relative mb-12 lg:mb-20">
            
            {/* Titik Timeline (Lingkaran Bintang di tengah) */}
            <div className="absolute w-4 h-4 bg-green-400 rounded-full mt-8 border-4 border-black ring-4 ring-green-400 z-10 
                            left-1/2 transform -translate-x-1/2 hidden lg:block">
              {/* Anda bisa menggunakan SVG Bintang di sini, saat ini placeholder lingkaran */}
            </div>
            
            {/* Kartu Pengalaman (Tampilan Mobile: selalu di tengah) */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${gridClasses}`}>
                <div className={isRight ? 'lg:col-start-2' : 'lg:col-start-1'}>
                    <ExperienceCard item={item} position={position} />
                </div>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}