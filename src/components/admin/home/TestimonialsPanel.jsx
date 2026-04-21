

// import React, { useState } from "react";

// const TestimonialsPanel = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [newTestimonial, setNewTestimonial] = useState({
//     name: "",
//     role: "",
//     description: "",
//     title: "",
//     image: null,
//   });
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);

//   // Handle Input Change
//   const handleInputChange = (e) => {
//     setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
//   };

//   // Handle Image Upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewTestimonial({ ...newTestimonial, image: file });
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   // Add or Edit Testimonial (Submit Form to Backend)
//   const handleSaveTestimonial = async () => {
//     const formData = new FormData();
//     formData.append("name", newTestimonial.name);
//     formData.append("role", newTestimonial.role);
//     formData.append("description", newTestimonial.description);
//     formData.append("title", newTestimonial.title);
//     if (newTestimonial.image) {
//       formData.append("image", newTestimonial.image);
//     }

//     const apiUrl = "https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonial";

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const newTestimonialData = await response.json();
//         if (editingIndex !== null) {
//           let updatedTestimonials = [...testimonials];
//           updatedTestimonials[editingIndex] = newTestimonialData;
//           setTestimonials(updatedTestimonials);
//         } else {
//           setTestimonials([...testimonials, newTestimonialData]);
//         }

//         // Reset form after submission
//         setNewTestimonial({
//           name: "",
//           role: "",
//           description: "",
//           title: "",
//           image: null,
//         });
//         setPreviewImage(null);
//         setEditingIndex(null);
//       } else {
//         alert("Error uploading testimonial.");
//       }
//     } catch (error) {
//       console.error("Error submitting testimonial:", error);
//       alert("Error uploading testimonial.");
//     }
//   };

//   // Edit Testimonial
//   const handleEditTestimonial = (index) => {
//     setNewTestimonial(testimonials[index]);
//     setPreviewImage(testimonials[index].image ? testimonials[index].image : null);
//     setEditingIndex(index);
//   };

//   // Delete Testimonial
//   const handleDeleteTestimonial = async (index) => {
//     const testimonialToDelete = testimonials[index];

//     try {
//       const response = await fetch(`https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonial/${testimonialToDelete.id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         const filteredTestimonials = testimonials.filter((_, i) => i !== index);
//         setTestimonials(filteredTestimonials);
//       } else {
//         alert("Error deleting testimonial.");
//       }
//     } catch (error) {
//       console.error("Error deleting testimonial:", error);
//       alert("Error deleting testimonial.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Manage Testimonials</h1>

//       {/* Form to Add/Edit Testimonial */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">{editingIndex !== null ? "Edit" : "Add"} Testimonial</h2>
//         <div className="mb-4">
//           <label className="block text-lg font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={newTestimonial.name}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-3"
//             placeholder="Enter name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium">Role</label>
//           <input
//             type="text"
//             name="role"
//             value={newTestimonial.role}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-3"
//             placeholder="Enter role"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={newTestimonial.title}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-3"
//             placeholder="Enter title"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium">Description</label>
//           <textarea
//             name="description"
//             value={newTestimonial.description}
//             onChange={handleInputChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-3"
//             placeholder="Enter description"
//             rows="3"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-lg font-medium">Upload Image</label>
//           <input type="file" onChange={handleImageUpload} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
//           {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-md" />}
//         </div>
//         <div className="flex space-x-4">
//           <button onClick={handleSaveTestimonial} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
//             {editingIndex !== null ? "Update" : "Add"} Testimonial
//           </button>
//           {editingIndex !== null && (
//             <button onClick={() => setEditingIndex(null)} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">
//               Cancel
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Display Testimonials */}
//       {testimonials.length > 0 && (
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold mb-4">Testimonials List</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//                 {testimonial.image && (
//                   <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full mb-4" />
//                 )}
//                 <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                 <p className="text-gray-600">{testimonial.role}</p>
//                 <p className="text-sm text-gray-500 mt-2">{testimonial.description}</p>
//                 <div className="mt-4 flex space-x-3">
//                   <button onClick={() => handleEditTestimonial(index)} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
//                     Edit
//                   </button>
//                   <button onClick={() => handleDeleteTestimonial(index)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestimonialsPanel;

