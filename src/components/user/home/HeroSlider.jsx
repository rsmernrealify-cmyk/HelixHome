// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Pagination, Autoplay } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/autoplay";

// // // Slides content
// // const slides = [
// //   {
// //     title: "Scholarship Test",
// //     description: "Register now and get a chance to win up to 100% scholarship.",
// //     button: "Apply Now",
// //     bgColor: "bg-gradient-to-r from-indigo-600 to-purple-600",
// //   },
// //   {
// //     title: "Apply for Job",
// //     description: "Join our academic or admin team to shape the future.",
// //     button: "View Openings",
// //     bgColor: "bg-gradient-to-r from-blue-600 to-lime-500",
// //   },
// //   {
// //     title: "Downloads",
// //     description: "Get brochures, test papers and more in one place.",
// //     button: "Download Now",
// //     bgColor: "bg-gradient-to-r from-blue-600 to-cyan-500",
// //   },
// //   {
// //     title: "Syllabus",
// //     description: "View detailed syllabus for NEET, JEE & Foundation.",
// //     button: "View Syllabus",
// //     bgColor: "bg-gradient-to-r from-pink-600 to-rose-500",
// //   },
// // ];

// // function HeroSlider() {
// //   return (
// //     <div className="relative w-full">
// //       <Swiper
// //         modules={[Pagination, Autoplay]}
// //         slidesPerView={1}
// //         spaceBetween={0}
// //         pagination={{ clickable: true }}
// //         autoplay={{ delay: 5000, disableOnInteraction: false }}
// //         loop
// //         speed={800}
// //       >
// //         {slides.map((slide, index) => (
// //           <SwiperSlide key={index}>
// //             <div className={`h-[calc(100vw/3.2)] flex items-center justify-center ${slide.bgColor} text-white transition-all duration-500`}>
// //               <div className="text-center px-6 max-w-xl">
// //                 <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
// //                 <p className="text-base md:text-lg mb-6">{slide.description}</p>
// //                 <button className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">
// //                   {slide.button}
// //                 </button>
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }

// // export default HeroSlider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// const slides = [
//   {
//     title: "Scholarship Test",
//     description: "Register for the scholarship test and win exciting rewards.",
//     button: "Apply Now",
//     bgColor: "bg-indigo-100",
//     textColor: "text-indigo-800",
//   },
//   {
//     title: "Apply for Job",
//     description: "Explore career opportunities and join our team.",
//     button: "View Openings",
//     bgColor: "bg-blue-100",
//     textColor: "text-blue-800",
//   },
//   {
//     title: "Downloads",
//     description: "Access brochures, previous papers and more.",
//     button: "Download Now",
//     bgColor: "bg-blue-100",
//     textColor: "text-blue-800",
//   },
//   {
//     title: "Syllabus",
//     description: "Get detailed syllabus for NEET, JEE and Foundation courses.",
//     button: "View Syllabus",
//     bgColor: "bg-pink-100",
//     textColor: "text-pink-800",
//   },
// ];

// function HeroSlider() {
//   return (
//     <div className="w-full px-4 py-4 bg-white">
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000 }}
//         loop
//         speed={700}
//         className="rounded-lg overflow-hidden"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className={`flex items-center ${slide.bgColor} px-6 py-4 rounded-md min-h-[200px]`}>
//               <div>
//                 <h3 className={`text-xl font-bold mb-2 ${slide.textColor}`}>
//                   {slide.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">{slide.description}</p>
//                 <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-900 transition">
//                   {slide.button}
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default HeroSlider;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slides = [
  {
    title: "Scholarship Test",
    description: "Register for the scholarship test and win exciting rewards.",
    button: "Apply Now",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
  {
    title: "Apply for Job",
    description: "Explore career opportunities and join our team.",
    button: "View Openings",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    title: "Downloads",
    description: "Access brochures, previous papers and more.",
    button: "Download Now",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    title: "Syllabus",
    description: "Get detailed syllabus for NEET, JEE and Foundation courses.",
    button: "View Syllabus",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
  },
];

function HeroSlider() {
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
              className={`flex items-center ${slide.bgColor} px-6 py-6 rounded-md min-h-[280px]`}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${slide.textColor}`}>
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">{slide.description}</p>
                <button className="bg-black text-white text-sm px-5 py-2 rounded hover:bg-gray-900 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
