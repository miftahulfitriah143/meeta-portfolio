import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // DEFINISI PALET WARNA BARU
      colors: {
        // Warna Primer
        'brand-black': '#000000',
        'brand-light-gray': '#D9D9D9',
        'brand-dark-gray': '#171717', // Untuk contrast di dark mode
        // Warna Aksen
        'brand-accent': '#8EC47B', 
      },
      
      // ... (keyframes dan animation lainnya)
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        running: {
          '0%, 100%': { transform: 'translateY(0) scaleX(-1)' },
          '25%': { transform: 'translateY(-2px) scaleX(-1)' },
          '75%': { transform: 'translateY(1px) scaleX(-1)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        run: 'running 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
