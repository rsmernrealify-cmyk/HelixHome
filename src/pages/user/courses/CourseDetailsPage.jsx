// import React from "react";
// import { useParams } from "react-router-dom";
// import { courseCategories } from "../../../data/courses";

// function CourseDetailsPage() {
//  const { courseId, categoryId } = useParams(); // Extract both courseId and categoryId
//   const selectedCategory = courseCategories.find(
//     (category) => category.id === parseInt(categoryId)
//   );


// //    // Find the course within the selected category
//   const selectedCourse = selectedCategory?.courses.find(
//     (course) => course.id === parseInt(courseId)
//   );

//   if (!selectedCourse) {
//     return <p>Course not found</p>; // Handle case if course is not found
//   }



//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 py-8">
//         <h2 className="text-4xl font-bold text-gray-800">{selectedCourse.name}</h2>
//         <p className="text-gray-600 text-lg mt-4">{selectedCourse.description}</p>

//       </div>
//     </div>
//   );
// }

// export default CourseDetailsPage;

// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import { courseCategories } from "../data/courses";

// // function CourseDetailsPage() {
// //   const { courseId, categoryId } = useParams(); // Extract both courseId and categoryId
// //   const selectedCategory = courseCategories.find(
// //     (category) => category.id === parseInt(categoryId)
// //   );

// //   // Find the course within the selected category
// //   const selectedCourse = selectedCategory?.courses.find(
// //     (course) => course.id === parseInt(courseId)
// //   );

// //   if (!selectedCourse) {
// //     return <p>Course not found</p>; // Handle case if course is not found
// //   }

// //   return (
// //     <div>
// //       <h2>{selectedCourse.name}</h2>
// //       <p>{selectedCourse.description}</p>
// //     </div>
// //   );
// // }

// // export default CourseDetailsPage;



// import React from 'react'
// // import bgImage from '../assets/courseTopBg.png'

// const CourseDetailsPage = () => {
//   const scholarshipEligibilityRules = [
//     '8th class marks in Science and Maths after declaration of result.',
//     'Concessions based on HSAT: Helix offers huge scholarships to students through Helix Scholarship test which is conducted in the month of November, December, February, and March end. Scholarships are awarded based on the rank secured in Helix Scholarship Test.',
//     'Early-bird concessions will be given to the students who get themselves registered in the month of October.',
//   ]
//   const discountRules=[
//     'There are discounts for wards of Teachers or words of Defence personal. For more details kindly contact HELIX office.',
//     'Any scholarship or discount will be applied only after presenting original supporting documents and a self attested copy of same to be submitted in the office.'
//   ]
//   const onlineRegistrationSteps=[
//     'Click on the button given below “ENROL NOW”.',
//     'Fill up your details as asked in the application form.',
//     'After filling form, proceed to pay online using Credit card, Debit Card, Net Banking.'

//   ]
//   const offlineRegistrationSteps=[
//     'Download and print application form by clicking link below. Paste passport size photograph on the form.',
//     'Fill up your details.',
//     'Enter cheque / DD / Payment Reference no / UPI Reference no in the form.',
//     'Submit form in the office OR send us a picture of the form on whatsapp mobile no. 8559012012, 8556003939, 9988806090 or send it by post.'

