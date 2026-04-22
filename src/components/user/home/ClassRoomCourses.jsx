
// // // // import React, { useState } from "react";
// // // // import { FiBookOpen } from "react-icons/fi";
// // // // import { courseCategories } from "../../../data/courses";

// // // // function ClassRoomCourses() {
// // // //   const [activeCategoryId, setActiveCategoryId] = useState(null);

// // // //   const handleCategoryClick = (id) => {
// // // //     setActiveCategoryId((prevId) => (prevId === id ? null : id));
// // // //   };

// // // //   return (
// // // //     <div className="bg-gradient-to-b from-indigo-100 to-purple-50 min-h-screen py-12">
// // // //       <div className="container mx-auto px-4">
// // // //         {/* Header */}
// // // //         <div className="text-center mb-12">
// // // //           <h2 className="text-4xl font-extrabold text-gray-800">
// // // //             Explore Our <span className="text-indigo-600">Classroom Courses</span>
// // // //           </h2>
// // // //           <p className="mt-4 text-gray-600 max-w-xl mx-auto">
// // // //             Choose from a variety of categories designed to guide your learning journey.
// // // //           </p>
// // // //         </div>

// // // //         {/* Categories Section */}
// // // //         {activeCategoryId === null ? (
// // // //           <div className="flex flex-col lg:flex-row justify-center gap-6">
// // // //             {courseCategories.map((category) => (
// // // //               <div
// // // //                 key={category.id}
// // // //                 onClick={() => handleCategoryClick(category.id)}
// // // //                 className="w-full lg:w-1/3 cursor-pointer rounded-xl shadow-lg bg-white hover:bg-indigo-50 transition-all duration-300 border border-gray-200 p-6"
// // // //               >
// // // //                 <h3 className="text-xl font-semibold text-gray-800">{category.type}</h3>
// // // //                 <p className="text-sm text-gray-500 mt-1">{category.description}</p>

// // // //                 <ul className="mt-4 space-y-2">
// // // //                   {category.courses.slice(0, 3).map((course) => (
// // // //                     <li key={course.id} className="flex items-center gap-2 text-gray-700 text-sm">
// // // //                       <FiBookOpen className="text-indigo-500" />
// // // //                       {course.name}
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         ) : (
// // // //           // Expanded View
// // // //           <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 transition-all duration-300">
// // // //             {courseCategories
// // // //               .filter((cat) => cat.id === activeCategoryId)
// // // //               .map((category) => (
// // // //                 <div key={category.id}>
// // // //                   <div className="flex justify-between items-center mb-6">
// // // //                     <div>
// // // //                       <h3 className="text-2xl font-bold text-indigo-700">{category.type}</h3>
// // // //                       <p className="text-gray-600 text-sm mt-1">{category.description}</p>
// // // //                     </div>
// // // //                     <button
// // // //                       onClick={() => setActiveCategoryId(null)}
// // // //                       className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm hover:bg-indigo-700 transition"
// // // //                     >
// // // //                       Back
// // // //                     </button>
// // // //                   </div>

// // // //                   <ul className="space-y-4">
// // // //                     {category.courses.map((course) => (
// // // //                       <li key={course.id} className="flex items-center gap-3 text-gray-700">
// // // //                         <FiBookOpen className="text-indigo-500" />
// // // //                         <span>{course.name}</span>
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               ))}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ClassRoomCourses;



// // // import React, { useState } from "react";
// // // import { FiBookOpen } from "react-icons/fi";
// // // import { courseCategories } from "../../../data/courses";

// // // function CourseCategories() {
// // //   const [activeCategoryId, setActiveCategoryId] = useState(null);

// // //   const handleCategoryClick = (id) => {
// // //     setActiveCategoryId((prevId) => (prevId === id ? null : id));
// // //   };

