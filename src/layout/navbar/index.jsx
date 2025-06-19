import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {label:"Uyushma", to: "/uyushma"},
    { label: "Yangiliklar", to: "/yangiliklar" },
    { label: "Hujjatlar", to: "/hujjatlar" },
     { label: "Media", to: "/media" },
      { label: "Hamkorlar", to: "/partners" },
    { label: "Murojaat", to: "/contact" },
    
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-[#0C2543] uppercase">
            O'zbekiston Respublikasi Prezidenti
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[#0C2543] hover:text-blue-600 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-2 border-l pl-4 ml-2">
            <button className="text-sm hover:underline">UZ</button>
            <span>/</span>
            <button className="text-sm hover:underline">RU</button>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-[#0C2543]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="block py-2 text-[#0C2543] hover:text-blue-600"
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex space-x-2 border-t pt-2">
            <button className="text-sm hover:underline">UZ</button>
            <span>/</span>
            <button className="text-sm hover:underline">RU</button>
          </div>
        </div>
      )}
    </header>
  );
}
