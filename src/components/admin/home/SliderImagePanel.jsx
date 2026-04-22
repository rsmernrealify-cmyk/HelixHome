import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SliderImagePanel = () => {
  const [sliders, setSliders] = useState([]);
  const [newSlider, setNewSlider] = useState({
    title: "",
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  // Announcement State
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ text: "", link: "" });

  useEffect(() => {
    fetchSliders();
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(`${BASE_URL}/announcement`);
      if (response.ok) {
        const data = await response.json();
        setAnnouncements(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const addAnnouncement = async () => {
    if (!newAnnouncement.text) return alert("Text is required");
    try {
      const response = await fetch(`${BASE_URL}/announcement`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnnouncement),
      });
      if (response.ok) {
        setNewAnnouncement({ text: "", link: "" });
        fetchAnnouncements();
      }
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  };

  const deleteAnnouncement = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const response = await fetch(`${BASE_URL}/announcement/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchAnnouncements();
      }
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const fetchSliders = async () => {
    try {
      const response = await fetch(`${BASE_URL}/slider`);
      if (response.ok) {
        const data = await response.json();
        setSliders(Array.isArray(data) ? data : []);
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
    formData.append("image", newSlider.image);

    try {
      const response = await fetch(`${BASE_URL}/slider`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        fetchSliders();
        setNewSlider({ title: "", image: null });
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
      <h1 className="text-3xl font-bold mb-6 text-gray-800 uppercase tracking-tight">Manage Homepage Hero</h1>

      {/* Announcement Ticker Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-teal-500"></div>
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          Manage Scrolling Announcements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">New Ticker Text</label>
                <input
                    type="text"
                    value={newAnnouncement.text}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, text: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    placeholder="e.g. Admission Open for 2024-25 Session!"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Redirection Link (Optional)</label>
                <input
                    type="text"
                    value={newAnnouncement.link}
                    onChange={(e) => setNewAnnouncement({...newAnnouncement, link: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    placeholder="e.g. /scholarship-test"
                />
            </div>
        </div>
        <button
          onClick={addAnnouncement}
          className="bg-teal-600 text-white font-semibold py-2 px-8 rounded-lg hover:bg-teal-700 transition shadow-md"
        >
          Add to Ticker
        </button>

        <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Active Tickers</h3>
            <div className="space-y-3">
                {Array.isArray(announcements) && announcements.length === 0 && (
                  <p className="text-gray-400 text-sm italic">No announcements added yet.</p>
                )}
                {Array.isArray(announcements) && announcements.map((item) => (
                    <div key={item._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 group">
                        <div className="flex-grow">
                            <p className="font-medium text-gray-800">{item.text}</p>
                            <p className="text-xs text-blue-500 truncate max-w-md">{item.link}</p>
                        </div>
                        <button
                            onClick={() => deleteAnnouncement(item._id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition opacity-0 group-hover:opacity-100"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Add Slider Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Add Hero Slide Image</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slide Title / Alt Text</label>
              <input
                type="text"
                name="title"
                value={newSlider.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="e.g. NEET Preparation Slide"
              />
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700">
               <p className="font-bold mb-1">Note:</p>
               These images will appear at the top of your homepage hero section. 
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

      {/* List Sliders Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Current Hero Slides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(sliders) && sliders.map((slider) => (
            <div key={slider._id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={slider.image}
                  alt={slider.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <button
                  onClick={() => handleDeleteSlider(slider._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 flex-grow border-t">
                <h3 className="font-bold text-lg text-gray-800">{slider.title}</h3>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mt-1">Hero Slide</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderImagePanel;
