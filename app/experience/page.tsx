// app/experience/page.tsx

import Navbar from '@/components/Navbar';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { ExperiencesData } from '@/data/experiencesData';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar /> 

      <main className="container mx-auto px-4 py-20 md:px-8">
        
        {/* Judul Halaman */}
        <h1 className="text-5xl font-extrabold text-green-400 mb-16 mt-10 md:mt-0">
          My Experiences
        </h1>

        {/* Timeline Pengalaman */}
        <ExperienceTimeline data={ExperiencesData} />

      </main>
    </div>
  );
}