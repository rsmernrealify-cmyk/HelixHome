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

import React from "react";
import SailentImage from "../../../assets/sailent.jpg";

const SalientFeatures = () => {
  const features = [
    { title: "Regular Tests Analysis", image: SailentImage },
    { title: "Video Features", image: SailentImage },
    { title: "Live Classes", image: SailentImage },
    { title: "Digital Study Material", image: SailentImage },
    { title: "Home Assignments", image: SailentImage },
    { title: "Doubt Resolving Sessions", image: SailentImage },
  ];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Salient Features of{" "}
          <span className="text-blue-600">Digital Online Courses</span>
        </h2>

        {/* Feature Boxes: perfect row, equal spacing */}
        <div className="flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[140px] h-[140px] bg-gray-100 rounded-lg shadow hover:shadow-md transition-all flex flex-col items-center justify-center px-3 text-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-10 h-10 object-cover rounded-full mb-3"
              />
              <p className="text-sm font-semibold text-gray-700 leading-tight">
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
