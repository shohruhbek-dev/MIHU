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
    <div className="px-4 sm:px-6 lg:px-20 py-10">
      <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 text-blue-800 items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold text-blue-900 w-full sm:w-auto">
          ПРЕЗИДЕНТ ИЖТИМОИЙ ТАРМОҚЛАРДА:
        </h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <FaTelegramPlane /> Telegram
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <FaFacebookF /> Facebook
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <FaInstagram /> Instagram
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <FaTwitter /> X
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <FaTwitter /> Twitter
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <FaYoutube /> Youtube
          </a>
        </div>
      </div>

      <div className="relative mb-8 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Қидириш..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring focus:border-blue-400"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FaSearch className="w-5 h-5" />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredVideos.map((video, index) => (
          <div
            key={video.id}
            className={`relative p-4 border border-gray-200 bg-white shadow-sm rounded-lg hover:shadow-lg transition duration-300 ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div
              className="cursor-pointer flex items-center justify-center aspect-video bg-blue-100 text-blue-700 font-bold text-lg text-center rounded-md"
              onClick={() => setActiveVideo(video)}
            >
              <FaPlay className="w-6 h-6" />
            </div>
            <p className="mt-3 text-blue-900 font-semibold text-sm leading-snug">
              {video.title}
            </p>
            {video.date && (
              <p className="text-xs text-gray-600 mt-1">{video.date}</p>
            )}
          </div>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-6 right-0 text-white text-4xl z-50"
            >
              &times;
            </button>
            <iframe
              src={getEmbedUrl(activeVideo.videoUrl) + "?autoplay=1"}
              title={activeVideo.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
