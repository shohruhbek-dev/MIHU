import { Link } from "react-router-dom";
import logo2 from "../../assets/mainLogo1.png";
export default function Footer() {

  const footerLinks = [
    {
      id: "1",
      label: "Uyushma",
      to: "/uyushma",
      items: [
        { name: "Maqom", parent: "/uyushma", menuId: "1" },
        { name: "Tarjimai hol", parent: "/uyushma", menuId: "2" },
        { name: "Mukofotlar", parent: "/uyushma", menuId: "3" },
      ],
    },
    {
      id: "2",
      label: "Yangiliklar",
      to: "/yangiliklar",
      items: [
        { name: "Yangiliklar", parent: "/yangiliklar", menuId: "1" },
        { name: "Majlislar", parent: "/yangiliklar", menuId: "2" },
        { name: "Hududlarga safarlar", parent: "/yangiliklar", menuId: "3" },
        { name: "Xorijga tashriflar", parent: "/yangiliklar", menuId: "4" },
        { name: "Xorijiy delegatsiyalar bilan uchrashuv", parent: "/yangiliklar", menuId: "5" },
        { name: "Nutqlar", parent: "/yangiliklar", menuId: "6" },
        { name: "Tabriklar", parent: "/yangiliklar", menuId: "7" },
      ],
    },
    {
      id: "3",
      label: "Hujjatlar",
      to: "/hujjatlar",
      items: [
        { name: "Farmonlar", parent: "/hujjatlar", menuId: "1" },
        { name: "Qarorlar", parent: "/hujjatlar", menuId: "2" },
        { name: "Farmoyishlar", parent: "/hujjatlar", menuId: "3" },
        { name: "Taraqqiyot strategiyasi", parent: "/hujjatlar", menuId: "4" },
        { name: "Tashabbuslar", parent: "/hujjatlar", menuId: "5" },
      ],
    },
    {
      id: "5",
      label: "Hamkorlar",
      to: "/partners",
      items: [
        { name: "Administratsiya to'g'risida", parent: "/partners", menuId: "1" },
        { name: "Raxbariyat", parent: "/partners", menuId: "2" },
        { name: "Quyi tashkilotlar", parent: "/partners", menuId: "3" },
      ],
    },
    {
      id: "4",
      label: "Media",
      to: "/media",
      items: [
        { name: "Fotogalareya", parent: "/media", menuId: "1" },
        { name: "Videogalareya", parent: "/media", menuId: "2" },
        { name: "Bog'lanish", parent: "/contact", menuId: "1" },

      ],
    },

  ];

  return (
    <footer className="bg-blue-800 text-white pt-10 pb-6 px-6 md:px-20 text-sm font-medium">
      <div className="max-w-screen-xl mx-auto flex gap-7 flex-col xl:flex-row justify-between">
        <div className="mb-10">
          <img
            src={logo2}
            alt="Gerb"
            className="w-full"
          />
          <div className="flex items-center space-x-3">

          </div>
          <p className="mt-6 text-gray-300 max-w-xl">
            Маълумотлардан фойдаланилганда www.president.uz га ҳавола кўрсатилиши шарт

          </p>
          <p className="mt-4 text-gray-300 max-w-xl"> © 2025 Ўзбекистон Республикаси Президентининг расмий веб-сайти</p>
          <p className="mt-4 text-gray-300 max-w-xl">            Барча ҳуқуқлар ҳимояланган
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
          {footerLinks?.map((section) => (
            <div key={section.id}>
              <Link
                to={section.to}
                className="text-[16px] font-bold "
              >
                {section.label}
              </Link>

              <ul className="mt-2 space-y-3 text-[#4F95FD] text-sm">
                {section.items?.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={`${item.parent}?menu_id=${item.menuId}`}
                      className={` hover:underline  ${item.name === "Bog'lanish" ? "text-white" : "text-[#4F95FD]"
                        } `}    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs">
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
