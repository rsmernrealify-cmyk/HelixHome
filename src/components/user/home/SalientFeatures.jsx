// // // import React from "react";
// // // import SailentImage from "../../assets/sailent.jpg";

// // // const SalientFeatures = () => {
// // //   const features = [
// // //     { title: "Comprehensive Learning Materials", image: SailentImage },
   
// // //     { title: "Video Features", image: SailentImage },
// // //     { title: "Live Classes", image: SailentImage },
// // //     { title: "Digital Study Material", image: SailentImage },
// // //     { title: "Home Assignments", image: SailentImage },
// // //     { title: "Regular Tests Analysis", image: SailentImage },
// // //     { title: "Affordable Courses", image: SailentImage },
// // //     { title: "Doubt Resolving Sessions", image: SailentImage },
  
// // //   ];

// // //   return (
// // //     <div className="bg-gray-50 py-0">
// // //       {/* Flex Container for Left and Right Sections */}
// // //       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start max-w-6xl mx-auto px-4 gap-32">
// // //         {/* Left Section (Heading, Description, Button) */}
// // //         <div className="lg:w-1/2 text-center lg:text-left ">
// // //           <p className="text-blue-500 font-semibold text-lg uppercase tracking-wide">Our Expertise</p>
// // //           <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-2">
// // //             Salient Features of <span className="text-blue-500">Digital Online Courses</span>
// // //           </h2>
// // //           <p className="text-gray-500 mt-4 text-lg">
// // //             Digital online courses provide a flexible, engaging, and accessible way to learn new skills and enhance knowledge. 
// // //             Explore the features that make our courses an exceptional learning experience.
// // //           </p>
// // //           <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition">
// // //             Enroll Now →
// // //           </button>
// // //         </div>

// // //         {/* Right Section (Features Section) */}
// // //         <div className="lg:w-1/2 flex flex-wrap justify-start gap-6">
// // //           {features.map((feature, index) => (
// // //             <div
// // //               key={index}
// // //               className="flex items-center space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-full px-6 py-3 w-full sm:w-auto"
// // //             >
// // //               <img
// // //                 src={feature.image}
// // //                 alt={feature.title}
// // //                 className="w-14 h-14 object-cover rounded-full"
// // //               />
// // //               <p className="text-gray-800 font-medium text-lg">{feature.title}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SalientFeatures;



// // import React from "react";
// // import SailentImage from "../../../assets/sailent.jpg";

// // const SalientFeatures = () => {
// //   const features = [
// //     { title: "Regular Tests Analysis", image: SailentImage },
// //     { title: "Video Features", image: SailentImage },
// //     { title: "Live Classes", image: SailentImage },
// //     { title: "Digital Study Material", image: SailentImage },
// //     { title: "Home Assignments", image: SailentImage },
 
  
// //     { title: "Doubt Resolving Sessions", image: SailentImage },
// //   ];

// //   return (
// //     <div className="bg-gray-50 py-12">
// //       {/* Flex Container for Left and Right Sections */}
// //       <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start max-w-6xl mx-auto px-4 gap-32">
// //         {/* Left Section (Heading, Description, Button) */}
// //         <div className="lg:w-1/2 text-center lg:text-left">
// //           <p className="text-blue-500 font-semibold text-lg uppercase tracking-wide">
// //             Our Expertise
// //           </p>
// //           <h2 className="text-4xl font-bold text-gray-800 leading-tight mt-2">
// //             Salient Features of{" "}
// //             <span className="text-blue-500">Digital Online Courses</span>
// //           </h2>
// //           <p className="text-gray-500 mt-4 text-lg">
// //             Digital online courses provide a flexible, engaging, and accessible
// //             way to learn new skills and enhance knowledge. Explore the features
// //             that make our courses an exceptional learning experience.
// //           </p>
// //           <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition">
// //             Enroll Now →
// //           </button>
// //         </div>

// //         {/* Right Section (Features Section) */}
// //         <div className="lg:w-1/2 flex flex-wrap justify-center gap-6">
// //           {features.length === 1 ? (
// //             // Center Single Icon
// //             <div className="flex flex-col items-center">
// //               <div className="flex items-center justify-center bg-white shadow-md hover:shadow-lg transition rounded-full px-6 py-3">
// //                 <img
// //                   src={features[0].image}
// //                   alt={features[0].title}
// //                   className="w-14 h-14 object-cover rounded-full"
// //                 />
// //               </div>
// //               <p className="text-gray-800 font-medium text-lg mt-4">
// //                 {features[0].title}
// //               </p>
// //             </div>
// //           ) : (
// //             // Multiple Icons
// //             features.map((feature, index) => (
// //               <div
// //                 key={index}
// //                 className="flex items-center space-x-4 bg-white shadow-md hover:shadow-lg transition rounded-full px-6 py-3 w-full sm:w-auto"
// //               >
// //                 <img
// //                   src={feature.image}
// //                   alt={feature.title}
// //                   className="w-14 h-14 object-cover rounded-full"
// //                 />
// //                 <p className="text-gray-800 font-medium text-lg">
// //                   {feature.title}
// //                 </p>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SalientFeatures;


// import React from "react";
// import SailentImage from "../../../assets/sailent.jpg";
// import "../../../../src/scrollbar.css"; // Optional for hiding scroll

// const SalientFeatures = () => {
//   const features = [
//     { title: "Regular Tests Analysis", image: SailentImage },
//     { title: "Video Features", image: SailentImage },
//     { title: "Live Classes", image: SailentImage },
//     { title: "Digital Study Material", image: SailentImage },
//     { title: "Home Assignments", image: SailentImage },
//     { title: "Doubt Resolving Sessions", image: SailentImage },
//   ];

//   return (
//     <div className="bg-gray-50 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Salient Features of{" "}
//           <span className="text-blue-500">Digital Online Courses</span>
//         </h2>

//         <div className="overflow-x-auto scrollbar-hide">
//           <div className="flex gap-6 w-max">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 min-w-[220px] max-w-xs"
//               >
//                 <img
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-16 h-16 object-cover rounded-full mb-4"
//                 />
//                 <p className="text-center text-gray-800 font-medium text-lg">
//                   {feature.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalientFeatures;

import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SalientFeatures = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch(`${BASE_URL}/salient-feature`);
        if (response.ok) {
          const data = await response.json();
          setFeatures(data);
        }
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };
    fetchFeatures();
  }, []);

  if (features.length === 0) return null;

  return (
    <div className="w-full bg-[#fdfdfd] py-16 px-4 md:px-10 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight uppercase">
            Salient Features of <span className="text-teal-600">Digital Online Courses</span>
          </h2>
          <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Feature Boxes */}
        <div className="flex justify-center items-stretch gap-4 md:gap-8 flex-wrap lg:flex-nowrap overflow-x-auto pb-4 scrollbar-hide">
          {features.map((feature) => (
            <div
              key={feature._id}
              className="w-[160px] min-w-[150px] bg-white rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:shadow-orange-50 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center group cursor-default"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-500">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-extrabold text-gray-800 leading-snug uppercase tracking-tight h-10 flex items-center justify-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalientFeatures;
