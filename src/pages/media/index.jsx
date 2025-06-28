import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Media() {
  const { t } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get("menu_id") || "1";

  const categories = [
    { label: t("mediaPage.cat1"), id: "1" },
    { label: t("mediaPage.cat2"), id: "2" }
  ];

  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    const fakeData = {
      1: [t("mediaPage.item1")],
      2: [t("mediaPage.item2")]
    };

    setMediaItems(fakeData[menuId] || []);
  }, [menuId, t]);

  return (
    <div className="w-[80%] m-auto my-10 bg-white shadow-lg border border-gray-200 rounded-md">
      <nav className="border-b border-gray-200">
        <div className="flex flex-wrap px-4 space-x-6 text-sm font-medium overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/media?menu_id=${cat.id}`}
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

        {mediaItems.length > 0 ? (
          <ul className="space-y-4">
            {mediaItems.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-lg">• {item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t("mediaPage.noData")}</p>
        )}
      </section>
    </div>
  );
}
