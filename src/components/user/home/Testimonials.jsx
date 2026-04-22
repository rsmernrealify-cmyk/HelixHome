
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// export const Testimonials = () => {
//   const testimonials = [
//     {
//       image:
//         "https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-img-2.jpg",
//       title: "HELIXIAN",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis odio obcaecati consequatur facilis id eos distinctio debitis adipisci sunt laboriosam asperiores non eum unde, maiores error, ad suscipit quidem soluta!",
//       name: "Mrunal Thakur",
//       role: "Software Engineer",
//     },
//     {
//       image:
//         "https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-img-1.jpg",
//       title: "HELIX",
//       description:
//         "Our students achieve outstanding results with a supportive environment and guidance from our expert mentors.",
//       name: "Akash Singh",
//       role: "Web Developer",
//     },
//     {
//       image:
//         "https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-img-3.jpg",
//       title: "ACHIEVER",
//       description:
//         "Great institutions produce great minds. We take pride in the success stories of our students.",
//       name: "Neha Sharma",
//       role: "Data Scientist",
//     },
//   ];

//   return (
//     <div className="bg-[#042a2d] bg-[url('https://demo.awaikenthemes.com/html-preview/infine/images/testimonial-bg.png')] py-10 px-5 flex flex-col w-full items-center">
//       {/* Header Section */}
//       <div className="max-w-4xl mb-8 text-center">
//         <h2 className="text-blue-300 text-lg mb-2">TESTIMONIAL</h2>
//         <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
//           Real success stories from our students
//         </h2>
//       </div>

//       {/* Swiper Section */}
//       <div className="w-full max-w-5xl">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop
//           speed={1500} // Increased speed for smoother transition
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex flex-col md:flex-row items-center bg-opacity-60 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
//                 {/* Image Section */}
//                 <div className="w-full md:w-1/3">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="h-full w-full object-cover rounded-t-xl md:rounded-none md:rounded-l-xl"
//                   />
//                 </div>
//                 {/* Content Section */}
//                 <div className="p-8 w-full md:w-2/3 text-white">
//                   <h1 className="text-2xl font-bold">{testimonial.title}</h1>
//                   <p className="text-lg my-4">{testimonial.description}</p>
//                   <div>
//                     <h2 className="text-xl font-semibold">{testimonial.name}</h2>
//                     <h3 className="text-md text-blue-300">{testimonial.role}</h3>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };



import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import BASE_URL from "../../../config/apiConfig";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/testimonial/testimonials`);
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  if (!testimonials.length) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase text-gray-500 mb-3 tracking-wider">Testimonials</p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              What Our Students <br /> Have To Say
            </h2>
            <div className="w-16 h-2 bg-teal-400 rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
              Real success stories from our brilliant students who achieved their dreams with Helix.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 transition text-white font-semibold px-6 py-3 rounded-md text-sm">
              View All Success Stories →
            </button>
          </div>

          {/* Testimonials List/Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex flex-col gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <div
                  key={testimonial._id}
                  className={`bg-white p-8 rounded-2xl shadow-lg relative w-full border border-gray-50`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-teal-50 shadow-sm"
                    />
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role || "Student"}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-base italic leading-relaxed mb-4">
                    "{testimonial.description}"
                  </p>
                  
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>

                  <div className="absolute right-4 top-4 text-teal-100">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H3.017V21H5.017Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
