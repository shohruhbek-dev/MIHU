import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Partners() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const menuId = searchParams.get("menu_id") || "1";

  const categories = [
    { label: "XALQARO TASHKILOTLAR", id: "1" },
    { label: "NODAVLAT TASHKILOTLAR", id: "2" },
    { label: "TA'LIM MUASSASALARI", id: "3" },
    { label: "IT KOMPANIYALAR", id: "4" },
    { label: "MOLIYAVIY INSTITUTLAR", id: "5" },
  ];

  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fakePartners = {
      1: ["BMT (United Nations)", "UNESCO", "UNICEF"],
      2: ["O‘zbekiston Yoshlar Ittifoqi", "Ekopartners NGO"],
      3: ["MIT – Massachusetts Institute of Technology", "Toshkent Axborot Texnologiyalari Universiteti"],
      4: ["EPAM Systems", "Yandex", "IT Park Uzbekistan"],
      5: ["Asian Development Bank", "World Bank", "Milliy bank"],
    };

    setPartners(fakePartners[menuId] || []);
  }, [menuId]);

  return (
    <div className="w-[80%] m-auto my-10 bg-white shadow-lg border border-gray-200 rounded-md">
      
      {/* Mini Navbar */}
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

      {/* Dynamic Content */}
      <section className="py-12 px-4">
        <h1 className="text-3xl font-bold text-[#0C2543] mb-6">
          {categories.find((c) => c.id === menuId)?.label}
        </h1>

        {partners.length > 0 ? (
          <ul className="space-y-4">
            {partners.map((item, idx) => (
              <li key={idx} className="text-gray-800 text-lg ">
                • {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Bu bo‘limda hali hamkorlar mavjud emas.</p>
        )}
      </section>
    </div>
  );
}
