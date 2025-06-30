
import news1 from "/src/assets/news1.jpg"
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function LatestNews() {
    const { t } = useTranslation();

    const latestNews = [
        {
            img: news1,
            title: t("home.newsTitle"),
            date: t("home.newsDate")
        },
        {
            img: news1,
            title: t("home.newsTitle"),
            date: t("home.newsDate")
        },
        {
            img: news1,
            title: t("home.newsTitle"),
            date: t("home.newsDate")
        },
        {
            img: news1,
            title: t("home.newsTitle"),
            date: t("home.newsDate")
        },

        {
            img: news1,
            title: t("home.newsTitle"),
            date: t("home.newsDate")
        },
        {
            img: news1,
            title: t("home.newsTitle"),
            date: t("home.newsDate")
        }
    ];


    return (
        <div className=" w-[90%] my-10 m-auto  bg-gray-50">
            <h1 className="text-3xl font-bold text-[#113892] text-center mb-6">{t("home.latestNews")}</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latestNews.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-102 transition duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className=" object-cover aspect-video "
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
    )
}