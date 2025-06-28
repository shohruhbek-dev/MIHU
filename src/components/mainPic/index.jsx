import React, { useEffect, useState } from "react";
import mainPic from '/src/assets/mainPic.jpg'

  const imageSlides = [
  {
    src: mainPic,
    caption: "Ташрифнинг биринчи куни",
  },
  {
    src: mainPic,
    caption: "Янги лойиҳа тақдимоти",
  },
  {
    src: mainPic,
    caption: "Президент сафарда",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageSlides.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imageSlides.length);
  };

  return (
    <div className="relative w-[90%] m-auto h-[100vh] overflow-hidden rounded-lg shadow-lg">
      {/* Current Image */}
      <img
        className="w-full h-[120vh] transition duration-500"
        src={imageSlides[current].src}
        alt={`slide-${current}`}
      />

      {/* Caption */}
      <div className="absolute bottom-6 left-6 bg-black/60 text-white px-4 py-2 rounded text-sm">
        {imageSlides[current].caption}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded hover:bg-black/70"
      >
        ›
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {imageSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
