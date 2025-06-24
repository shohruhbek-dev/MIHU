import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, } from "lucide-react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";
import LanguageSelector from "../../components/languageSelecter";
import logo1 from "../../assets/mainLogo.png"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { label: "Uyushma", to: "/uyushma" },
    { label: "Yangiliklar", to: "/yangiliklar" },
    { label: "Hujjatlar", to: "/hujjatlar" },
    { label: "Media", to: "/media" },
    { label: "Hamkorlar", to: "/partners" },
    { label: "Murojaat", to: "/contact" },
  ];

  // Outside click for Sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    }
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Outside click for mobile nav
  useEffect(() => {
    function handleClickOutside(event) {
      const mobileNav = document.getElementById("mobile-nav");
      if (mobileNav && !mobileNav.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const location = useLocation(); // Inside your Navbar component
  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          id="sidebar"
          className="fixed top-0 left-0 h-full w-[25%] bg-[#1E99FF] text-white shadow-lg z-50 p-4 overflow-y-auto"
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-2xl font-bold focus:outline-none"
              aria-label="Close Sidebar"
            >
              &times;
            </button>
          </div>
          <div className="mb-4 border-b border-white pb-4 text-center">
            <h2 className="text-xl font-semibold">
              O‘zbekiston Respublikasi Prezidentining rasmiy veb-sayti
            </h2>
          </div>
          <div className="space-y-3 flex flex-row justify-center flex-wrap gap-3">
            <LanguageSelector variant="inline" />

          </div>
          <h3 className="mt-4 text-xl font-semibold text-center">
            Ijtimoiy tarmoqlardagi rasmiy sahifalar
          </h3>
          <div className="flex flex-col justify-center items-center gap-3 mt-4 border-b border-white pb-4 text-sm">
            <a href="#" className="hover:underline flex items-center gap-2">
              <span className="p-2 bg-[#1753A1] rounded-full">
                <FaTelegramPlane />
              </span>
              Telegram
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              <span className="p-2 bg-[#1753A1] rounded-full">
                <FaFacebookF />
              </span>
              Facebook
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              <span className="p-2 bg-[#1753A1] border-white/50 rounded-full">
                <FaInstagram />
              </span>
              Instagram
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              <span className="p-2 bg-[#1753A1] border-white/50 rounded-full">
                <FaTwitter />
              </span>
              Twitter
            </a>
            <a href="#" className="hover:underline flex items-center gap-2">
              <span className="p-2 bg-[#1753A1] border-white/50 rounded-full">
                <FaYoutube />
              </span>
              YouTube
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-40 px-10">
        <div className="container mx-auto px-4 py-3 flex gap-4 justify-between items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[#0C2543]"
            aria-label="Open Sidebar"
          >
            <Menu size={28} />
          </button>
          <div className="flex justify-between gap-6 items-center">
            <Link to="/" className="flex items-center  space-x-3">
              <img
                src={logo1}
                alt="Logo"
                className="h-20"
              />

            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`font-medium hover:text-blue-600 ${isActive ? "text-[#1753A1]" : "text-[#0C2543]"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center space-x-2 border-l pl-4 ml-2">
                <LanguageSelector />
              </div>
            </nav>
          </div>
          <div>
            <FaSearch size={20} className="text-gray-600" />

          </div>
        </div>

        {/* Responsive hamburger */}
        <div className="md:hidden border-t border-b bg-white shadow-sm py-2 px-4 flex justify-end">
          <button
            className="text-[#0C2543]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-nav" className="md:hidden bg-white shadow-md px-4 pb-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-medium hover:text-blue-600 ${isActive ? "text-[#1753A1]" : "text-[#0C2543]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex space-x-2 border-t pt-2">
              <button className="text-sm hover:underline">UZ</button>
              <span>/</span>
              <button className="text-sm hover:underline">RU</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
