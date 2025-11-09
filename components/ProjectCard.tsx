// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projectsData'; // Import interface

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-5 shadow-xl transition-all duration-300 hover:border-green-500 hover:shadow-green-900/50">
      
      {/* Area Gambar (Hijau di Wireframe) */}
      <div className="relative w-full aspect-video bg-green-700/50 rounded-md overflow-hidden mb-4 border border-green-600">
        {/*
          TODO: Ganti dengan komponen Image Next.js jika Anda punya gambar asli.
          Untuk sementara, kita pakai placeholder warna hijau sesuai wireframe.
        */}
        {/* Jika Anda punya gambar:
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        */}
      </div>
      
      {/* Konten Teks */}
      <h3 className="text-2xl font-semibold text-green-400 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        {project.description}
      </p>

      {/* Stack Teknologi */}
      <div className="flex items-center space-x-3 border-t border-gray-700 pt-3">
        {project.technologies.map((tech, index) => (
          <Image
            key={index}
            src={tech.iconPath}
            alt={tech.alt}
            width={20}
            height={20}
            className="filter grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        ))}

        {/* Tambahkan Tautan (Opsional: Tombol/Ikon Link) */}
        <div className="flex ml-auto space-x-2">
            {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
                    {/* Menggunakan ikon placeholder sederhana */}
                    <span className="text-gray-500 hover:text-white transition-colors text-lg">&#9881;</span> 
                </Link>
            )}
            {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                    {/* Menggunakan ikon placeholder sederhana */}
                    <span className="text-gray-500 hover:text-white transition-colors text-lg">&#x2197;</span> 
                </Link>
            )}
        </div>
      </div>
    </div>
  );
}