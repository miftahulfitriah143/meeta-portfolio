import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[91vh] flex items-center justify-center pt-24 pb-8 md:p-8 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay gelap di atas gambar */}

      {/* Gambar latar belakang atau gambar utama */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full z-0 flex justify-end">
        {/* Menggunakan div untuk menempatkan gambar di posisi yang tepat */}
        <div className="relative w-200 h-200 max-w-[600px] md:max-w-none">
          <Image
            src="/miftahul-fitriah.png" // Ganti dengan path gambar Anda di folder public
            alt="Miftahul Fitriah"
            layout="fill"
            objectFit="cover" // Sesuaikan sesuai kebutuhan (cover, contain, dll.)
            objectPosition="right bottom" // Sesuaikan posisi gambar
            priority
            className="filter grayscale brightness-75"
          />
        </div>
      </div>


      <div className="relative z-20 text-left w-full max-w-7xl mx-auto pl-4 md:pl-16">
        <h3 className="text-xl md:text-2xl text-green-400 mb-2">Welcome to</h3>
        <h1 className="text-5xl md:text-7xl font-bold text-green-400 leading-tight">
          My <br /> PORTFOLIO
        </h1>

        <div className="mt-8 flex space-x-4">
          <Link href="/projects" className="px-6 py-3 border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-colors">
            Got a project?
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors">
            My Resume
          </Link>
        </div>
      </div>
    </section>
  );
}