//   ]
//   return (
//     <main className="bg-gradient-to-br from-green-100 to-teal-100">
//       <section className="top-section bg-gradient-to-r from-teal-950 to-teal-700 text-white">
//       <div
//   className="py-5 px-16 bg-center bg-no-repeat bg-cover"
//   // style={{ backgroundImage: url(${bgImage}) }}
// >
//         <h1 className="course-name text-4xl font-bold my-1">
//           9th Class Foundation Course (HEC-4 2024)
//         </h1>
//         <h2 className="duration text-xl my-1 font-medium">
//           Starts On 01 Feb 2025 | Ends On 31 Dec 2025
//         </h2>
//         <h2 className="text-lg">
//           <b>Eligibility: </b>8 Passed/Appeared
//         </h2>
//         <h2 className="text-lg">
//           <b>Mode of Classes: </b>Offline & Online
//         </h2>
//         <div className="fee-buttons flex gap-5 py-3">
//           <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-2 px-4 rounded">
//             Fee Details
//           </button>
//           <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-2 px-4 rounded">
//             Pay Online
//           </button>
//         </div>
//         </div>
//       </section>
//       <section className="details px-5 py-10 flex flex-col gap-8">
//         <div className="description bg-gradient-to-r from-teal-200 to-green-200 py-4 px-8 rounded-lg border-teal-500 border-2">
//           <h1 className="heading text-3xl font-bold">Description</h1>
//           <p className="content py-2 text-[1.1rem] font-normal">
//             This course is specially designed to create strong foundation of
//             concepts to face challenges going to appear in front of students in
//             different competitive examinations like NEET and JEE. During first
//             year in 9th class, syllabus of Science, Maths & Mental Ability will
//             be covered. Classes of Physics, Chemistry, Botany, Zoology, Maths
//             and Mental Ability will be conducted as per schedule provided to the
//             students. Syllabus will be completed by the end of October. After
//             completion of the syllabus, revision will be conducted to strengthen
//             the concepts of students and subjective tests will be conducted for
//             preparation of school examinations. Revision will be completed by
//             the end of December. Students will rejoin the institute next year on
//             15th April and 10th class syllabus on similar pattern will be
//             completed by end of October followed by revision. September break
//             will be given to students for their mid-term examinations. Classes
//             will be held in offline as well online mode. Classes will be held 3
//             days a week. Class timings will be after the school time i.e. 4.30pm
//             to 8.10pm. Specially designed study material covering subjective as
//             well as objective part will be provided to the students. NCERT is
//             thoroughly covered in our teaching and study material. For every
//             chapter, specially designed tests will be conducted and result of
//             the same will be sent to parents on their registered mobile numbers.
//           </p>
//         </div>
//         <div className="scholarship-eligibility bg-gradient-to-r from-teal-200 to-green-200 py-4 px-8 rounded-lg border-teal-500 border-2">
//           <h1 className="heading text-3xl font-bold">
//             Scholarship Or Discounts
//           </h1>
//           <div className="scholarship-rules my-4">
//             <h2 className="secondary-heading text-xl font-bold my-2">
//               Scholarships will be awarded to students on the basis of:
//             </h2>
//             <ol className="list-none space-y-2">
//               {scholarshipEligibilityRules.map((item, index) => (
//                 <li key={index} className="text-[1.1rem]">
//                   <span className="font-bold">{index + 1}</span>
//                   {`. `}
//                   {item}
//                 </li>
//               ))}
//             </ol>
//           </div>
//           <div className="discount-rules my-4">
//           <h2 className="secondary-heading text-xl font-bold my-2">
//               Discounts for the Students:
//             </h2>
//             <ol className="list-none space-y-2">
//               {discountRules.map((item, index) => (
//                 <li key={index} className="text-[1.1rem]">
//                   <span className="font-bold">{index + 1}</span>
//                   {`. `}
//                   {item}
//                 </li>
//               ))}
//             </ol>
//           </div>
//           <h2 className="text-lg font-semibold"><i>For more details about scholarship, contact Helix office numbers mentioned on the website.</i></h2>
//         </div>
//         <div className="registration-process bg-gradient-to-r from-teal-200 to-green-200 py-4 px-8 rounded-lg border-teal-500 border-2">
//           <h1 className="heading text-3xl font-bold">
//             How to Register?
//           </h1>
//           <div className="online-registration my-4">
//             <h2 className="secondary-heading text-xl font-bold my-2">
//               Online Mode
//             </h2>
//             <ol className="list-none space-y-2">
//               {onlineRegistrationSteps.map((item, index) => (
//                 <li key={index} className="text-[1.1rem]">
//                   <span className="font-bold">⇨ </span>
//                   {item}
//                 </li>
//               ))}
//             </ol>
//             <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-2 px-4 rounded my-4">
//             Enroll Now
//           </button>
//           </div>
//           <div className="offline-registration my-4">
//           <h2 className="secondary-heading text-xl font-bold my-2">
//               Offline Mode
//             </h2>
//             <ol className="list-none space-y-2">
//             {offlineRegistrationSteps.map((item, index) => (
//                 <li key={index} className="text-[1.1rem]">
//                   <span className="font-bold">⇨ </span>
//                   {item}
//                 </li>
//               ))}
//             </ol>
//           </div>
//           <button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 text-white font-bold py-2 px-4 rounded">
//             Download Form
//           </button>
//         </div>
//       </section>
//     </main>
//   )
// }
// export default CourseDetailsPage;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FiCalendar, FiUser, FiMapPin, FiClock, FiCheckCircle, FiInfo, FiCreditCard } from "react-icons/fi";
import BASE_URL from "../../../config/apiConfig";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/course/${courseId}`);
        if (response.ok) {
          const data = await response.json();
          setCourse(data);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };
    window.scrollTo(0, 0);
    fetchCourseDetails();
  }, [courseId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600"></div>
        <p className="mt-4 text-gray-500 font-bold animate-pulse uppercase tracking-widest text-xs">Loading Course Intelligence...</p>
      </div>
    </div>
  );

  if (!course) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-6xl mb-6">🔍</div>
      <h2 className="text-3xl font-black text-gray-800">Resource Unavailable</h2>
      <p className="text-gray-500 mt-2 text-center max-w-md">The academic profile you are looking for has been archived or moved by the administration.</p>
      <Link to="/" className="mt-8 bg-teal-600 text-white font-bold py-3 px-10 rounded-full shadow-lg">Return Home</Link>
    </div>
  );

  return (
    <main className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Dynamic Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={course.image || "https://images.unsplash.com/photo-1523050335102-c325090ea232?auto=format&fit=crop&q=80"} 
            className="w-full h-full object-cover"
            alt={course.name}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-white max-w-7xl">
          <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 backdrop-blur-md rounded-full border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                Official Academic Stream
             </div>
             <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                {course.name}
             </h1>
             
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><FiCalendar className="text-teal-400" size={20}/></div>
                   <div>
                      <p className="text-xs text-teal-200 uppercase font-black opacity-60">Commences</p>
                      <p className="font-bold text-sm">{course.startDates || "April 2026"}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><FiClock className="text-teal-400" size={20}/></div>
                   <div>
                      <p className="text-xs text-teal-200 uppercase font-black opacity-60">Cycle</p>
                      <p className="font-bold text-sm">{course.duration || "2 Years"}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><FiUser className="text-teal-400" size={20}/></div>
                   <div>
                      <p className="text-xs text-teal-200 uppercase font-black opacity-60">Eligible</p>
                      <p className="font-bold text-sm whitespace-nowrap">{course.eligible || "10th Appeared"}</p>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><FiMapPin className="text-teal-400" size={20}/></div>
                   <div>
                      <p className="text-xs text-teal-200 uppercase font-black opacity-60">Format</p>
                      <p className="font-bold text-sm">{course.mode || "Classroom"}</p>
                   </div>
                </div>
             </div>

             <div className="flex flex-wrap gap-4">
                <Link to="/pay-online" className="bg-teal-500 hover:bg-teal-400 text-white font-black py-4 px-10 rounded-2xl shadow-2xl shadow-teal-900/40 transition-all flex items-center gap-3 active:scale-95">
                   <FiCreditCard size={20}/>
                   ENROL NOW
                </Link>
                <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl font-black">
                   Fees: <span className="text-teal-300 ml-1">{course.price}</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="container mx-auto px-6 md:px-12 -mt-16 relative z-20 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Detailed Content (Left Column) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Descriptive Content */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                     <FiInfo size={24}/>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Course Description</h2>
               </div>
               
               <div className="prose prose-slate max-w-none">
                  {course.longDescription ? (
                    <div className="text-slate-600 text-lg leading-relaxed space-y-6 whitespace-pre-line font-medium">
                       {course.longDescription}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-lg italic">Details for this specific program are being finalized by the academic board.</p>
                  )}
               </div>
            </div>

            {/* Admission & Scholarship Detail Block */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl shadow-slate-900/20">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-teal-400">
                     <FiCheckCircle size={24}/>
                  </div>
                  <h2 className="text-3xl font-black tracking-tight">Scholarships & Discounts</h2>
               </div>

               <div className="space-y-6">
                  {course.scholarshipDetails ? (
                    <div className="text-slate-200 text-lg leading-relaxed whitespace-pre-line font-medium opacity-90">
                       {course.scholarshipDetails}
                    </div>
                  ) : (
                    <p className="text-slate-400 italic">Detailed scholarship information is available on request at the Helix office.</p>
                  )}
               </div>

               <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-teal-400 text-sm font-black uppercase tracking-[0.2em] mb-4">Note for Applicants</p>
                  <p className="text-slate-200 text-md font-medium leading-relaxed italic">
                    "For scholarship entry, students must participate in any one of the helix tests conducted across the academic window (Oct, Jan, March). Scholarship tiers are strictly based on Merit scores."
                  </p>
               </div>
            </div>

            {/* Registration Process Block */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-slate-200/50 border border-slate-100">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                     <FiCheckCircle size={24}/>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">How to Register</h2>
               </div>

               <div className="grid md:grid-cols-2 gap-10">
                  {/* Online Mode */}
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-teal-700 bg-teal-50 px-4 py-2 rounded-xl inline-block">Online Mode</h3>
                     {course.registrationStepsOnline ? (
                        <div className="text-slate-600 text-md leading-relaxed whitespace-pre-line font-medium">
                           {course.registrationStepsOnline}
                        </div>
                     ) : (
                        <p className="text-slate-400 italic text-sm">Online steps coming soon.</p>
                     )}
                  </div>

                  {/* Offline Mode */}
                  <div className="space-y-4">
                     <h3 className="text-xl font-bold text-purple-700 bg-purple-50 px-4 py-2 rounded-xl inline-block">Offline Mode</h3>
                     {course.registrationStepsOffline ? (
                        <div className="text-slate-600 text-md leading-relaxed whitespace-pre-line font-medium mb-6">
                           {course.registrationStepsOffline}
                        </div>
                     ) : (
                        <p className="text-slate-400 italic text-sm mb-6">Offline steps coming soon.</p>
                     )}
                     {course.formLink && (
                        <a 
                           href={course.formLink} 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center justify-center gap-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-4 rounded-2xl shadow-lg transition-all"
                        >
                           <FiInfo size={18}/>
                           DOWNLOAD FORM
                        </a>
                     )}
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar / Quick Actions (Right Column) */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-50">
               <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
                  Quick Summary
               </h3>
               <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                     <span className="text-slate-400 text-sm font-bold uppercase">Intensity</span>
                     <span className="text-slate-900 font-black">{course.intensity || "Full-Time"}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                     <span className="text-slate-400 text-sm font-bold uppercase">Instructor</span>
                     <span className="text-slate-900 font-black">{course.instructor || "Helix Team"}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-50">
                     <span className="text-slate-400 text-sm font-bold uppercase">Modules</span>
                     <span className="text-slate-900 font-black">{course.modulesCount || "Verified Curriculum"}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                     <span className="text-slate-400 text-sm font-bold uppercase">Popularity</span>
                     <span className="text-teal-600 font-black">{course.popularityRanking || "Top Listed"}</span>
                  </div>
               </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-teal-600 rounded-[2rem] p-8 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
               <h3 className="text-2xl font-black mb-4 relative z-10">Need Guidance?</h3>
               <p className="text-teal-50 text-md mb-8 relative z-10 opacity-80 leading-relaxed font-medium">
                  Not sure if this course matches your academic goals? Speak with our counsellors today.
               </p>
               <Link to="/contact-us" className="inline-block w-full text-center bg-white text-teal-700 font-black py-4 rounded-2xl relative z-10 shadow-xl shadow-teal-950/20 active:scale-95 transition-transform">
                  TALK TO COUNSELLOR
               </Link>
            </div>

            {/* Fees Highlights */}
            <div className="bg-slate-100/50 rounded-[2rem] p-8 border border-white">
               <h3 className="text-lg font-black text-slate-700 mb-4 tracking-tight">Investment Details</h3>
               <p className="text-5xl font-black text-slate-900 mb-2">{course.price}</p>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">Standard Academic Fee</p>
               <Link to="/pay-installment" className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                  Pay in Installments
                  <FiArrowRight />
               </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

const FiArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

export default CourseDetailsPage;


