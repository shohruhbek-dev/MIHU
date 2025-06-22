import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import "../../i18n";

const languages = [
  { code: "en", label: "English" },
  { code: "uz", label: "O‘zbek" },
  { code: "ru", label: "Русский" },
];

const LanguageSelector = ({ variant = "dropdown" }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setIsOpen(false);
  };

  useEffect(() => {
    if (variant !== "dropdown") return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [variant]);

  // --- Variant: Inline ---
  if (variant === "inline") {
    return (
      <div className="flex gap-2 items-center">
        {languages.map((lang) => (
          <a
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`px-3 py-1 text-sm border-none text-white hover:underline bg-inherit transition transform hover:scale-110 duration-200 ${lang.code === i18n.language ? "font-semibold" : ""
              }`}

          >
            {lang.label}
          </a>
        ))}
      </div>
    );
  }

  // --- Variant: Dropdown ---
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 shadow-sm transition"
      >
        {currentLang.label}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 bg-white border rounded-xl shadow-lg min-w-[140px] overflow-hidden animate-fadeIn">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm transition duration-150 hover:bg-gray-100 ${lang.code === i18n.language
                  ? "bg-gray-200 font-semibold"
                  : ""
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
