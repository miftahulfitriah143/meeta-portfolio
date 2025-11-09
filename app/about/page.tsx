import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import AchievementCard from '@/components/AchievementCard';
import Timeline from '@/components/Timeline';
import { AchievementData, EducationData, SkillData } from '@/data/data'; // Kita akan buat file data ini

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar di atas halaman */}
      <Navbar activeLink="About" /> 

      <main className="container mx-auto px-4 py-20 md:px-8">
        <AboutSection 
          education={EducationData} 
          skills={SkillData} 
        />
        
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
            My Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {AchievementData.map((achievement, index) => (
              <AchievementCard 
                key={index}
                title={achievement.title}
                imageUrl={achievement.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}