// // import React from "react";

// // function SuccessStories() {
// //   const stories = [
// //     {
// //       id: 1,
// //       date: "27 Apr",
// //       title: "Rahul From BPL Family Will Now Become An Engineer",
// //       excerpt: "Along with education, Kota also gives courage to struggle. The result of this courage and hard work is Rahul’s success...",
// //       imageUrl: "https://myexam.allen.in/wp-content/uploads/2023/04/rahul-allen-success-story.jpg",
// //       link: "#",
// //     },
// //     {
// //       id: 2,
// //       date: "29 Apr",
// //       title: "Success Mantra of JEE‑Main 2023 Toppers",
// //       excerpt: "Three Students of ALLEN in Top‑5 AIR Ranks; Students share their success tips and routines...",
// //       imageUrl: "https://myexam.allen.in/wp-content/uploads/2023/04/jee-topper-success-story.jpg",
// //       link: "#",
// //     },
// //     {
// //       id: 3,
// //       date: "30 Apr",
// //       title: "Journey from Small Town to NEET Topper",
// //       excerpt: "With limited resources and great determination, Meena cracked NEET UG 2023 with a Top 50 AIR...",
// //       imageUrl: "https://myexam.allen.in/wp-content/uploads/2023/04/neet-topper.jpg",
// //       link: "#",
// //     },
// //     {
// //       id: 4,
// //       date: "01 May",
// //       title: "How Shivam Cracked JEE Advanced Without Coaching",
// //       excerpt: "Self-discipline and online resources helped Shivam achieve his dream without formal coaching...",
// //       imageUrl: "https://myexam.allen.in/wp-content/uploads/2023/04/shivam-jee-advanced.jpg",
// //       link: "#",
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto px-4 py-10">
// //       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
// //         ALLEN Success Stories
// //       </h1>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {stories.map((story) => (
// //           <div
// //             key={story.id}
// //             className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:shadow-lg"
// //           >
// //             <img
// //               src={story.imageUrl}
// //               alt={story.title}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-5 flex-grow">
// //               <span className="text-xs text-gray-500">{story.date}</span>
// //               <h2 className="text-xl font-semibold text-gray-800 mt-2">
// //                 {story.title}
// //               </h2>
// //               <p className="text-sm text-gray-600 mt-2">{story.excerpt}</p>
// //             </div>
// //             <div className="px-5 pb-5">
// //               <a
// //                 href={story.link}
// //                 className="inline-block mt-2 text-indigo-600 text-sm font-medium hover:underline"
// //               >
// //                 Read More →
// //               </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Pagination */}
// //       <div className="flex justify-center mt-10 space-x-2">
// //         <button className="px-4 py-2 bg-indigo-600 text-white rounded">1</button>
// //         <button className="px-4 py-2 border text-indigo-600 rounded hover:bg-indigo-50">
// //           2
// //         </button>
// //         <button className="px-4 py-2 border text-indigo-600 rounded hover:bg-indigo-50">
// //           3
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SuccessStories;


// import React from "react";
// import { FaPlay } from "react-icons/fa";
// import "../../../../src/scrollbar.css"; // Optional for hiding scrollbar

// const stories = [
//   {
//     id: 1,
//     image: "https://i.ytimg.com/vi/WXYZ123/hqdefault.jpg",
//     title: "No shortcuts! From AIR 27,249 to AIR 1,341",
//   },
//   {
//     id: 2,
//     image: "https://i.ytimg.com/vi/WXYZ456/hqdefault.jpg",
//     title: "From Bankura to a Govt. Medical College",
//   },
//   {
//     id: 3,
//     image: "https://i.ytimg.com/vi/WXYZ789/hqdefault.jpg",
//     title: "AIR 29284 Then. AIR 2095 Now. My Comeback Story",
//   },
//   {
//     id: 4,
//     image: "https://i.ytimg.com/vi/WXYZ101/hqdefault.jpg",
//     title: "Laser sharp focus led him to success",
//   },
//   {
//     id: 5,
//     image: "https://i.ytimg.com/vi/WXYZ102/hqdefault.jpg",
//     title: "Debater. Flute player. IITian. He did it all!",
//   },
// ];

// function SuccessStoriesSlider() {
//   return (
//     <div className="w-full bg-white py-10 px-4 md:px-10">
//       <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
//         {/* Left Side Heading */}
//         <div className="min-w-[200px] flex-shrink-0">
//           <div className="flex items-center gap-2 mb-2">
//             <div className="bg-red-600 w-6 h-6 rounded-md flex items-center justify-center">
//               <FaPlay className="text-white text-xs" />
//             </div>
//             <div className="w-1 h-4 bg-gray-400" />
//           </div>
//           <h2 className="text-xl font-bold text-gray-900">Success Stories</h2>
//           <p className="text-sm text-gray-500 mt-1">Students who inspire us !</p>
//         </div>

//         {/* Horizontal Scrollable Cards */}
//         <div className="overflow-x-auto flex gap-4 scrollbar-hide pb-4 w-full">
//           {stories.map((story) => (
//             <div
//               key={story.id}
//               className="relative w-56 min-w-[224px] h-72 rounded-xl overflow-hidden flex-shrink-0 bg-black group"
//             >
//               <img
//                 src={story.image}
//                 alt={story.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition"
//               />
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

//               {/* Play Button */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white p-3 rounded-full">
//                   <FaPlay className="text-blue-600 text-sm" />
//                 </div>
//               </div>

//               {/* Title */}
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h3 className="text-white text-sm font-semibold leading-snug">{story.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuccessStoriesSlider;


import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import "../../../../src/scrollbar.css";
import BASE_URL from "../../../config/apiConfig";

function SuccessStoriesSlider() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/success-story`);
        if (response.ok) {
          const data = await response.json();
          setStories(data);
        }
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchStories();
  }, []);

  // Helper to extract YouTube Video ID
  const getThumbnail = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    // Using hqdefault for better quality
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "https://via.placeholder.com/320x180";
  };

  if (!stories.length) return null;

  return (
    <div className="w-full bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Left Side Heading */}
          <div className="min-w-[200px] flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-red-600 w-6 h-6 rounded-md flex items-center justify-center shadow-lg shadow-red-100">
                <FaPlay className="text-white text-[10px]" />
              </div>
              <div className="w-1 h-4 bg-gray-300" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Success Stories</h2>
            <p className="text-sm font-medium text-gray-500 mt-1">Students who inspire us !</p>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="overflow-x-auto flex gap-5 scrollbar-hide pb-4 w-full px-2">
            {stories.map((story) => (
              <a
                key={story._id}
                href={story.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-48 min-w-[200px] h-64 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-900 group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={getThumbnail(story.youtubeLink)}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                    <FaPlay className="text-red-600 text-lg ml-1" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-5 left-4 right-4">
                   <div className="bg-red-600 w-8 h-1 rounded-full mb-3 group-hover:w-16 transition-all duration-500"></div>
                  <h3 className="text-white text-sm font-bold leading-tight line-clamp-2 group-hover:text-red-100">
                    {story.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStoriesSlider;