import React, { useState, useEffect } from "react";

const TestimonialsPanel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    description: "",
    title: "",
    image: null,
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Fetch testimonials from the backend when the component loads
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonials");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched testimonials:", data); // Log the fetched testimonials
          setTestimonials(data);
        } else {
          console.error("Failed to fetch testimonials");
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewTestimonial({ ...newTestimonial, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  // Add or Edit Testimonial (Submit Form to Backend using PUT)
  const handleSaveTestimonial = async () => {
    const formData = new FormData();
    formData.append("name", newTestimonial.name);
    formData.append("role", newTestimonial.role);
    formData.append("description", newTestimonial.description);
    formData.append("title", newTestimonial.title);
    if (newTestimonial.image) {
      formData.append("image", newTestimonial.image);
    }

    const apiUrl = editingIndex !== null
      ? `https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonial/${testimonials[editingIndex]._id}`
      : "https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonial"; // For new testimonial

    try {
      const response = await fetch(apiUrl, {
        method: editingIndex !== null ? "PUT" : "POST", // PUT if editing, POST if adding
        body: formData,
      });

      if (response.ok) {
        const newTestimonialData = await response.json();

        // Fetch the updated testimonials list after adding or editing
        const updatedTestimonialsResponse = await fetch("https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonial");
        if (updatedTestimonialsResponse.ok) {
          const updatedTestimonialsData = await updatedTestimonialsResponse.json();
          setTestimonials(updatedTestimonialsData);
        }

        // Reset form after submission
        setNewTestimonial({
          name: "",
          role: "",
          description: "",
          title: "",
          image: null,
        });
        setPreviewImage(null);
        setEditingIndex(null);
      } else {
        alert("Error uploading testimonial.");
      }
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      alert("Error uploading testimonial.");
    }
  };

  // Edit Testimonial
  const handleEditTestimonial = (index) => {
    setNewTestimonial(testimonials[index]);
    setPreviewImage(testimonials[index].image ? testimonials[index].image : null);
    setEditingIndex(index);
  };

  // Show Testimonial Details (When "Fetch Testimonial" is clicked)
  const handleFetchTestimonial = async (id) => {
    try {
      const response = await fetch(`https://p6lh6946-3000.inc1.devtunnels.ms/testimonial/testimonials`);
      if (response.ok) {
        const data = await response.json();
        // Display the fetched data in the UI
        alert(`Testimonial fetched: ${data.name}`);
      } else {
        alert("Error fetching testimonial");
      }
    } catch (error) {
      console.error("Error fetching testimonial:", error);
      alert("Error fetching testimonial");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Testimonials</h1>

      {/* Form to Add/Edit Testimonial */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{editingIndex !== null ? "Edit" : "Add"} Testimonial</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Role</label>
          <input
            type="text"
            name="role"
            value={newTestimonial.role}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter role"
          />
        </div>
        <div className="mb-4">qnp
          <label className="block text-lg font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={newTestimonial.title}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Description</label>
          <textarea
            name="description"
            value={newTestimonial.description}
            onChange={handleInputChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            placeholder="Enter description"
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium">Upload Image</label>
          <input type="file" onChange={handleImageUpload} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
          {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded-md" />}
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleSaveTestimonial}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            {editingIndex !== null ? "Update" : "Add"} Testimonial
          </button>
          {editingIndex !== null && (
            <button onClick={() => setEditingIndex(null)} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600">
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Display Testimonials */}
      {testimonials.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Testimonials List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                {testimonial.image && (
                  <img
                    src={testimonial.image} // This should work correctly now with the proper URL from the API response
                    alt={testimonial.name}
                    className="w-24 h-24 object-cover rounded-full mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-gray-500 mt-2">{testimonial.description}</p>
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => handleEditTestimonial(index)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleFetchTestimonial(testimonial._id)} // Use _id for fetching individual testimonial
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Fetch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPanel;
