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
            I’m a passionate and adaptable individual with a
            background in Informatics and hands-on experience in
            both tech and hospitality. Currently pursuing a Bachelor’s
            degree in Computer Science, I’ve been involved in
            various roles including frontend and backend
            development, UI/UX design, and volunteer work in
            communication and media. My experience in the
            hospitality industry has also shaped my ability to work
            well with people, stay detail-oriented, and adapt quickly
            in dynamic environments. I enjoy learning new things
            and thrive in collaborative settings where I can
            contribute and grow.
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