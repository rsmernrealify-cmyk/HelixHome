


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

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// Array of images (Replace these with your actual image URLs)
const heroImages = [
  "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
  "https://helixmedical.helixinstitute.com/assets/uploads/NEET-2024_COVER_PHOTO_(1).gif",
];

function HeroImage() {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div style={{ height: "calc(100vw / 3.15)" }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1000} // Adjust speed for smoother transitions
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Hero Image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Download Key Animation Bar */}
      <div className="bg-blue-800 text-white py-2">
        <div className="relative overflow-hidden h-8">
          <div className="absolute whitespace-nowrap animate-marquee">
            <span className="mx-4 text-lg font-medium">Download NEET 2024 Answer Key Now!</span>
            <span className="mx-4 text-lg font-medium">NEET 2024 Answer Key</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
