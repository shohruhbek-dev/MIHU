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
import { useTranslation } from "react-i18next";
import logo1 from "../../assets/mainLogo.png"



export default function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { label: t("navbarList.label1"), to: "/uyushma" },
    { label: t("navbarList.label2"), to: "/yangiliklar" },
    { label: t("navbarList.label3"), to: "/hujjatlar" },
    { label: t("navbarList.label4"), to: "/media" },
    { label: t("navbarList.label5"), to: "/partners" },
    { label: t("navbarList.label6"), to: "/contact" },
  ]

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

  const location = useLocation(); 
  return (
    <>
      {isSidebarOpen && (
        <div
          id="sidebar"
          className="fixed top-0 left-0 h-full w-[35%] max-md:w-[50%] bg-[#1E99FF] text-white shadow-lg z-50 p-4 overflow-y-auto"
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
              {t("navbarList.sidebartext1")}
            </h2>
          </div>
          <div className="flex flex-row justify-center flex-wrap gap-3 my-7">
            <LanguageSelector variant="inline" />

          </div>
          <h3 className="mt-4 text-xl font-semibold text-center">
            {t("navbarList.sidebartext2")}
          </h3>
          <div className="  flex flex-col justify-center items-center gap-3 mt-4 border-b border-white pb-4 text-sm">
            <ul className="flex flex-col justify-center items-start gap-3 mt-4 text-sm">
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span className="p-2 bg-[#0088cc] text-white border border-[#0088cc] rounded-full hover:bg-[#0077b6] transition">
                    <FaTelegramPlane />
                  </span>
                  {t("navbarList.sidebartext3")}
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span className="p-2 bg-[#0088cc] text-white border border-[#0088cc] rounded-full hover:bg-[#0077b6] transition">
                    <FaFacebookF />
                  </span>
                  {t("navbarList.sidebartext4")}
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span className="p-2 bg-[#0088cc] text-white border border-[#0088cc] rounded-full hover:bg-[#0077b6] transition">
                    <FaInstagram />
                  </span>
                  {t("navbarList.sidebartext5")}
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span className="p-2 bg-[#0088cc] text-white border border-[#0088cc] rounded-full hover:bg-[#0077b6] transition">
                    <FaTwitter />
                  </span>
                  {t("navbarList.sidebartext6")}
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span className="p-2 bg-[#0088cc] text-white border border-[#0088cc] rounded-full hover:bg-[#0077b6] transition">
                    <FaYoutube />
                  </span>
                  {t("navbarList.sidebartext7")}
                </a>
              </li>
            </ul>

          </div>
        </div>
      )}

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
            <nav className="hidden min-[800px]:flex items-center space-x-6">
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
            </nav>
              <div>
                <LanguageSelector />
              </div>
          </div>
          <div>
            <FaSearch size={20} className="text-gray-600" />

          </div>
        </div>

        <div className="min-[800px]:hidden border-t border rounded-2xl bg-white shadow-sm py-2 my-2 px-4 flex flex-col">
          <div className="flex justify-end">
            <button
              className="text-[#0C2543]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isOpen && (
            <div id="mobile-nav" className="md:hidden bg-white flex flex-col p-5 pb-4">
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
            </div>
          )}
        </div>


      </header>
    </>
  );
}
