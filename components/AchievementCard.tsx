// components/AchievementCard.tsx

import Image from 'next/image';

interface AchievementCardProps {
  title: string;
  imageUrl: string;
}

export default function AchievementCard({ title, imageUrl }: AchievementCardProps) {
  return (
    <div className="group w-full max-w-xs cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-900 border border-gray-800 hover:border-green-500 transition-all duration-300">
      <div className="relative w-full h-32 md:h-40 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-3 text-center">
        <p className="text-sm font-medium text-gray-200 group-hover:text-green-400">
          {title}
        </p>
      </div>
    </div>
  );
}