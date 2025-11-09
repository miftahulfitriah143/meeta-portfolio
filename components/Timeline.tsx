// components/Timeline.tsx

import { EducationItem } from '@/data/data';

interface TimelineProps {
  items: EducationItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l border-green-500 ml-4 pl-6">
      {items.map((item, index) => (
        <div key={item.id} className="mb-8 relative">
          
          {/* Titik Garis Waktu */}
          <div className="absolute w-4 h-4 bg-green-400 rounded-full mt-1.5 -left-8 border-4 border-black ring-4 ring-green-400"></div>

          <h4 className="text-xl font-semibold text-white">
            {item.institution}
          </h4>
          <p className="text-green-400 text-sm italic mt-1">
            {item.degree} <span className="float-right font-normal not-italic text-gray-400">{item.year}</span>
          </p>
          <ul className="text-gray-400 text-sm mt-2 space-y-1 list-disc list-inside">
            {item.description.split('\n').map((line, lineIndex) => (
              <li key={lineIndex}>{line.replace(/^•\s*/, '')}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}