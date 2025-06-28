import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RegionDetail from "../../components/regioanDetail";

export default function News() {
  const location = useLocation(); // ✅ active now
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get("menu_id") || "1";
  const region = searchParams.get("region"); // ✅ region from query string

  const [news, setNews] = useState([]);

  // ✅ Categories rendered fresh with translations on every render
  const categories = [
    { label: t("newsPage.cat1"), id: "1" },
    { label: t("newsPage.cat2"), id: "2" },
    { label: t("newsPage.cat3"), id: "3" },
    { label: t("newsPage.cat4"), id: "4" },
    { label: t("newsPage.cat5"), id: "5" },
  ];

  // ✅ Scroll to region block if region is passed
  useEffect(() => {
    if (region) {
      const anchor = document.getElementById("hududlar");
      if (anchor) {
        setTimeout(() => {
          anchor.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [region]);

  // ✅ Fake localized news by menu_id
  useEffect(() => {
    const fakeNewsData = {
      1: [t("newsPage.news1_1"), t("newsPage.news1_2")],
      2: [t("newsPage.news2_1"), t("newsPage.news2_2")],
      3: [t("newsPage.news3_1"), t("newsPage.news3_2")],
      4: [t("newsPage.news4_1"), t("newsPage.news4_2")],
      5: [t("newsPage.news5_1"), t("newsPage.news5_2")],
    };

    setNews(fakeNewsData[menuId] || []);
  }, [menuId, t]);

  return (
    <div className="newsPage w-[80%] m-auto my-10 bg-white shadow-lg border border-gray-200 rounded-md">
      {/* ✅ Mini Navbar */}
      <nav className="border-b border-gray-200">
        <div className="miniNewsnav flex flex-wrap px-4 space-x-6 text-sm font-medium overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/yangiliklar?menu_id=${cat.id}`}
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

      {/* ✅ Main News Content */}
      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold text-[#0C2543] mb-6">
          {categories.find((c) => c.id === menuId)?.label}
        </h1>

        {news.length > 0 ? (
          <ul className="space-y-4">
            {news.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-lg">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t("newsPage.noNews")}</p>
        )}
      </section>

      {/* ✅ Region Info Block if Region is Selected */}
      {region && (
        <section id="hududlar" className="px-4 pb-10">
          <h2 className="text-2xl font-semibold text-[#0C2543] mb-3">
            {t("newsPage.cat2")}
          </h2>
          <p className="text-lg text-blue-800 mb-4">
            Танланган ҳудуд: <strong>{region}</strong>
          </p>
          <RegionDetail regionKey={region} />
        </section>
      )}
    </div>
  );
}
