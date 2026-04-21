// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import directorImage from "../../assets/directorImage.jpg";

// // function DirectorsDeskPreview() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="bg-gray-50 py-16 px-6 md:px-20">
// //       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
// //         {/* Director's Image */}
// //         <div className="rounded-lg shadow-lg overflow-hidden">
// //           <img
// //             src={directorImage}
// //             alt="Director"
// //             className="w-full h-full object-cover object-center transform hover:scale-105 transition-all duration-500"
// //           />
// //         </div>

// //         {/* Director's Message Preview */}
// //         <div className="space-y-6">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
// //             A Message from Our Director
// //           </h2>
// //           <p className="text-gray-700 leading-relaxed line-clamp-5">
// //             This gives me immense happiness to announce that with wholehearted
// //             co-operation of teaching and administrative staff, we have
// //             successfully entered the Twelveth year under the banner of Helix
// //             Institute. Success in Medical Entrance Examinations, in face of a
// //             stiff and cut-throat competition, calls for a planned approach and
// //             cultivation of requisite skills.
// //           </p>

// //           {/* Read More Button */}
// //           <button
// //             onClick={() => navigate("/director-desk")}
// //             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md font-medium transition-all"
// //           >
// //             Read More
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DirectorsDeskPreview;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import directorImage from "../../../assets/directorImage.jpg";

// function DirectorsDeskPreview() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50  px-4 md:px-16">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
//         {/* Director's Image */}
//         <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500">
//           <img
//             src={directorImage}
//             alt="Director"
//             className="w-full h-full object-cover object-center"
//           />
//         </div>

//         {/* Director's Message Preview */}
//         <div className="space-y-4 md:space-y-6">
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
//             A Message from Our Director
//           </h2>
//           <p className="text-gray-700 leading-relaxed line-clamp-4">
//             This gives me immense happiness to announce that with wholehearted
//             co-operation of teaching and administrative staff, we have
//             successfully entered the Twelveth year under the banner of Helix
//             Institute. Success in Medical Entrance Examinations, in face of a
//             stiff and cut-throat competition, calls for a planned approach and
//             cultivation of requisite skills.
//           </p>

//           {/* Read More Button */}
//           <button
//             onClick={() => navigate("/director-desk")}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full shadow-lg font-medium transition-all transform hover:scale-105"
//           >
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DirectorsDeskPreview;

import React from "react";
import directorImage from "../../../assets/directorImage.jpg";

export default function DirectorDeskPreview() {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-4 py-8">
      {/* Left visual/content block */}
      <div className="relative bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col items-center max-w-sm w-full md:w-[400px]">
        <img
          src={directorImage}
          alt="Student using laptop"
          className="w-full aspect-square object-cover rounded-xl"
        />
        {/* Ray Sanchez Card */}
        <div className="absolute -bottom-8 left-4 bg-white rounded-xl shadow-md flex items-center gap-4 px-4 py-3 w-[85%]">
          <div className="w-10 h-10 bg-yellow-100 flex items-center justify-center rounded-full">
            <svg width="28" height="28" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" stroke="#fbbf24" strokeWidth="4" fill="none" /></svg>
          </div>
          <div>
            <span className="block font-bold text-gray-800 text-base">M.L Syal </span>
            <span className="block text-gray-400 text-xs mt-1">Minim veniam nostrud exer citation.</span>
          </div>
        </div>
        {/* Learners badge */}
        <div className="absolute -top-6 left-4 bg-white rounded-xl shadow-md flex items-center gap-3 px-5 py-2 border border-[#f2f5fa]">
          <span className="inline-flex items-center justify-center w-7 h-7 bg-pink-100 rounded-full text-pink-600">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 10a3 3 0 100-6 3 3 0 000 6zM10 12c-3.25 0-6 1.21-6 3.25V17h12v-1.75C16 13.21 13.25 12 10 12z" fill="#ec4899"/></svg>
          </span>
          <div>
            <span className="text-pink-600 font-bold text-xl">20K+</span>
            <span className="block text-gray-500 text-sm -mt-0.5">Enrolled Learners</span>
          </div>
        </div>
      </div>
      {/* Right TEXT block */}
      <div className="flex flex-col justify-center w-full max-w-3xl md:pl-12 mt-20 md:mt-0">
        <span className="uppercase tracking-widest text-xs text-gray-500 font-medium mb-2">About Us</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
          Over 10 Years in <span className="text-pink-500">Distant learning</span> for Skill Development
        </h1>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-2 text-gray-900 font-medium">
            <span className="text-yellow-400 font-bold">&#10003;</span>
            Expert Trainers
          </li>
          <li className="flex items-center gap-2 text-gray-900 font-medium">
            <span className="text-yellow-400 font-bold">&#10003;</span>
            Online Remote Learning
          </li>
          <li className="flex items-center gap-2 text-gray-900 font-medium">
            <span className="text-yellow-400 font-bold">&#10003;</span>
            Lifetime Access
          </li>
        </ul>
      </div>
    </div>
  );
}
