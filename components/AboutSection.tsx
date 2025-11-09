// components/AboutSection.tsx
import Image from 'next/image';
import Timeline from '@/components/Timeline';
import SkillIcon from '@/components/SkillIcon';
import LanguageBar from './LanguageBar';
import { EducationItem, SkillItem, LanguageLevel } from '@/data/data';

interface AboutSectionProps {
  education: EducationItem[];
  skills: SkillItem[];
  languageData: LanguageLevel[];
}

export default function AboutSection({ education, skills, languageData }: AboutSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      {/* Kolom Kiri: Teks About Me & Education */}
      <div className="lg:col-span-7">
        <h2 className="text-5xl font-extrabold text-green-400 mb-6">
          About Me
        </h2>
        <div className="text-gray-300 space-y-4 text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        
        {/* Bagian Education */}
        <div className="mt-12">
          <h3 className="text-4xl font-bold text-green-400 mb-6">
            Education
          </h3>
          <Timeline items={education} />
        </div>

        {/* Bagian Language */}
        <div className="mt-12">
            <h3 className="text-4xl font-bold  text-green-400 mb-6">
                Language
            </h3>
            <LanguageBar data={languageData} /> 
        </div>
      </div>
      
      {/* Kolom Kanan: Foto & Skills */}
      <div className="lg:col-span-5 lg:pl-8">
        {/* Foto Profil */}
        <div className="relative w-full aspect-square max-h-[500px] overflow-hidden rounded-lg mb-10 shadow-lg shadow-green-900/50">
          <Image
            src="/miftahul-fitriah-about.png" // Ganti dengan path gambar Anda yang lain
            alt="Miftahul Fitriah Profile"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        
        {/* Bagian Skills */}
        <div className="mt-8">
          <h3 className="text-4xl font-bold text-green-400 mb-6">
            Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillIcon 
                key={index} 
                iconPath={skill.iconPath} 
                alt={skill.alt} 
                name={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}