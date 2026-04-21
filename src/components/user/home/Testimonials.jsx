
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



import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tom Hurley",
    role: "Content Creator",
    image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/testimonial-02-150x150.jpg",
    text: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bob Limones",
    role: "Student",
    image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/testimonial-01-150x150.jpg",
    text: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Lane",
    role: "Developer",
    image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/testimonial-03-150x150.jpg",
    text: "Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
    rating: 4,
  },
];

const Testimonials = () => {
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 transition text-white font-semibold px-6 py-3 rounded-md text-sm">
              View All →
            </button>
          </div>

          {/* Testimonials Slider */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 transition-all duration-500">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white p-8 rounded-2xl shadow-lg relative w-full max-w-md`}
                >
                  <div className="absolute top-6 left-6 w-12 h-12">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-teal-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                      99
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4 mt-10">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>
                  <h4 className="text-gray-900 font-bold text-lg leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>

                  <div className="absolute right-0 top-0 w-28 h-28">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-10"
                    >
                      <defs>
                        <pattern
                          id="dots"
                          x="0"
                          y="0"
                          width="10"
                          height="10"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="1" cy="1" r="1" fill="#0f766e" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#dots)" />
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
