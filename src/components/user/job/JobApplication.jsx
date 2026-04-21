


// import React, { useState } from "react";

// const JobApplication = () => {
//   const [step, setStep] = useState(1); // Track the current step
//   const [loading, setLoading] = useState(false);

  
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//     location: "",
//     address: "",
//     level: [],
//     teachingSubjects: "",
//     resume: null,
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle checkbox change
//   const handleCheckboxChange = (e) => {
//     const { name, value, checked } = e.target;
//     setFormData((prev) => {
//       const updatedLevel = checked
//         ? [...prev.level, value]
//         : prev.level.filter((item) => item !== value);
//       return { ...prev, [name]: updatedLevel };
//     });
//   };

//   // Handle file upload
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   // Validate inputs for each step
//   const validateStep = () => {
//     if (step === 1) {
//       const { fullName, mobileNumber, email, location } = formData;
//       if (!fullName || !mobileNumber || !email || !location) {
//         alert("Please fill out all required fields in Step 1.");
//         return false;
//       }
//     } else if (step === 2) {
//       const { level, teachingSubjects } = formData;
//       if (level.length === 0 || !teachingSubjects) {
//         alert("Please fill out all required fields in Step 2.");
//         return false;
//       }
//     } else if (step === 3) {
//       const { resume } = formData;
//       if (!resume) {
//         alert("Please upload your CV in Step 3.");
//         return false;
//       }
//     }
//     return true;
//   };

//   // Navigate to the next step
//   const nextStep = () => {
//     if (validateStep()) {
//       setStep((prevStep) => prevStep + 1);
//     }
//   };

//   // Navigate to the previous step
//   const prevStep = () => setStep((prevStep) => prevStep - 1);

//   // Progress bar
//   const progressPercentage = (step / 3) * 100;

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
  
//     const formDataToSend = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key === "resume") {
//         formDataToSend.append(key, formData[key]);
//       } else if (key === "level") {
//         formData.level.forEach((level) => {
//           formDataToSend.append("level[]", level);
//         });
//       } else {
//         formDataToSend.append(key, formData[key]);
//       }
//     });
  
//     try {
//       const response = await fetch(
//         "https://p6lh6946-3000.inc1.devtunnels.ms/teacher/apply",
//         {
//           method: "POST",
//           body: formDataToSend,
//         }
//       );
  
//       if (response.ok) {
//         alert("Form submitted successfully!");
//       } else {
//         alert("Failed to submit the form.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again.");
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center py-8">
//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
//         {/* Progress Bar */}
//         <div className="relative w-full bg-gray-200 h-2 rounded mb-8">
//           <div
//             className="absolute top-0 left-0 h-2 bg-blue-500 rounded"
//             style={{ width: `${progressPercentage}%` }}
//           ></div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           {/* Step 1: Personal Details */}
//           {step === 1 && (
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">
//                 Step 1: Personal Details
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-600 font-medium mb-2">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600 font-medium mb-2">
//                     Mobile Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="mobileNumber"
//                     value={formData.mobileNumber}
//                     onChange={handleChange}
//                     placeholder="Enter your 10-digit mobile number"
//                     className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600 font-medium mb-2">
//                     Email ID <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-600 font-medium mb-2">
//                     Current Location <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     placeholder="Enter your location"
//                     className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mt-8 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Academics */}
//           {step === 2 && (
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">
//                 Step 2: Academics
//               </h2>
//               <div className="mb-4">
//                 <p className="text-gray-600 font-medium">Select Levels:</p>
//                 <div className="flex items-center gap-4 mt-3">
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="level"
//                       value="9th/10th Level"
//                       onChange={handleCheckboxChange}
//                       className="mr-2"
//                     />
//                     9th/10th Level
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="level"
//                       value="11th/12th Level Medical"
//                       onChange={handleCheckboxChange}
//                       className="mr-2"
//                     />
//                     11th/12th Level Medical
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       name="level"
//                       value="11th/12th Level JEE"
//                       onChange={handleCheckboxChange}
//                       className="mr-2"
//                     />
//                     11th/12th Level JEE
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-gray-600 font-medium mb-2">
//                   Teaching Subjects <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="teachingSubjects"
//                   value={formData.teachingSubjects}
//                   onChange={handleChange}
//                   placeholder="Enter teaching subjects, separated by commas"
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//               </div>
//               <div className="mt-8 flex justify-between">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="bg-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 transition"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Additional Information */}
//           {step === 3 && (
//             <div>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">
//                 Step 3: Additional Information
//               </h2>
//               <div>
//                 <label className="block text-gray-600 font-medium mb-2">
//                   Upload CV <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleFileChange}
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   required
//                 />
//               </div>
//               <div className="mt-8 flex justify-between">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="bg-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 transition"
//                 >
//                   Back
//                 </button>
//                 {/* <button
//                 onClick={handleSubmit}
//                   type="submit"
//                   className="bg-green-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition"
//                 >
//                   Submit
//                 </button> */}
//                  <button type="submit" className="btn-primary" disabled={loading}>
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobApplication;

