import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Documents() {
  const location = useLocation();
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get("menu_id") || "1";

  const categories = [
    { label: t("documentsPage.cat1"), id: "1" },
    { label: t("documentsPage.cat2"), id: "2" },
    { label: t("documentsPage.cat3"), id: "3" },
    { label: t("documentsPage.cat4"), id: "4" }
  ];

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fakeDocData = {
      1: [t("documentsPage.doc1_1"), t("documentsPage.doc1_2")],
      2: [t("documentsPage.doc2_1"), t("documentsPage.doc2_2")],
      3: [t("documentsPage.doc3_1"), t("documentsPage.doc3_2")],
      4: [t("documentsPage.doc4_1")]
    };

    setDocuments(fakeDocData[menuId] || []);
  }, [menuId, t]);

  return (
    <div className="w-[80%] m-auto my-10 bg-white shadow-lg border border-gray-200 rounded-md">
      {/* Mini Navbar */}
      <nav className="border-b border-gray-200">
        <div className="flex flex-wrap px-4 space-x-6 text-sm font-medium overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/hujjatlar?menu_id=${cat.id}`}
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

      {/* Dynamic Content */}
      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold text-[#0C2543] mb-6">
          {categories.find((c) => c.id === menuId)?.label}
        </h1>

        {documents.length > 0 ? (
          <ul className="space-y-4">
            {documents.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-lg">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t("documentsPage.noData")}</p>
        )}
      </section>
    </div>
  );
}
