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


import React, { useState } from "react";

const SyllabusUploadPanel = () => {
  const [pdfs, setPdfs] = useState([]);
  const [saved, setSaved] = useState(false);
  const [descriptions, setDescriptions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle PDF Upload
  const handlePdfUpload = async (e) => {
    const files = Array.from(e.target.files);
    setLoading(true);
    setError("");

    const newPdfs = [];
    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("https://p6lh6946-3000.inc1.devtunnels.ms/file/syllabus", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("File upload failed");
        }

        const result = await response.json();
        newPdfs.push({
          file,
          name: file.name, // Store PDF name
          url: result.fileUrl, // Assuming the API responds with a file URL
        });
      } catch (error) {
        setError("Error uploading the file. Please try again.");
        break;
      }
    }

    setPdfs([...pdfs, ...newPdfs]);
    setLoading(false);
    e.target.value = ""; // Reset input field to remove last selected file name
  };

  // Handle PDF Description Input
  const handleDescriptionChange = (index, description) => {
    setDescriptions({
      ...descriptions,
      [index]: description,
    });
  };

  // Save PDFs
  const handleSave = () => {
    setSaved(true);
  };

  // Delete PDF
  const handleDeletePdf = (index) => {
    const filteredPdfs = pdfs.filter((_, i) => i !== index);
    setPdfs(filteredPdfs);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Syllabus</h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Upload PDFs</h2>
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handlePdfUpload}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        />
        {loading && <p className="mt-4 text-blue-500">Uploading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Save Button */}
      {pdfs.length > 0 && !saved && (
        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      )}

      {/* Preview PDFs */}
      {pdfs.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Preview PDFs</h2>
          <div className="relative w-full">
            <div className="space-y-4">
              {pdfs.map((pdf, index) => (
                <div key={index} className="border-2 p-4 rounded-md shadow-md">
                  <p className="text-lg font-medium">{index + 1}. {pdf.name}</p>

                  {/* Description Input */}
                  <input
                    type="text"
                    placeholder="Enter Description"
                    value={descriptions[index] || ""}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  />

                  {/* Preview PDF (Links) */}
                  <div className="mt-2">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      Preview PDF
                    </a>
                  </div>

                  {/* Delete Button (After Save) */}
                  {saved && (
                    <button
                      onClick={() => handleDeletePdf(index)}
                      className="mt-2 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  )}

                  {/* Delete Icon (Before Save) */}
                  {!saved && (
                    <button
                      onClick={() => handleDeletePdf(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SyllabusUploadPanel;
