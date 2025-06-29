import React, { useEffect, useState } from "react";
import mainPic from '/src/assets/mainPic.jpg'
import mainPic2 from '/src/assets/mainPic2.jpg'
import mainPic3 from '/src/assets/mainPic3.jpg'
import mainPic4 from '/src/assets/mainPic4.jpg'
import mainPic5 from '/src/assets/mainPic5.jpg'
import mainPic6 from '/src/assets/mainPic6.jpg'

const imageSlides = [
  {
    src: mainPic,
    caption: "Ташрифнинг биринчи куни",
  },
  {
    src: mainPic2,
    caption: "Янги лойиҳа тақдимоти",
  },
  {
    src: mainPic3,
    caption: "Президент сафарда",
  }, {
    src: mainPic4,
    caption: "Президент сафарда",
  }, {
    src: mainPic5,
    caption: "Президент сафарда",
  }, {
    src: mainPic6,
    caption: "Президент сафарда",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // const prevSlide = () => {
  //   setCurrent((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  // };

  // const nextSlide = () => {
  //   setCurrent((prev) => (prev + 1) % imageSlides.length);
  // };


  return (
    <div className="relative w-[90%] m-auto h-[100vh]  overflow-hidden rounded-lg shadow-lg">
      <img
        className="w-full h-[100vh] max-md:h-[70vh] transition duration-500"
        src={imageSlides[current].src}
        alt={`slide-${current}`}
      />

      <div className="absolute bottom-6 left-6 bg-black/60 text-white px-4 py-2 rounded text-sm">
        {imageSlides[current].caption}
      </div>

  

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

