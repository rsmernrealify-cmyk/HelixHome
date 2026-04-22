


// //   import React, { useState } from "react";

// // // Array of images (Replace these with your actual image URLs)
// // const heroImages = [
// //   "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
// //   "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
  
  
// // ];

// // function HeroImage() {
// //   const [currentImage, setCurrentImage] = useState(0);

// //   // Function to handle next image
// //   const nextImage = () => {
// //     setCurrentImage((prev) => (prev + 1) % heroImages.length);
// //   };

// //   // Function to handle previous image
// //   const prevImage = () => {
// //     setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
// //   };

// //   return (
// //     <div className="relative w-full" style={{ height: "calc(100vw / 3.15)" }}>
// //       {/* Hero Image */}
// //       <img
// //         src={heroImages[currentImage]}
// //         alt={`Hero Image ${currentImage + 1}`}
// //         className="w-full h-full object-contain"
// //       />

// //       {/* Left Arrow */}
// //       <button
// //         onClick={prevImage}
// //         className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-all"
// //       >
// //         &#8592;
// //       </button>

// //       {/* Right Arrow */}
// //       <button
// //         onClick={nextImage}
// //         className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full shadow-lg hover:bg-opacity-75 transition-all"
// //       >
// //         &#8594;
// //       </button>
// //     </div>
// //   );
// // }

// // export default HeroImage;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Pagination, Autoplay } from "swiper/modules";

// // Array of images (Replace these with your actual image URLs)
// const heroImages = [
//   "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
//   "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
// ];

// function HeroImage() {
//   return (
//     <div className="relative w-full" style={{ height: "calc(100vw / 3.15)" }}>
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         speed={1000} // Adjust speed for smoother transitions
//       >
//         {heroImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={image}
//               alt={`Hero Image ${index + 1}`}
//               className="w-full h-full object-contain"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default HeroImage;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import BASE_URL from "../../../config/apiConfig";

const defaultHeroImages = [
  "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
  "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
];

function HeroImage() {
  const [announcements, setAnnouncements] = useState([]);
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const response = await fetch(`${BASE_URL}/slider`);
      if (response.ok) {
        const data = await response.json();
        setSliders(data);
      }
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(`${BASE_URL}/announcement`);
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(data);
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const imagesToDisplay = sliders.length > 0 ? sliders.map(s => s.image) : defaultHeroImages;

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="w-full overflow-hidden" style={{ height: "calc(100vw / 3.15)" }}>
        <Swiper
          key={imagesToDisplay.length} // Force re-render when images load
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={imagesToDisplay.length > 1}
          speed={1000}
          className="w-full h-full"
        >
          {imagesToDisplay.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Hero Image ${index + 1}`}
                className="w-full h-full object-cover shadow-sm"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Announcement Ticker Section */}
      <div className="bg-blue-900 text-white py-3 border-y border-blue-700 shadow-inner">
        <div className="relative block overflow-hidden h-7">
          <div className="absolute whitespace-nowrap animate-marquee flex items-center h-full">
            {announcements.length > 0 ? (
                <>
                    {/* Render content multiple times to ensure a smooth, long-distance loop */}
                    {[1, 2, 3, 4].map((repeat) => (
                      <React.Fragment key={repeat}>
                        {announcements.map((ann, idx) => (
                            <a 
                                key={`${repeat}-${ann._id || idx}`} 
                                href={ann.link} 
                                className="mx-12 text-[15px] font-semibold hover:text-yellow-400 transition-colors flex items-center gap-3 group"
                            >
                                {idx === 0 && repeat === 1 && (
                                  <span className="bg-red-500 text-[10px] uppercase px-1.5 py-0.5 rounded animate-pulse">New</span>
                                )}
                                <span className="flex items-center gap-2">
                                  <svg className="w-4 h-4 text-blue-300 group-hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                  </svg>
                                  {ann.text}
                                </span>
                                <span className="text-blue-500 opacity-50 font-bold ml-4">/ /</span>
                            </a>
                        ))}
                      </React.Fragment>
                    ))}
                </>
            ) : (
                <span className="mx-4 text-lg font-medium opacity-80 italic flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                   Loading latest updates...
                </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
