

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

import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SliderImagePanel = () => {
  const [sliders, setSliders] = useState([]);
  const [newSlider, setNewSlider] = useState({
    title: "",
    description: "",
    buttonText: "Apply Now",
    link: "/",
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const response = await fetch(`${BASE_URL}/slider`);
      if (response.ok) {
        const data = await response.json();
        setSliders(data);
      }
    } catch (error) {
      console.error("Error fetching sliders:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSlider({ ...newSlider, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewSlider({ ...newSlider, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleAddSlider = async () => {
    if (!newSlider.title || !newSlider.image) {
      alert("Title and Image are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", newSlider.title);
    formData.append("description", newSlider.description || "");
    formData.append("buttonText", newSlider.buttonText);
    formData.append("link", newSlider.link);
    formData.append("image", newSlider.image);

    try {
      const response = await fetch(`${BASE_URL}/slider`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        fetchSliders();
        setNewSlider({ title: "", description: "", buttonText: "Apply Now", link: "/", image: null });
        setPreviewImage(null);
      } else {
        alert("Error adding slider.");
      }
    } catch (error) {
      console.error("Error adding slider:", error);
    }
  };

  const handleDeleteSlider = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/slider/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchSliders();
      } else {
        alert("Error deleting slider.");
      }
    } catch (error) {
      console.error("Error deleting slider:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Hero Sliders</h1>

      {/* Add Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Add New Slide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={newSlider.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Slide Title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={newSlider.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Slide Description"
                rows="2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                <input
                  type="text"
                  name="buttonText"
                  value={newSlider.buttonText}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                <input
                  type="text"
                  name="link"
                  value={newSlider.link}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-4">
            <input
              type="file"
              onChange={handleImageUpload}
              className="hidden"
              id="slide-image-upload"
            />
            <label 
              htmlFor="slide-image-upload"
              className="cursor-pointer bg-blue-50 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-100 transition mb-4"
            >
              Choose Image
            </label>
            {previewImage && (
              <img src={previewImage} alt="Preview" className="w-full h-40 object-cover rounded-lg" />
            )}
          </div>
        </div>
        <button
          onClick={handleAddSlider}
          className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Slide
        </button>
      </div>

      {/* List Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Slides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sliders.map((slider) => (
            <div key={slider._id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col group">
              <div className="relative h-48">
                <img
                  src={slider.image}
                  alt={slider.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleDeleteSlider(slider._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="font-bold text-lg text-gray-800">{slider.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{slider.description}</p>
                <div className="mt-4 flex justify-between items-center text-xs font-medium text-blue-600">
                  <span>Btn: {slider.buttonText}</span>
                  <span>Path: {slider.link}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderImagePanel;
