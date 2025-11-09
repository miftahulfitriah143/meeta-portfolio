import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SkillMarquee from '@/components/SkillMarquee';
import PageLayout from '@/components/PageLayout'; // Digunakan untuk konsistensi margin
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection'; 
import ProjectCard from '@/components/ProjectCard';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactSection from '@/components/ContactSection';

// Import Data
import { EducationData, SkillData, LanguageData } from '@/data/data'; // <--- DI SINI
import { ProjectsData } from '@/data/projectsData';
import { ExperiencesData } from '@/data/experiencesData';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar (Fixed di atas) */}
      <Navbar />
      
      {/* 1. HOME / HERO SECTION (ID: home) */}
      <section id="home">
        <HeroSection />
      </section>
      <SkillMarquee />
      
      {/* 2. ABOUT SECTION (ID: about) */}
      <section id="about" className="pt-20 pb-20">
        <PageLayout>
            <AboutSection 
                education={EducationData}
                skills={SkillData}
                languageData={LanguageData}
            />
             {/* achievements... (jika ada) */}
        </PageLayout>
      </section>

      {/* 3. PROJECTS SECTION (ID: projects) */}
      <section id="projects" className="pt-20 pb-20 bg-gray-900/50">
        <PageLayout>
            <h1 className="text-5xl font-extrabold text-green-400 mb-12">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ProjectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </PageLayout>
      </section>

      {/* 4. EXPERIENCE SECTION (ID: experience) */}
      <section id="experience" className="pt-20 pb-20">
        <PageLayout>
            <h1 className="text-5xl font-extrabold text-green-400 mb-16">
                My Experiences
            </h1>
            <ExperienceTimeline data={ExperiencesData} />
        </PageLayout>
      </section>

      {/* 5. CONTACT SECTION (ID: contact) */}
      <section id="contact" className="pt-20 pb-20 bg-gray-900/50">
        <PageLayout>
            {/* Hanya masukkan komponen utama Contact, tanpa footer ganda */}
            <ContactSection />
        </PageLayout>
        <Footer /> {/* Footer bisa di luar PageLayout agar full width */}
      </section>
    </div>
  );
}