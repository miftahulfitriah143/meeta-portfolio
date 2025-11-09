// components/LanguageBar.tsx
import { LanguageLevel } from '@/data/languageData';

interface LanguageBarProps {
  data: LanguageLevel[];
}

// Menentukan posisi pelari berdasarkan level (1=25%, 2=50%, 3=75%)
const getRunnerPosition = (level: number): string => {
  if (level === 2) return 'left-[10%]';
  if (level === 5) return 'left-[45%]';
  if (level === 10) return 'left-[98%]';
  return 'left-0';
};

export default function LanguageBar({ data }: LanguageBarProps) {
  return (
    <section className="mt-8">      
      <div className="space-y-6">
        {data.map((lang, index) => (
          <div key={index} className="flex items-center">
            <p className="w-40 text-lg font-medium text-gray-300">
              {lang.language}
            </p>
            
            {/* Garis Lari (Bar) */}
            <div className="relative flex-grow h-0.5 bg-gray-700 mx-4">
              {/* Jalur Lari */}
              <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-500 transform -translate-y-1/2"></div>
              
              {/* Indikator Pelari (Manusia) */}
              <div 
                className={`absolute bottom-0 transform -translate-x-1/2 transition-all duration-1000 ${getRunnerPosition(lang.level)}`}
                title={`Level: ${lang.level === 10 ? 'Mahir' : lang.level === 5 ? 'Menengah' : 'Dasar'}`}
              >
                {/* Ikon Pelari Unicode (atau ganti dengan SVG jika Anda punya) */}
                <span className="text-xl text-green-400 inline-block scale-x-[-1]">&#x1f3c3;</span>
              </div>
              
              {/* Garis Level Target (Garis kecil di kanan) */}
              <div className="absolute top-1/2 right-0 w-2 h-4 bg-green-400 transform -translate-y-1/2"></div>
            </div>
            
            {/* Level Label (Opsional, jika ingin menambahkan teks level di ujung) */}
            <span className="text-sm text-green-400 w-8 text-right">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}