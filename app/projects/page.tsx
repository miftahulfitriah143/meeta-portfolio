// app/projects/page.tsx

import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { ProjectsData } from '@/data/projectsData';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      {/* Pastikan Navbar.tsx Anda sudah diupdate untuk menerima activeLink */}
      <Navbar activeLink="Projects" /> 

      <main className="container mx-auto px-4 py-20 md:px-8">
        
        {/* Judul Halaman */}
        <h1 className="text-5xl font-extrabold text-green-400 mb-12 mt-10 md:mt-0">
          My Projects
        </h1>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}