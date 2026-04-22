import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SuccessStoriesPanel = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState({ title: "", youtubeLink: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await fetch(`${BASE_URL}/success-story`);
      if (response.ok) {
        const data = await response.json();
        setStories(data);
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newStory.title || !newStory.youtubeLink) return alert("All fields are required");

    try {
      const response = await fetch(`${BASE_URL}/success-story`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStory),
      });
      if (response.ok) {
        setNewStory({ title: "", youtubeLink: "" });
        fetchStories();
      }
    } catch (error) {
      console.error("Error adding story:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const response = await fetch(`${BASE_URL}/success-story/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchStories();
      }
    } catch (error) {
      console.error("Error deleting story:", error);
    }
  };

  // Helper to extract YouTube Video ID
  const getThumbnail = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "https://via.placeholder.com/320x180";
  };

  if (loading) return <div className="p-10 text-center">Loading Success Stories...</div>;

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4 uppercase tracking-tight">Manage Success Stories</h1>

      {/* Add Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10">
        <h2 className="text-xl font-bold text-teal-600 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-teal-500 rounded-full"></span>
            Add New Success Video
        </h2>
        <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">Video Title (Student Name/Rank)</label>
            <input
              type="text"
              value={newStory.title}
              onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              placeholder="e.g. Rahul Sharma - NEET Rank 45"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-600 mb-2">YouTube Link</label>
            <input
              type="text"
              value={newStory.youtubeLink}
              onChange={(e) => setNewStory({ ...newStory, youtubeLink: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              placeholder="e.g. https://www.youtube.com/watch?v=..."
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-teal-600 text-white font-bold py-3 px-10 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-100"
            >
              Add Success Story
            </button>
          </div>
        </form>
      </div>

      {/* List Stories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <div key={story._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative h-40 overflow-hidden">
              <img
                src={getThumbnail(story.youtubeLink)}
                alt={story.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <button
                onClick={() => handleDelete(story._id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-all scale-0 group-hover:scale-100"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 line-clamp-1">{story.title}</h3>
              <p className="text-xs text-blue-500 mt-1 truncate">{story.youtubeLink}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesPanel;
