// import React, { useState } from "react";

// const SyllabusUploadPanel = () => {
//   const [pdfs, setPdfs] = useState([]);
//   const [saved, setSaved] = useState(false);
//   const [descriptions, setDescriptions] = useState({});

//   // Handle PDF Upload
//   const handlePdfUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newPdfs = files.map((file, index) => ({
//       file,
//       name: file.name, // Store PDF name
//       url: URL.createObjectURL(file),
//     }));

//     setPdfs([...pdfs, ...newPdfs]);
//     e.target.value = ""; // Reset input field to remove last selected file name
//   };

//   // Handle PDF Description Input
//   const handleDescriptionChange = (index, description) => {
//     setDescriptions({
//       ...descriptions,
//       [index]: description,
//     });
//   };

//   // Save PDFs (Removes delete button on top, adds below each PDF)
//   const handleSave = () => {
//     setSaved(true);
//   };

//   // Delete PDF
//   const handleDeletePdf = (index) => {
//     const filteredPdfs = pdfs.filter((_, i) => i !== index);
//     setPdfs(filteredPdfs);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage Syllabus</h1>

//       {/* Upload Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Upload PDFs</h2>
//         <input
//           type="file"
//           multiple
//           accept=".pdf"
//           onChange={handlePdfUpload}
//           className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
//         />
//       </div>

//       {/* Save Button */}
//       {pdfs.length > 0 && !saved && (
//         <button
//           onClick={handleSave}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Save
//         </button>
//       )}

//       {/* Preview PDFs */}
//       {pdfs.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold mb-4">Preview PDFs</h2>
//           <div className="relative w-full">
//             <div className="space-y-4">
//               {pdfs.map((pdf, index) => (
//                 <div key={index} className="border-2 p-4 rounded-md shadow-md">
//                   <p className="text-lg font-medium">{index + 1}. {pdf.name}</p>

//                   {/* Description Input */}
//                   <input
//                     type="text"
//                     placeholder="Enter Description"
//                     value={descriptions[index] || ""}
//                     onChange={(e) =>
//                       handleDescriptionChange(index, e.target.value)
//                     }
//                     className="mt-2 w-full p-2 border border-gray-300 rounded-md"
//                   />

//                   {/* Preview PDF (Links) */}
//                   <div className="mt-2">
//                     <a
//                       href={pdf.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500"
//                     >
//                       Preview PDF
//                     </a>
//                   </div>

//                   {/* Delete Button (After Save) */}
//                   {saved && (
//                     <button
//                       onClick={() => handleDeletePdf(index)}
//                       className="mt-2 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   )}

//                   {/* Delete Icon (Before Save) */}
//                   {!saved && (
//                     <button
//                       onClick={() => handleDeletePdf(index)}
//                       className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
//                     >
//                       ✕
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SyllabusUploadPanel;


import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SyllabusUploadPanel = () => {
  const [syllabusList, setSyllabusList] = useState([]);
  const [newSyllabus, setNewSyllabus] = useState({
    title: "",
    category: "NEET",
    file: null
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSyllabus();
  }, []);

  const fetchSyllabus = async () => {
    try {
      const response = await fetch(`${BASE_URL}/syllabus`);
      if (response.ok) {
        const data = await response.json();
        setSyllabusList(data);
      }
    } catch (error) {
      console.error("Error fetching syllabus:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSyllabus({ ...newSyllabus, [name]: value });
  };

  const handleFileUpload = (e) => {
    setNewSyllabus({ ...newSyllabus, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newSyllabus.file || !newSyllabus.title) {
      alert("Title and File are required.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", newSyllabus.title);
    formData.append("category", newSyllabus.category);
    formData.append("file", newSyllabus.file);

    try {
      const response = await fetch(`${BASE_URL}/syllabus`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Syllabus uploaded!");
        fetchSyllabus();
        setNewSyllabus({ title: "", category: "NEET", file: null });
        e.target.reset();
      }
    } catch (error) {
      console.error("Error uploading syllabus:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const response = await fetch(`${BASE_URL}/syllabus/${id}`, { method: "DELETE" });
        if (response.ok) fetchSyllabus();
      } catch (error) {
        console.error("Error deleting syllabus:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Manage Syllabus Downloads</h1>

      {/* Upload Form */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-10">
        <h2 className="text-xl font-bold mb-6 text-gray-700">Upload New Syllabus</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={newSyllabus.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g. NEET 2025 Syllabus"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
              <select
                name="category"
                value={newSyllabus.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
                <option value="FOUNDATION">FOUNDATION</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">PDF File</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-white transition ${loading ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700 shadow-md"}`}
          >
            {loading ? "Uploading..." : "Upload Syllabus"}
          </button>
        </form>
      </div>

      {/* List Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold mb-6 text-gray-700">Uploaded Syllabus</h2>
        <div className="space-y-3">
          {syllabusList.length === 0 && <p className="text-gray-400 text-center py-8">No syllabus uploaded yet.</p>}
          {syllabusList.map((item) => (
            <div key={item._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 group">
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full uppercase">{item.category}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 text-sm font-medium text-teal-600 hover:bg-teal-50 rounded-lg transition"
                >
                  View
                </a>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition opacity-0 group-hover:opacity-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusUploadPanel;
