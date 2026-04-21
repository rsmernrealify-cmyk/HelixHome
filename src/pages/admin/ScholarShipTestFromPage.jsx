// import React, { useState } from "react";

// const ScholarshipTestFormPage= () => {
//   const [formData, setFormData] = useState({
//     centerName: "",
//     forClass: "",
//     stream: "",
//     examDate: "",
//     examFees: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       await addDoc(collection(db, "scholarshipTests"), {
//         centerName: formData.centerName,
//         forClass: formData.forClass,
//         stream: formData.stream,
//         examDate: formData.examDate,
//         examFees: Number(formData.examFees),
//       });

//       setMessage("Scholarship test added successfully!");
//       setFormData({
//         centerName: "",
//         forClass: "",
//         stream: "",
//         examDate: "",
//         examFees: "",
//       });
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       setMessage("Failed to add test. Try again!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-4 text-teal-500">Add Scholarship Test</h2>

//       {message && <p className="text-center text-green-500">{message}</p>}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="centerName"
//           placeholder="Center Name"
//           value={formData.centerName}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <select
//           name="forClass"
//           value={formData.forClass}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select Class</option>
//           <option value="11th Medical">11th Medical</option>
//           <option value="12th Medical">12th Medical</option>
//           <option value="11th Non-Medical">11th Non-Medical</option>
//           <option value="12th Non-Medical">12th Non-Medical</option>
//         </select>

//         <select
//           name="stream"
//           value={formData.stream}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value="">Select Stream</option>
//           <option value="Medical">Medical</option>
//           <option value="Non-Medical">Non-Medical</option>
//         </select>

//         <input
//           type="datetime-local"
//           name="examDate"
//           value={formData.examDate}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           type="number"
//           name="examFees"
//           placeholder="Exam Fees"
//           value={formData.examFees}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
//           disabled={loading}
//         >
//           {loading ? "Adding..." : "Add Scholarship Test"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ScholarshipTestFormPage;

import React, { useState } from "react";

const ScholarshipTestFormPage = () => {
  const [formData, setFormData] = useState({
    centerName: "",
    forClass: "",
    stream: "",
    examDate: "",
    examFees: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Simulating form submission success
    setTimeout(() => {
      setLoading(false);
      setMessage("Scholarship test added successfully!");
      setFormData({
        centerName: "",
        forClass: "",
        stream: "",
        examDate: "",
        examFees: "",
      });
    }, 1500); // Simulate delay of form submission

    // If there was an error, you can use:
    // setMessage("Failed to add test. Try again!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-teal-500">
        Add Scholarship Test
      </h2>

      {message && (
        <p className={`text-center ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="centerName"
          placeholder="Center Name"
          value={formData.centerName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="forClass"
          value={formData.forClass}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Class</option>
          <option value="11th Medical">11th Medical</option>
          <option value="12th Medical">12th Medical</option>
          <option value="11th Non-Medical">11th Non-Medical</option>
          <option value="12th Non-Medical">12th Non-Medical</option>
        </select>

        <select
          name="stream"
          value={formData.stream}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Stream</option>
          <option value="Medical">Medical</option>
          <option value="Non-Medical">Non-Medical</option>
        </select>

        <input
          type="datetime-local"
          name="examDate"
          value={formData.examDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          name="examFees"
          placeholder="Exam Fees"
          value={formData.examFees}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Scholarship Test"}
        </button>
      </form>
    </div>
  );
};

export default ScholarshipTestFormPage;
