// // import React from "react";
// // import { CalendarDays, Users, Clock } from "lucide-react";

// // const courses = [
// //   {
// //     id: 1,
// //     title: "Data Science and Machine Learning with Python - Hands On!",
// //     image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/course-01-600x400.jpg",
// //     instructor: "Edward Norton",
// //     lessons: 8,
// //     students: 20,
// //     duration: "4 Weeks",
// //     price: "$39.00",
// //   },
// //   {
// //     id: 2,
// //     title: "The Complete Front-End Web Development Course",
// //     image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/course-02-600x400.jpg",
// //     instructor: "Elexa Holmes",
// //     lessons: 12,
// //     students: 45,
// //     duration: "6 Weeks",
// //     price: "$49.00",
// //   },
// //   {
// //     id: 3,
// //     title: "Java Programming Masterclass for Software Developers",
// //     image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/course-03-600x400.jpg",
// //     instructor: "Max Payne",
// //     lessons: 10,
// //     students: 35,
// //     duration: "5 Weeks",
// //     price: "$59.00",
// //   },
// // ];

// // const PopularCourses = () => {
// //   return (
// //     <section className="popular-courses-section bg-[#f3f4f6] py-20">
// //       <div className="container mx-auto px-4">
// //         {/* Section Header */}
// //         <div className="text-center mb-14">
// //           <h2 className="text-[40px] font-bold text-[#0f172a] mb-4">
// //             Popular <span className="text-[#6366f1]">Courses</span>
// //           </h2>
// //           <p className="text-[#475569] text-[18px] max-w-2xl mx-auto">
// //             Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim minim.
// //           </p>
// //         </div>

// //         {/* Course Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// //           {courses.map((course) => (
// //             <div
// //               key={course.id}
// //               className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
// //             >
// //               <div className="overflow-hidden">
// //                 <img
// //                   src={course.image}
// //                   alt={course.title}
// //                   className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <div className="text-sm text-[#6366f1] font-medium mb-2">Development</div>
// //                 <h3 className="text-xl font-semibold text-[#0f172a] mb-3 leading-7 group-hover:text-[#6366f1] transition">
// //                   {course.title}
// //                 </h3>
// //                 <p className="text-sm text-[#475569] mb-4">By {course.instructor}</p>
// //                 <div className="flex justify-between items-center text-sm text-[#64748b] mb-4">
// //                   <div className="flex items-center gap-2">
// //                     <CalendarDays className="w-4 h-4" />
// //                     {course.lessons} Lessons
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <Users className="w-4 h-4" />
// //                     {course.students} Students
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-between items-center">
// //                   <div className="flex items-center gap-2 text-sm text-[#64748b]">
// //                     <Clock className="w-4 h-4" />
// //                     {course.duration}
// //                   </div>
// //                   <span className="text-[#6366f1] font-bold text-[16px]">{course.price}</span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PopularCourses;



// import React from "react";
// import { CalendarDays, Users, Clock } from "lucide-react";

// const courses = [
//   {
//     id: 1,
//     title: "Data Science and Machine Learning with Python - Hands On!",
//     image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/course-01-600x400.jpg",
//     instructor: "Edward Norton",
//     lessons: 8,
//     students: 20,
//     duration: "4 Weeks",
//     price: "$39.00",
//     hoverDescription: "Get hands-on with real datasets, learn predictive modeling, and explore advanced data science concepts."
//   },
//   {
//     id: 2,
//     title: "The Complete Front-End Web Development Course",
//     image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/course-02-600x400.jpg",
//     instructor: "Elexa Holmes",
//     lessons: 12,
//     students: 45,
//     duration: "6 Weeks",
//     price: "$49.00",
//     hoverDescription: "Master HTML, CSS, JavaScript, and React.js to build modern, responsive websites."
//   },
//   {
//     id: 3,
//     title: "Java Programming Masterclass for Software Developers",
//     image: "https://demo.edublink.co/distant-learning/wp-content/uploads/2022/10/course-03-600x400.jpg",
//     instructor: "Max Payne",
//     lessons: 10,
//     students: 35,
//     duration: "5 Weeks",
//     price: "$59.00",
//     hoverDescription: "Learn core Java skills, OOP principles, and backend development with practical exercises."
//   },
// ];

// const PopularCourses = () => {
//   return (
//     <section className="popular-courses-section bg-[#f3f4f6] py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <h2 className="text-[40px] font-bold text-[#0f172a] mb-4">
//             Popular <span className="text-[#6366f1]">Courses</span>
//           </h2>
//           <p className="text-[#475569] text-[18px] max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim minim.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="text-sm text-[#6366f1] font-medium mb-2">Development</div>
//                 <h3 className="text-xl font-semibold text-[#0f172a] mb-3 leading-7 group-hover:text-[#6366f1] transition">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm text-[#475569] mb-4">By {course.instructor}</p>
//                 <div className="flex justify-between items-center text-sm text-[#64748b] mb-4">
//                   <div className="flex items-center gap-2">
//                     <CalendarDays className="w-4 h-4" />
//                     {course.lessons} Lessons
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Users className="w-4 h-4" />
//                     {course.students} Students
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center gap-2 text-sm text-[#64748b]">
//                     <Clock className="w-4 h-4" />
//                     {course.duration}
//                   </div>
//                   <span className="text-[#6366f1] font-bold text-[16px]">{course.price}</span>
//                 </div>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-[#6366f1]/95 text-white p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
//                 <p className="text-sm mb-4">{course.hoverDescription}</p>
//                 <button className="bg-white text-[#6366f1] font-semibold px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularCourses;


import React, { useState, useEffect } from "react";
import { CalendarDays, Users, Clock } from "lucide-react";
import BASE_URL from "../../../config/apiConfig";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPopularCourses = async () => {
      try {
        const response = await fetch(`${BASE_URL}/course?isPopular=true`);
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        }
      } catch (error) {
        console.error("Error fetching popular courses:", error);
      }
    };
    fetchPopularCourses();
  }, []);

  if (!courses.length) return null;

  return (
    <section className="popular-courses-section bg-[#f3f4f6] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-[40px] font-bold text-[#0f172a] mb-4">
            Popular <span className="text-teal-600">Courses</span>
          </h2>
          <p className="text-[#475569] text-[18px] max-w-2xl mx-auto">
            Choose from our best-reviewed medical, engineering, and foundation programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course._id}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image || "https://via.placeholder.com/600x400"}
                  alt={course.name}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-teal-600 font-bold mb-2 uppercase tracking-wide">
                  {course.category}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-7 group-hover:text-teal-600 transition h-14 line-clamp-2">
                  {course.name}
                </h3>

                <div className="flex justify-between items-center text-sm text-[#64748b] mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-teal-500" />
                    {course.lessons || "0"} Lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-teal-500" />
                    {course.students || "0"} Students
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Clock className="w-4 h-4 text-teal-500" />
                    {course.duration}
                  </div>
                  <span className="text-pink-600 font-extrabold text-lg">{course.price}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-teal-600/95 text-white p-6 flex flex-col justify-center items-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4">{course.name}</h3>
                <p className="text-sm mb-8 leading-relaxed">
                  {course.hoverDescription || course.description}
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <button className="bg-white text-teal-600 font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition shadow-lg">
                    View Details
                  </button>
                  <button className="border-2 border-white text-white font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-white hover:text-teal-600 transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;


