import { Link } from "react-router-dom";
import logo2 from "../../assets/mainLogo1.png";
import { useTranslation } from "react-i18next";
// import { useTransition } from "react";
export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    {
      id: "1",
      label: t("footer.uyushma"),
      to: "/uyushma",
      items: [
        { name: t("footer.uyushma1"), parent: "/uyushma", menuId: "1" },
        { name: t("footer.uyushma2"), parent: "/uyushma", menuId: "2" },
        { name: t("footer.uyushma3"), parent: "/uyushma", menuId: "3" },
      ],
    },
    {
      id: "2",
      label: t("footer.news"),
      to: "/yangiliklar",
      items: [
        { name: t("footer.news1"), parent: "/yangiliklar", menuId: "1" },
        { name: t("footer.news2"), parent: "/yangiliklar", menuId: "2" },
        { name: t("footer.news3"), parent: "/yangiliklar", menuId: "3" },
        { name: t("footer.news4"), parent: "/yangiliklar", menuId: "4" },
        { name: t("footer.news5"), parent: "/yangiliklar", menuId: "5" },
        { name: t("footer.news6"), parent: "/yangiliklar", menuId: "6" },
        { name: t("footer.news7"), parent: "/yangiliklar", menuId: "7" },
      ],
    },
    {
      id: "3",
      label: t("footer.docs"),
      to: "/hujjatlar",
      items: [
        { name: t("footer.docs1"), parent: "/hujjatlar", menuId: "1" },
        { name: t("footer.docs2"), parent: "/hujjatlar", menuId: "2" },
        { name: t("footer.docs3"), parent: "/hujjatlar", menuId: "3" },
        { name: t("footer.docs4"), parent: "/hujjatlar", menuId: "4" },
        { name: t("footer.docs5"), parent: "/hujjatlar", menuId: "5" },
      ],
    },
    {
      id: "5",
      label: t("footer.partners"),
      to: "/partners",
      items: [
        { name: t("footer.partners1"), parent: "/partners", menuId: "1" },
        { name: t("footer.partners2"), parent: "/partners", menuId: "2" },
        { name: t("footer.partners3"), parent: "/partners", menuId: "3" },
      ],
    },
    {
      id: "4",
      label: t("footer.media"),
      to: "/media",
      items: [
        { name: t("footer.media1"), parent: "/media", menuId: "1" },
        { name: t("footer.media2"), parent: "/media", menuId: "2" },
        { name: t("footer.contact"), parent: "/contact", menuId: "1" },
      ],
    },
  ];

  return (
    <footer className="bg-[#1E99FF] text-white pt-10 pb-6 px-6 md:px-20 text-sm font-medium">
      <div className="max-w-screen-xl mx-auto flex gap-7 flex-col xl:flex-row justify-between">
        <div className="mb-10">
          <img src={logo2} alt="Gerb" className="w-full" />

          <p className="mt-6 text-gray-300 max-w-xl">
            {t("footer.disclaimer")}
          </p>
          <p className="mt-4 text-gray-300 max-w-xl">© 2025 {t("footer.official")}</p>
          <p className="mt-4 text-gray-300 max-w-xl">{t("footer.rights")}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
          {footerLinks.map((section) => (
            <div key={section.id}>
              <Link to={section.to} className="text-[17px] font-bold">
                {section.label}
              </Link>
              <ul className="mt-2 space-y-3 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={`${item.parent}?menu_id=${item.menuId}`}
                      className={`text-white ${item.name === t("footer.contact")
                        ? "text-[17px]"
                        : "hover:underline"
                        }`}
                    >
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
        <p className="text-center md:text-left">{t("footer.notice")}</p>
      </div>
    </footer>
  );
}