// // //   const cardColors = [
// // //     { bg: "bg-[#FFF4E5]", hover: "hover:bg-[#FFE8C8]", text: "text-[#FF9B24]", iconBg: "bg-[#FF9B24]" },
// // //     { bg: "bg-[#E9F7FF]", hover: "hover:bg-[#C8E8FF]", text: "text-[#00B3FF]", iconBg: "bg-[#00B3FF]" },
// // //     { bg: "bg-[#FFF3F7]", hover: "hover:bg-[#FFD6E1]", text: "text-[#FF5E8B]", iconBg: "bg-[#FF5E8B]" },
// // //   ];

// // //   return (
// // //     <div className="bg-gray-50 py-16">
// // //       <div className="container mx-auto px-4">
// // //         {/* Header */}
// // //         <div className="text-center mb-12">
// // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // //             Explore Our <span className="text-indigo-600">Classroom Courses</span>
// // //           </h2>
// // //           <p className="text-gray-600 max-w-2xl mx-auto">
// // //             Choose from a variety of categories designed to guide your learning journey with expert-led content.
// // //           </p>
// // //         </div>

// // //         {/* Categories Section */}
// // //         {activeCategoryId === null ? (
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {courseCategories.map((category, index) => (
// // //               <div
// // //                 key={category.id}
// // //                 onClick={() => handleCategoryClick(category.id)}
// // //                 className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 ${cardColors[index % cardColors.length].bg} ${cardColors[index % cardColors.length].hover || ''}`}
// // //               >
// // //                 <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${cardColors[index % cardColors.length].iconBg}`}>
// // //                   <FiBookOpen className="text-white text-2xl" />
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.type}</h3>
// // //                 <p className="text-gray-600 text-base mb-6">{category.description}</p>
// // //                 <a
// // //                   href="#"
// // //                   className={`inline-block px-6 py-2 rounded-full text-white font-medium ${cardColors[index % cardColors.length].text}`}
// // //                 >
// // //                   {category.courses.length} Courses
// // //                 </a>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <div
// // //             className={`bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300 ${cardColors[
// // //               courseCategories.findIndex((cat) => cat.id === activeCategoryId) % cardColors.length
// // //             ].bg}`}
// // //           >
// // //             {courseCategories
// // //               .filter((cat) => cat.id === activeCategoryId)
// // //               .map((category) => (
// // //                 <div key={category.id}>
// // //                   <div className="flex justify-between items-center mb-6">
// // //                     <div>
// // //                       <h3 className="text-2xl font-bold text-gray-800">{category.type}</h3>
// // //                       <p className="text-gray-600 text-sm mt-1">{category.description}</p>
// // //                     </div>
// // //                     <button
// // //                       onClick={() => setActiveCategoryId(null)}
// // //                       className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
// // //                     >
// // //                       Back
// // //                     </button>
// // //                   </div>
// // //                   <ul className="space-y-4">
// // //                     {category.courses.map((course) => (
// // //                       <li
// // //                         key={course.id}
// // //                         className="flex items-center gap-3 text-gray-700"
// // //                       >
// // //                         <FiBookOpen
// // //                           className={`text-lg ${cardColors[
// // //                             courseCategories.findIndex((cat) => cat.id === activeCategoryId) %
// // //                               cardColors.length
// // //                           ].text}`}
// // //                         />
// // //                         <span className="text-base">{course.name}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default CourseCategories;


// // import React, { useState } from "react";
// // import { FiBookOpen } from "react-icons/fi";
// // import { courseCategories } from "../../../data/courses";

// // function ClassRoomCourses() {
// //   const [activeCategoryId, setActiveCategoryId] = useState(null);

// //   const handleCategoryClick = (id) => {
// //     setActiveCategoryId((prevId) => (prevId === id ? null : id));
// //   };

// //   const cardColors = [
// //     { bg: "bg-[#FFF4E5]", hover: "hover:bg-[#FFE8C8]", text: "text-[#FF9B24]", iconBg: "bg-[#FF9B24]" },
// //     { bg: "bg-[#E9F7FF]", hover: "hover:bg-[#C8E8FF]", text: "text-[#00B3FF]", iconBg: "bg-[#00B3FF]" },
// //     { bg: "bg-[#FFF3F7]", hover: "hover:bg-[#FFD6E1]", text: "text-[#FF5E8B]", iconBg: "bg-[#FF5E8B]" },
// //   ];

// //   return (
// //     <div className="bg-gray-50 py-16">
// //       <div className="container mx-auto px-4">
// //         {/* Header */}
// //         <div className="text-center mb-12">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">
// //             Explore Our <span className="text-indigo-600">Classroom Courses</span>
// //           </h2>
// //           <p className="text-gray-600 max-w-2xl mx-auto">
// //             Choose from a variety of categories designed to guide your learning journey with expert-led content.
// //           </p>
// //         </div>

// //         {/* Categories Section */}
// //         {activeCategoryId === null ? (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {courseCategories.map((category, index) => (
// //               <div
// //                 key={category.id}
// //                 onClick={() => handleCategoryClick(category.id)}
// //                 className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 ${cardColors[index % cardColors.length].bg} ${cardColors[index % cardColors.length].hover || ''} max-w-xs`}
// //               >
// //                 <div className="flex flex-col items-center">
// //                   <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${cardColors[index % cardColors.length].iconBg}`}>
// //                     <FiBookOpen className="text-white text-2xl" />
// //                   </div>
// //                   <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{category.type}</h3>
// //                 </div>
// //                 <p className="text-gray-600 text-base mb-6 text-center">{category.description}</p>
// //                 <div className={`inline-block px-4 py-2 rounded-full bg-${cardColors[index % cardColors.length].text.replace('text-', 'bg-')}-100 text-${cardColors[index % cardColors.length].text} text-center`}>
// //                   {category.courses.length} Courses
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <div
// //             className={`bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300 ${cardColors[
// //               courseCategories.findIndex((cat) => cat.id === activeCategoryId) % cardColors.length
// //             ].bg}`}
// //           >
// //             {courseCategories
// //               .filter((cat) => cat.id === activeCategoryId)
// //               .map((category) => (
// //                 <div key={category.id}>
// //                   <div className="flex justify-between items-center mb-6">
// //                     <div>
// //                       <h3 className="text-2xl font-bold text-gray-800">{category.type}</h3>
// //                       <p className="text-gray-600 text-sm mt-1">{category.description}</p>
// //                     </div>
// //                     <button
// //                       onClick={() => setActiveCategoryId(null)}
// //                       className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
// //                     >
// //                       Back
// //                     </button>
// //                   </div>
// //                   <ul className="space-y-4">
// //                     {category.courses.map((course) => (
// //                       <li
// //                         key={course.id}
// //                         className="flex items-center gap-3 text-gray-700"
// //                       >
// //                         <FiBookOpen
// //                           className={`text-lg ${cardColors[
// //                             courseCategories.findIndex((cat) => cat.id === activeCategoryId) %
// //                               cardColors.length
// //                           ].text}`}
// //                         />
// //                         <span className="text-base">{course.name}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ClassRoomCourses;

// import React from "react";
// import { FiCpu, FiPenTool, FiCode, FiActivity } from "react-icons/fi";

// const categories = [
//   {
//     title: "Online Degree Programs",
//     description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
//     icon: <FiCpu size={40} className="text-[#1ab69d]" />,
//     bg: "bg-[#e7f8f5]",
//     badgeBg: "bg-[#d6f5ee]",
//     badgeText: "text-[#1ab69d]",
//     courses: "15 Courses",
//   },
//   {
//     title: "Non-Degree Programs",
//     description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
//     icon: <FiPenTool size={40} className="text-[#ee4a62]" />,
//     bg: "bg-[#fff1f3]",
//     badgeBg: "bg-[#ffe6eb]",
//     badgeText: "text-[#ee4a62]",
//     courses: "8 Courses",
//   },
//   {
//     title: "Off-Campus Programs",
//     description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
//     icon: <FiCode size={40} className="text-[#6366f1]" />,
//     bg: "bg-[#f1f2ff]",
//     badgeBg: "bg-[#dedeff]",
//     badgeText: "text-[#6366f1]",
//     courses: "9 Courses",
//   },
//   {
//     title: "Hybrid Distance Programs",
//     description: "Lorem ipsum dolor consec tur elit adicing sed umod tempor.",
//     icon: <FiActivity size={40} className="text-[#f8941f]" />,
//     bg: "bg-[#fffaf1]",
//     badgeBg: "bg-[#ffeed6]",
//     badgeText: "text-[#f8941f]",
//     courses: "8 Courses",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className={`rounded-xl ${cat.bg} p-8 text-center transition-all duration-300 hover:shadow-md`}
//           >
//             <div className="flex items-center justify-center mb-6">
//               <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/50">
//                 {cat.icon}
//               </div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
//               {cat.title}
//             </h3>
//             <p className="text-sm text-gray-600 mb-6">{cat.description}</p>
//             <span
//               className={`inline-block rounded-md px-4 py-2 text-sm font-medium ${cat.badgeBg} ${cat.badgeText}`}
//             >
//               {cat.courses}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;

import React, { useState, useEffect } from "react";
import { FiCpu, FiPenTool, FiCode } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { courseCategories } from "../../../data/courses"; 
import BASE_URL from "../../../config/apiConfig";

const iconMap = {
  1: <FiCpu size={40} className="text-[#1ab69d]" />,
  2: <FiPenTool size={40} className="text-[#ee4a62]" />,
  3: <FiCode size={40} className="text-[#6366f1]" />,
};

const bgMap = {
  1: "bg-[#e7f8f5]",
  2: "bg-[#fff1f3]",
  3: "bg-[#f1f2ff]",
};

const badgeBgMap = {
  1: "bg-[#d6f5ee]",
  2: "bg-[#ffe6eb]",
  3: "bg-[#dedeff]",
};

const badgeTextMap = {
  1: "text-[#1ab69d]",
  2: "text-[#ee4a62]",
  3: "text-[#6366f1]",
};

const CourseCategoriesSection = () => {
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ 1: 0, 2: 0, 3: 0 });
  const [config, setConfig] = useState({
    heading: "Explore Our Classroom Courses",
    subheading: "Choose from a variety of categories designed to guide your learning journey.",
    items: []
  });

  useEffect(() => {
    fetchCounts();
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await fetch(`${BASE_URL}/section-config/ClassroomCourses`);
      if (response.ok) {
        const data = await response.json();
        setConfig({ 
            heading: data.heading, 
            subheading: data.subheading,
            items: data.items || []
        });
      }
    } catch (error) {
      console.log("Using default config for ClassroomCourses");
    }
  };

  const fetchCounts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/course`);
      if (response.ok) {
        const courses = await response.json();
        const newCounts = { 1: 0, 2: 0, 3: 0 };
        courses.forEach(course => {
          if (newCounts[course.categoryId] !== undefined) {
            newCounts[course.categoryId]++;
          }
        });
        setCounts(newCounts);
      }
    } catch (error) {
      console.error("Error fetching course counts:", error);
    }
  };

  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-white">
      {/* Dynamic Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {config.heading}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium">
          {config.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseCategories.map((cat) => {
          const dynamicItem = config.items.find(item => item.categoryId === cat.id);
          const displayDescription = dynamicItem?.description || cat.description;
          
          return (
            <div
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className={`rounded-xl ${bgMap[cat.id]} p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                  {iconMap[cat.id]}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-gray-800">
                {cat.type}
              </h3>
              <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed line-clamp-3">
                {displayDescription}
              </p>
              <span
                className={`inline-block rounded-lg px-6 py-2.5 text-xs font-black uppercase tracking-widest ${badgeBgMap[cat.id]} ${badgeTextMap[cat.id]} shadow-sm`}
              >
                {counts[cat.id]} Courses
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseCategoriesSection;
