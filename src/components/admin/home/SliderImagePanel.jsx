

// import React, { useState } from "react";

// const SliderImagePanel = () => {
//   const [images, setImages] = useState([]);

//   // Handle Image Upload
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file, index) => ({
//       file,
//       name: file.name, // Store image name
//       url: URL.createObjectURL(file),
//     }));

//     setImages([...images, ...newImages]);
//     e.target.value = ""; // Reset input field to remove last selected file name
//   };

//   // Delete Image
//   const handleDeleteImage = (index) => {
//     const filteredImages = images.filter((_, i) => i !== index);
//     setImages(filteredImages);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage Slider Images</h1>

//       {/* Upload Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Upload Images</h2>
//         <input
//           type="file"
//           multiple
//           onChange={handleImageUpload}
//           className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
//         />
//       </div>

//       {/* Preview Slider */}
//       {images.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold mb-4">Preview Slider</h2>
//           <div className="relative w-full overflow-hidden">
//             <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//               {images.map((image, index) => (
//                 <div key={index} className="relative w-64 h-48 flex-shrink-0 text-center">
//                   <img
//                     src={image.url}
//                     alt={`Slide ${index}`}
//                     className="w-full h-40 object-cover rounded-lg shadow-md"
//                   />
//                   <p className="mt-2 text-sm font-medium">{index + 1}. {image.name}</p>
//                   <button
//                     onClick={() => handleDeleteImage(index)}
//                     className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SliderImagePanel;

import React, { useState } from "react";

const SliderImagePanel = () => {
  const [images, setImages] = useState([]);
  const [saved, setSaved] = useState(false);

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file, index) => ({
      file,
      name: file.name, // Store image name
      url: URL.createObjectURL(file),
    }));

    setImages([...images, ...newImages]);
    e.target.value = ""; // Reset input field to remove last selected file name
  };

  // Save Images (Removes delete button on top, adds below each image)
  const handleSave = () => {
    setSaved(true);
  };

  // Delete Image
  const handleDeleteImage = (index) => {
    const filteredImages = images.filter((_, i) => i !== index);
    setImages(filteredImages);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Slider Images</h1>

      {/* Upload Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Upload Images</h2>
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
        />
      </div>

      {/* Save Button */}
      {images.length > 0 && !saved && (
        <button
          onClick={handleSave}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      )}

      {/* Preview Slider */}
      {images.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Preview Slider</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <div key={index} className="relative w-64 h-56 flex-shrink-0 text-center border-2 p-2 rounded-md">
                  <img
                    src={image.url}
                    alt={`Slide ${index}`}
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                  <p className="mt-2 text-sm font-medium">{index + 1}. {image.name}</p>

                  {/* Delete Button (After Save) */}
                  {saved && (
                    <button
                      onClick={() => handleDeleteImage(index)}
                      className="mt-2 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  )}

                  {/* Delete Icon (Before Save) */}
                  {!saved && (
                    <button
                      onClick={() => handleDeleteImage(index)}
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

export default SliderImagePanel;
