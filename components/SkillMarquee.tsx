import React from 'react';

export default function SkillMarquee() {
  const skills = [
    'Software Engineer',
    'Mobile Developer',
    'UI/UX Designer',
    'Fullstack Developer',
    'WordPress Developer',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 border-t border-b border-gray-700">
      <div className="flex animate-marquee whitespace-nowrap text-green-400 text-lg md:text-2xl font-mono">
        {/* Ulangi konten beberapa kali untuk efek marquee yang mulus */}
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {skills.map((skill, index) => (
              <span key={index} className="mx-6 md:mx-10 flex items-center">
                &lt;/&gt; {skill}
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}