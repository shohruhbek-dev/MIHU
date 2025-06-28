import React, { useEffect, useState } from "react";
import {
    FaTelegramPlane,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaSearch,
    FaPlay,
} from "react-icons/fa";

const videoData = [
    {
        id: 1,
        title:
            "Президент Шавкат Мирзиёевнинг Мўғулистонга тарихи давлат ташрифи икки томонлама муносабатларда мутлақо янги босқични бошлаб берди",
        date: "26 июнь 2025",
        videoUrl: "https://youtu.be/fk_JzSJhWB8?si=ojIJ6f2H5zcbEPPN",
    },
    { id: 2, title: "Video 2", videoUrl: "https://youtu.be/fk_JzSJhWB8" },
    { id: 3, title: "Video 3", videoUrl: "https://youtu.be/fk_JzSJhWB8" },
    { id: 4, title: "Video 4", videoUrl: "https://youtu.be/fk_JzSJhWB8" },
    { id: 5, title: "Video 5", videoUrl: "https://youtu.be/fk_JzSJhWB8" },
];

const getEmbedUrl = (url) => {
    const match = url.match(/(?:youtu\.be\/|v=)([\w-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

export default function PresidentMediaSection() {
    const [search, setSearch] = useState("");
    const [activeVideo, setActiveVideo] = useState(null);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") {
                setActiveVideo(null);
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const filteredVideos = videoData.filter((v) =>
        v.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">

            <div className="flex gap-6 my-6 px-2 text-blue-800 justify-between items-center">
                <h2 className="text-xl font-bold text-blue-900 ">
                    ПРЕЗИДЕНТ ИЖТИМОИЙ ТАРМОҚЛАРДА:
                </h2>
                <a href="#" className="flex items-center gap-2 hover:underline">
                    <FaTelegramPlane /> Telegram
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                    <FaFacebookF /> Facebook
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                    <FaInstagram /> Instagram
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                    <FaTwitter /> X
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                    <FaTwitter /> Twitter
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                    <FaYoutube /> Youtube
                </a>
            </div>


            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Қидириш..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-full shadow"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaSearch className="w-5 h-5" />
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredVideos.map((video, index) => (
                    <div
                        key={video.id}
                        className={`relative p-4 border border-gray-200 shadow rounded-lg hover:shadow-lg transition ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                            }`}
                    >
                        <div
                            className="cursor-pointer flex items-center justify-center h-40 md:h-48 bg-blue-100 text-blue-700 font-bold text-lg text-center"
                            onClick={() => setActiveVideo(video)}
                        >
                            <FaPlay className="mx-1" />
                        </div>
                        <p className="mt-2 text-blue-900 font-semibold leading-tight">
                            {video.title}
                        </p>
                        {video.date && (
                            <p className="text-sm text-gray-600">{video.date}</p>
                        )}
                    </div>
                ))}
            </div>

            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl mx-auto p-4 z-60"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute -top-6 right-0 text-white text-4xl z-50"
                        >
                            &times;
                        </button>
                        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                            <iframe
                                src={getEmbedUrl(activeVideo.videoUrl) + "?autoplay=1"}
                                title={activeVideo.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
