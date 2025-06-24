import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Uyushma() {
  // Read ?menu_id from URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get("menu_id") || "1"; // Default to 1

  // Menu categories
  const categories = [
    { label: "Uyushma haqida", id: "1" },
    { label: "Uyushma tarixi", id: "2" },
    { label: "Uyushma faoliyati", id: "3" },
    { label: "Uyushma maqsadi", id: "4" },
    { label: "Uyushma missiyasi", id: "5" },
    { label: "Uyushma qadryatlari", id: "6" },

  ];

  // Fake news data simulation (in real case fetch from API)
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching news based on menu_id
    const fakeNewsData = {
      1: ["Uyushma haqida"],
      2: ["Uyushma tarixi "],
      3: ["Uyushma qilgan sihlar "],
      4: ["Uyushma maqsadi haqida "],
      5: ["Uyushma missiyasi haqida "],
      6: ["Uyushma qadryatlari haqida "],

    };

    setNews(fakeNewsData[menuId] || []);
  }, [menuId]);

  return (
    <div className="newsPAge w-[80%] m-auto my-10 bg-white shadow-lg border border-gray-200 rounded-md">

      {/* Mini Navbar */}
      <nav className="border-b border-gray-200">
        <div className="miniNewsnav flex flex-wrap px-4 space-x-6 text-sm font-medium overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/uyushma?menu_id=${cat.id}`}
              className={`py-3 inline-block border-b-2 transition-all duration-150 ${menuId === cat.id
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

        {news.length > 0 ? (
          <ul className="space-y-4">
            {news.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-lg">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Hozircha yangiliklar yo‘q.</p>
        )}
      </section>
    </div>
  );
}
