// import React from "react";
// import directorImage from  "../../../assets/directorImage.jpg"

// function DirectorsDesk() {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Content Section */}
//       <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-gray-200">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
//           {/* Director's Image */}
//           <div className="col-span-1 rounded-lg shadow-lg overflow-hidden relative">
//             <img
//               src={directorImage} // Replace with actual image URL
//               alt="Director"
//               className="w-full h-full object-cover object-center transform hover:scale-105 transition-all duration-500"
//             />
//           </div>

//           {/* Director's Message */}
//           <div className="col-span-2 space-y-6">
//             <h2 className="text-4xl font-bold text-gray-800">
//               A Message from Our Director
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               This gives me immense happiness to announce that with wholehearted
//               co-operation of teaching and administrative staff, we have
//               successfully entered the Twelveth year under the banner of Helix
//               Institute.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Success in Medical Entrance Examinations, in face of a stiff and
//               cut-throat competition, calls for a planned approach and
//               cultivation of requisite skills. Developing such skills and
//               attitude not only requires dedication and hard work on the part of
//               students, but also proper guidance and training from mentor.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Addressing the above needs of students, we at preface, have
//               crafted the exclusive study material, expose them to highly
//               competitive environment, make them conceptually very strong, clear
//               their doubts in totality and make them comfortable while
//               attempting both competitive as well as Board examinations.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               Helix is a place where teaching staff, administrative staff and
//               parents work together to achieve prosperous and secure future in
//               academics for every student. Our students, the learners of today,
//               will be prepared well to face the highly competitive entrance
//               examinations.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               I am continuously making efforts to impart best education to
//               students and in years to come, probably I will be able to raise
//               standards of this institute up to the level that parents find it
//               easy to choose this institute as best option for their ward's
//               education among hub of institutes in this region.
//             </p>
//             <p className="text-gray-700 leading-relaxed">
//               We are proud of the success that our students have achieved in the
//               past. Finally I sum up by saying that our main objective is to
//               model this establishment as a center of excellence for the
//               students wishing to choose their career path in Medical fields.
//             </p>
//             <p className="text-gray-700 font-semibold">
//               M.L Syal <br /> Director, HELIX Institute
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default DirectorsDesk;

import React, { useState } from "react";
import directorImage from "../../../assets/directorImage.jpg"; // This will be dynamic in the future.

function DirectorsDesk() {
  const [directorData, setDirectorData] = useState({
    image: directorImage,
    message: {
      title: "A Message from Our Director",
      content: [
        "This gives me immense happiness to announce that with wholehearted co-operation of teaching and administrative staff, we have successfully entered the Twelveth year under the banner of Helix Institute.",
        "Success in Medical Entrance Examinations, in face of a stiff and cut-throat competition, calls for a planned approach and cultivation of requisite skills. Developing such skills and attitude not only requires dedication and hard work on the part of students, but also proper guidance and training from mentor.",
        "Addressing the above needs of students, we at preface, have crafted the exclusive study material, expose them to highly competitive environment, make them conceptually very strong, clear their doubts in totality and make them comfortable while attempting both competitive as well as Board examinations.",
        "Helix is a place where teaching staff, administrative staff and parents work together to achieve prosperous and secure future in academics for every student. Our students, the learners of today, will be prepared well to face the highly competitive entrance examinations.",
        "I am continuously making efforts to impart best education to students and in years to come, probably I will be able to raise standards of this institute up to the level that parents find it easy to choose this institute as best option for their ward's education among hub of institutes in this region.",
        "We are proud of the success that our students have achieved in the past. Finally I sum up by saying that our main objective is to model this establishment as a center of excellence for the students wishing to choose their career path in Medical fields."
      ],
      signature: "M.L Syal \n Director, HELIX Institute"
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Director's Image */}
          <div className="col-span-1 rounded-lg shadow-lg overflow-hidden relative">
            <img
              src={directorData.image}
              alt="Director"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* Director's Message */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              {directorData.message.title}
            </h2>
            {directorData.message.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-gray-700 font-semibold">
              {directorData.message.signature}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DirectorsDesk;
