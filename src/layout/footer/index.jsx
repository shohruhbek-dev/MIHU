import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Uyushma", to: "/uyushma" },
  { label: "Yangiliklar", to: "/yangiliklar" },
  { label: "Hujjatlar", to: "/hujjatlar" },
  { label: "Media", to: "/media" },
  { label: "Hamkorlar", to: "/partners" },
  { label: "Murojaat", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white pt-10 pb-6 px-6 md:px-20 text-sm font-medium">
      <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row  justify-between">
        <div className="mb-10">
        <div className="flex items-center space-x-3">
          <img
            src="https://president.uz/themes/president/assets/images/gerb.svg"
            alt="Gerb"
            className="w-10"
          />
          <div>
            <p className="text-xs">OʻZBEKISTON RESPUBLIKASI</p>
            <h2 className="text-2xl font-bold">PREZIDENTI</h2>
          </div>
        </div>
        <p className="mt-4 text-gray-300 max-w-xl">
          Oʻzbekiston Respublikasi Prezidenti veb-sayti. Bu yerda siz Prezident
          faoliyati, yangiliklar, hujjatlar va boshqa ma’lumotlarni topishingiz
          mumkin.
        </p>
      </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
          {footerLinks.map((item) => (
            <div key={item.to}>
              <Link
                to={item.to}
                className="text-white text-lg font-bold hover:underline"
              >
                {item.label}
              </Link>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li>
                  <Link to={item.to} className="hover:text-white">
                    {item.label} sahifasi
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-10 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs">
        <p className="text-center md:text-left">
          Diqqat! Agar siz matnda xatoliklarni aniqlasangiz, ularni belgilab,
          maʼmuriyatni xabardor qilish uchun Ctrl+Enter tugmalarini bosing
        </p>
        <div className="mt-2 md:mt-0 flex items-center space-x-2">
          <span>Ishlab chiqilgan:</span>
          <img
            src="https://uzinfocom.uz/images/logo-white.svg"
            alt="Uzinfocom"
            className="h-4"
          />
        </div>
      </div>
    </footer>
  );
}
