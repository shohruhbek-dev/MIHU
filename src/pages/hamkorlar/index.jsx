import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get("menu_id") || "1";

  const categories = [
    { label: t("partnersPage.cat1"), id: "1" },
    { label: t("partnersPage.cat2"), id: "2" },
    { label: t("partnersPage.cat3"), id: "3" },
    { label: t("partnersPage.cat4"), id: "4" },
    { label: t("partnersPage.cat5"), id: "5" }
  ];

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fakePartners = {
      1: [
        t("partnersPage.int1"),
        t("partnersPage.int2"),
        t("partnersPage.int3")
      ],
      2: [t("partnersPage.ndo1"), t("partnersPage.ndo2")],
      3: [t("partnersPage.edu1"), t("partnersPage.edu2")],
      4: [t("partnersPage.it1"), t("partnersPage.it2"), t("partnersPage.it3")],
      5: [t("partnersPage.fin1"), t("partnersPage.fin2"), t("partnersPage.fin3")]
    };

    setPartners(fakePartners[menuId] || []);
  }, [menuId, t]);

  return (
    <div className="w-[80%] m-auto my-10 bg-white shadow-lg border border-gray-200 rounded-md">
      <nav className="border-b border-gray-200">
        <div className="flex flex-wrap px-4 space-x-6 text-sm font-medium overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/partners?menu_id=${cat.id}`}
              className={`py-3 inline-block border-b-2 transition-all duration-150 ${
                menuId === cat.id
                  ? "text-blue-700 border-blue-700"
                  : "text-gray-700 border-transparent hover:text-blue-600"
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </nav>

      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold text-[#0C2543] mb-6">
          {categories.find((c) => c.id === menuId)?.label}
        </h1>

        {partners.length > 0 ? (
          <ul className="space-y-4">
            {partners.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-lg">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t("partnersPage.noData")}</p>
        )}
      </section>
    </div>
  );
}
