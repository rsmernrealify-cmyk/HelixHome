import React, { useState, useEffect } from "react";
import BASE_URL from "../../config/apiConfig";

function DirectorDeskEditForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: ["", "", "", "", "", ""],
    signature: "",
    image: "",
    features: ["Expert Faculty", "Personalized Mentorship", "Proven Track Record"]
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
              image: data.image,
              features: data.features && data.features.length > 0 ? data.features : ["Expert Faculty", "Personalized Mentorship", "Proven Track Record"]
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
    data.append("features", JSON.stringify(formData.features));
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
        <div className="container mx-auto max-w-4xl bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-4xl font-black text-gray-800 mb-10 border-b pb-6 uppercase tracking-tight">
             Edit Director's Desk
          </h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Title */}
            <div>
              <label className="block text-sm font-black text-gray-500 uppercase mb-3">Heading</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                placeholder="Enter title (e.g. A Message from Our Director)"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-black text-gray-500 uppercase mb-3">Message Content (Paragraphs)</label>
              <div className="space-y-4">
                {formData.content.map((paragraph, index) => (
                    <div key={index} className="relative group">
                        <textarea
                            name={`content-${index}`}
                            value={paragraph}
                            onChange={(e) => {
                                const newContent = [...formData.content];
                                newContent[index] = e.target.value;
                                setFormData((prevData) => ({ ...prevData, content: newContent }));
                            }}
                            className="w-full p-4 border border-gray-200 rounded-xl focus:bg-gray-50 transition-all outline-none"
                            rows="3"
                            placeholder={`Paragraph ${index + 1}`}
                        />
                        <button 
                            type="button" 
                            onClick={() => setFormData({...formData, content: formData.content.filter((_, i) => i !== index)})}
                            className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            ✕
                        </button>
                    </div>
                ))}
              </div>
              <button 
                type="button" 
                onClick={() => setFormData({...formData, content: [...formData.content, ""]})}
                className="mt-4 text-teal-600 font-bold hover:text-teal-700 flex items-center gap-2"
              >
                <span className="text-xl">+</span> Add Paragraph
              </button>
            </div>

            {/* Dynamic Features */}
            <div className="pt-6 border-t border-gray-100">
              <label className="block text-sm font-black text-gray-500 uppercase mb-4">Key Features / Bullet Points</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.features.map((feature, index) => (
                    <div key={index} className="flex gap-2">
                        <input
                            type="text"
                            value={feature}
                            onChange={(e) => {
                                const newFeatures = [...formData.features];
                                newFeatures[index] = e.target.value;
                                setFormData((prevData) => ({ ...prevData, features: newFeatures }));
                            }}
                            className="flex-grow p-3 border border-gray-200 rounded-xl focus:bg-teal-50/30 outline-none"
                            placeholder={`Feature ${index + 1}`}
                        />
                        <button 
                            type="button" 
                            onClick={() => setFormData({...formData, features: formData.features.filter((_, i) => i !== index)})}
                            className="text-red-400 hover:text-red-600 p-2"
                        >
                            ✕
                        </button>
                    </div>
                ))}
              </div>
              <button 
                type="button" 
                onClick={() => setFormData({...formData, features: [...formData.features, ""]})}
                className="mt-4 text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2"
              >
                <span className="text-xl">+</span> Add Feature Point
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-gray-100">
                {/* Signature */}
                <div>
                <label className="block text-sm font-black text-gray-500 uppercase mb-3">Signature / Name</label>
                <input
                    type="text"
                    name="signature"
                    value={formData.signature}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    placeholder="Name and Designation"
                />
                </div>

                {/* Image */}
                <div>
                <label className="block text-sm font-black text-gray-500 uppercase mb-3">Director's Image</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-4 border border-gray-200 rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                />
                {formData.image && (
                    <div className="mt-4 flex items-center gap-4">
                    <img
                        src={formData.image}
                        alt="Director"
                        className="w-20 h-20 object-cover rounded-2xl shadow-md"
                    />
                    <span className="text-xs text-gray-400">Current Image Preview</span>
                    </div>
                )}
                </div>
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
