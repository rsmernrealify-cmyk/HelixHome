import React, { useState, useEffect } from "react";
import BASE_URL from "../../config/apiConfig";

function DirectorDeskEditForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: ["", "", "", "", "", ""],
    signature: "",
    image: ""
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchDirectorDesk = async () => {
      try {
        const response = await fetch(`${BASE_URL}/director-desk`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.title) {
            setFormData({
              title: data.title,
              content: data.content || ["", "", "", "", "", ""],
              signature: data.signature,
              image: data.image
            });
          }
        }
      } catch (error) {
        console.error("Error fetching Director's Desk:", error);
      }
    };
    fetchDirectorDesk();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", JSON.stringify(formData.content));
    data.append("signature", formData.signature);
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      const response = await fetch(`${BASE_URL}/director-desk`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Director's Desk updated successfully!");
      } else {
        alert("Failed to update Director's Desk.");
      }
    } catch (error) {
      console.error("Error updating Director's Desk:", error);
      alert("Error updating Director's Desk.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Edit Director's Desk
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter title (e.g. A Message from Our Director)"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Message Content</label>
              {formData.content.map((paragraph, index) => (
                <textarea
                  key={index}
                  name={`content-${index}`}
                  value={paragraph}
                  onChange={(e) => {
                    const newContent = [...formData.content];
                    newContent[index] = e.target.value;
                    setFormData((prevData) => ({ ...prevData, content: newContent }));
                  }}
                  className="w-full p-2 border rounded mb-4"
                  rows="4"
                  placeholder={`Paragraph ${index + 1}`}
                />
              ))}
              <button 
                type="button" 
                onClick={() => setFormData({...formData, content: [...formData.content, ""]})}
                className="mt-2 text-teal-600 font-medium hover:underline"
              >
                + Add Paragraph
              </button>
            </div>

            {/* Signature */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Signature</label>
              <input
                type="text"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Name and Designation"
              />
            </div>

            {/* Image */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Director's Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded"
              />
              {formData.image && (
                <div className="mt-4">
                  <img
                    src={formData.image}
                    alt="Director"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600 transition"
            >
              Update Director's Desk
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default DirectorDeskEditForm;
