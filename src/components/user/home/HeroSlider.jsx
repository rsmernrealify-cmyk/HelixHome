


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import BASE_URL from "../../../config/apiConfig";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function HeroSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(`${BASE_URL}/slider`);
        if (response.ok) {
          const data = await response.json();
          setSlides(data);
        }
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };
    fetchSlides();
  }, []);

  if (!slides.length) return null;

  return (
    <div className="w-full px-4 py-4 bg-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        speed={700}
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex items-center px-6 py-6 rounded-md min-h-[280px] bg-indigo-50 relative overflow-hidden`}
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 text-indigo-900`}>
                  {slide.title}
                </h3>
                <p className="text-gray-700 text-base mb-4 max-w-lg">{slide.description}</p>
                <a
                  href={slide.link}
                  className="inline-block bg-black text-white text-sm px-5 py-2 rounded hover:bg-gray-900 transition"
                >
                  {slide.buttonText || "Apply Now"}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
