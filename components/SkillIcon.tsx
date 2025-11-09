// components/SkillIcon.tsx

import Image from 'next/image';

interface SkillIconProps {
  iconPath: string;
  alt: string;
  name: string;
}

export default function SkillIcon({ iconPath, alt, name }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center p-3 border border-gray-700 bg-gray-900 rounded-lg hover:border-green-400 transition-colors duration-300 group">
      <Image
        src={iconPath}
        alt={alt}
        width={40}
        height={40}
        className="mb-1"
      />
      <span className="text-xs text-gray-400 group-hover:text-green-400">
        {name}
      </span>
    </div>
  );
}