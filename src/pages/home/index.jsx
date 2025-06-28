import UzbekistanMap from "../../components/UzbekistanMap";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const latestNews = [
    {
      img: "Yangilik uchun rasm",
      title: t("home.newsTitle"),
      date: t("home.newsDate")
    },
    {
      img: "Yangilik uchun rasm",
      title: t("home.newsTitle"),
      date: t("home.newsDate")
    },
    {
      img: "Yangilik uchun rasm",
      title: t("home.newsTitle"),
      date: t("home.newsDate")
    },
    {
      img: "Yangilik uchun rasm",
      title: t("home.newsTitle"),
      date: t("home.newsDate")
    }
  ];

  return (
    <section className="py-12 px-4">
      <h1 className="text-3xl font-bold text-[#0C2543] mb-4">
        {t("home.pageTitle")}
      </h1>
      <p className="text-gray-700 text-lg">
        {t("home.description")}
      </p>

      <div>
        <UzbekistanMap className="w-full h-auto" />
      </div>

      <div className="py-10 px-4 md:px-10 bg-gray-50">
        <h1 className="text-3xl font-bold text-[#113892] mb-6">{t("home.latestNews")}</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestNews.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.date}</span>
                  <ArrowRight className="w-5 h-5 text-[#113892]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
