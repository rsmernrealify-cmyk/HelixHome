import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SalientFeaturesPanel = () => {
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState({ title: "" });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await fetch(`${BASE_URL}/salient-feature`);
      if (response.ok) {
        const data = await response.json();
        setFeatures(data);
      }
    } catch (error) {
      console.error("Error fetching features:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newFeature.title || !imageFile) return alert("Title and Image are required");

    const formData = new FormData();
    formData.append("title", newFeature.title);
    formData.append("image", imageFile);

    try {
      const response = await fetch(`${BASE_URL}/salient-feature`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setNewFeature({ title: "" });
        setImageFile(null);
        fetchFeatures();
      }
    } catch (error) {
      console.error("Error adding feature:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const response = await fetch(`${BASE_URL}/salient-feature/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchFeatures();
      }
    } catch (error) {
      console.error("Error deleting feature:", error);
    }
  };

  if (loading) return <div className="p-10 text-center text-teal-600 font-bold">Loading Salient Features...</div>;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-3xl font-black mb-8 text-gray-800 border-b pb-4 uppercase tracking-tighter">Salient Features Management</h1>

      {/* Add Form */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 mb-10">
        <h2 className="text-xl font-bold text-teal-600 mb-6 flex items-center gap-3">
            <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
            Add New Feature
        </h2>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <label className="block text-sm font-black text-gray-500 uppercase mb-2">Feature Title</label>
            <input
              type="text"
              value={newFeature.title}
              onChange={(e) => setNewFeature({ ...newFeature, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              placeholder="e.g. Live Classes"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-gray-500 uppercase mb-2">Feature Icon/Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-teal-600 text-white font-black py-4 px-12 rounded-xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 uppercase tracking-widest text-xs"
            >
              Add Salient Feature
            </button>
          </div>
        </form>
      </div>

      {/* List Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {features.map((feature) => (
          <div key={feature._id} className="relative bg-white p-4 rounded-2xl shadow-md border border-gray-50 group hover:shadow-xl transition-all duration-500 text-center">
            <button
              onClick={() => handleDelete(feature._id)}
              className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full shadow-lg hover:bg-red-600 transition-all scale-0 group-hover:scale-100 z-10 flex items-center justify-center text-xs"
            >
              ✕
            </button>
            <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden p-2">
              <img
                src={feature.image}
                alt={feature.title}
                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-gray-800 text-xs leading-tight line-clamp-2">{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalientFeaturesPanel;
