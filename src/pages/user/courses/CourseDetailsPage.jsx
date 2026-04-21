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


import React from 'react';

const CourseDetailsPage = () => {
  const scholarshipEligibilityRules = [
    '8th class marks in Science and Maths after declaration of result.',
    'Concessions based on HSAT: Helix offers huge scholarships to students through Helix Scholarship Test.',
    'Early-bird concessions will be given to students who register in October.',
  ];

  const discountRules = [
    'Discounts for wards of Teachers or Defence personnel. Contact HELIX office for details.',
    'Scholarships/discounts apply only after presenting original supporting documents.',
  ];

  const onlineRegistrationSteps = [
    'Click on “ENROL NOW” below.',
    'Fill in the required details in the application form.',
    'Proceed to pay online using Credit/Debit Card or Net Banking.',
  ];

  const offlineRegistrationSteps = [
    'Download and print the application form.',
    'Attach a passport-size photograph and fill in the details carefully.',
    'Submit the form in the office or send a scanned copy via WhatsApp or post.',
  ];

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white py-16 px-8 md:px-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">9th Class Foundation Course</h1>
        <p className="text-xl mt-4 opacity-80">Starts: 01 Feb 2025 | Ends: 31 Dec 2025</p>
        <p className="text-lg mt-1 opacity-70">Eligibility: 8th Passed/Appeared | Mode: Offline & Online</p>

        <div className="mt-8 flex justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
            Fee Details
          </button>
          <button className="bg-green-600 hover:bg-green-700 transition-all text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
            Pay Online
          </button>
        </div>

        {/* Subtle Background Element */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?education,technology)' }} />
      </section>

      {/* Course Details */}
      <section className="py-16 px-6 md:px-20 grid gap-12">
        {/* Course Description */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-3xl font-bold text-gray-800">Course Overview</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            This course is meticulously designed to build a strong foundation for competitive exams like NEET and JEE. 
            The curriculum covers Science, Mathematics, and Mental Ability, ensuring a solid conceptual base. Classes are held 
            thrice a week after school hours (4:30 PM - 8:10 PM) in both offline and online modes. 
            Our study material is structured to cover both subjective and objective aspects, with dedicated revision sessions and assessments.
          </p>
        </div>

        {/* Scholarships & Discounts */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
          <h2 className="text-3xl font-bold text-gray-800">Scholarships & Discounts</h2>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-blue-700">Scholarship Eligibility:</h3>
            <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
              {scholarshipEligibilityRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-green-700">Discounts Available:</h3>
            <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
              {discountRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>

          <p className="mt-6 italic text-gray-600">
            For detailed scholarship information, contact Helix office numbers listed on the website.
          </p>
        </div>

        {/* Registration Process */}
        <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600">
          <h2 className="text-3xl font-bold text-gray-800">Registration Process</h2>

          {/* Online Registration */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-blue-700">Online Registration</h3>
            <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
              {onlineRegistrationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 px-6 rounded-lg shadow-lg mt-4">
              Enroll Now
            </button>
          </div>

          {/* Offline Registration */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-green-700">Offline Registration</h3>
            <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
              {offlineRegistrationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-3 px-6 rounded-lg shadow-lg mt-6">
            Download Form
          </button>
        </div>
      </section>
    </main>
  );
};

export default CourseDetailsPage;
