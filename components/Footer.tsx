// components/Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 py-5 border-t border-gray-800 text-center text-gray-500 text-sm">
      &copy; {currentYear} Miftahul Fitriah. All rights reserved.
    </footer>
  );
}