import React, { useState } from "react";

const JobApplication = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    location: "",
    address: "",
    level: [],
    teachingSubjects: "",
    resume: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle checkbox change and maintain proper state
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      level: checked ? [...prev.level, value] : prev.level.filter((item) => item !== value),
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Validate inputs for each step
  const validateStep = () => {
    if (step === 1) {
      const { fullName, mobileNumber, email, location } = formData;
      if (!fullName || !mobileNumber || !email || !location) {
        alert("Please fill out all required fields in Step 1.");
        return false;
      }
    } else if (step === 2) {
      const { level, teachingSubjects } = formData;
      if (level.length === 0 || !teachingSubjects) {
        alert("Please fill out all required fields in Step 2.");
        return false;
      }
    } else if (step === 3) {
      if (!formData.resume) {
        alert("Please upload your CV in Step 3.");
        return false;
      }
    }
    return true;
  };

  // Navigate to the next step
  const nextStep = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  // Navigate to the previous step
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  // Progress bar percentage
  const progressPercentage = (step / 3) * 100;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "resume") {
        formDataToSend.append(key, formData[key]);
      } else if (key === "level") {
        formData[key].forEach((level) => {
          formDataToSend.append("level[]", level);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch("https://p6lh6946-3000.inc1.devtunnels.ms/teacher/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json(); // Read response properly

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        console.error("Submission error:", result);
        alert("Failed to submit the form: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Progress Bar */}
        <div className="relative w-full bg-gray-200 h-2 rounded mb-8">
          <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">Step 1: Personal Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["fullName", "mobileNumber", "email", "location"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-600 font-medium mb-2">
                      {field.replace(/([A-Z])/g, " $1").trim()} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field}`}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <button type="button" onClick={nextStep} className="btn-primary">Next</button>
              </div>
            </div>
          )}

          {/* Step 2: Academics */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">Step 2: Academics</h2>
              <div className="mb-4">
                <p className="text-gray-600 font-medium">Select Levels:</p>
                {["9th/10th Level", "11th/12th Level Medical", "11th/12th Level JEE"].map((level) => (
                  <label key={level} className="block">
                    <input type="checkbox" name="level" value={level} checked={formData.level.includes(level)} onChange={handleCheckboxChange} className="mr-2" />
                    {level}
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2">Teaching Subjects <span className="text-red-500">*</span></label>
                <input type="text" name="teachingSubjects" value={formData.teachingSubjects} onChange={handleChange} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" required />
              </div>
              <div className="mt-8 flex justify-between">
                <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
                <button type="button" onClick={nextStep} className="btn-primary">Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Upload CV */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">Step 3: Upload CV</h2>
              <input type="file" name="resume" onChange={handleFileChange} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400" required />
              <div className="mt-8 flex justify-between">
                <button type="button" onClick={prevStep} className="btn-secondary">Back</button>
                <button type="submit" className="btn-primary" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
