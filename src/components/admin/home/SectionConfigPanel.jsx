import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const SectionConfigPanel = () => {
  const [sections, setSections] = useState({
    ClassroomCourses: { 
        heading: "Explore Our Classroom Courses", 
        subheading: "Choose from a variety of categories designed to guide your learning journey.",
        items: [
            { categoryId: 1, title: "Medical (NEET)", description: "" },
            { categoryId: 2, title: "Engineering (JEE)", description: "" },
            { categoryId: 3, title: "Foundations", description: "" }
        ]
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConfigs();
  }, []);

  const fetchConfigs = async () => {
    setLoading(true);
    try {
      const sectionNames = ["ClassroomCourses"];
      const newSections = { ...sections };
      
      for (const name of sectionNames) {
        const response = await fetch(`${BASE_URL}/section-config/${name}`);
        if (response.ok) {
          const data = await response.json();
          newSections[name] = { 
              heading: data.heading, 
              subheading: data.subheading,
              items: data.items && data.items.length > 0 ? data.items : sections[name].items
          };
        }
      }
      setSections(newSections);
    } catch (error) {
      console.error("Error fetching configs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (sectionName) => {
    try {
      const response = await fetch(`${BASE_URL}/section-config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sectionName,
          ...sections[sectionName]
        }),
      });
      if (response.ok) {
        alert(`${sectionName} updated successfully!`);
      } else {
        alert("Error updating section.");
      }
    } catch (error) {
      console.error("Error updating config:", error);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading section configurations...</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4 uppercase tracking-tight">Homepage Content Management</h1>

      {Object.keys(sections).map((name) => (
        <div key={name} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-xl font-bold text-teal-600 mb-8 flex items-center gap-3">
             <span className="w-2 h-8 bg-teal-500 rounded-full"></span>
             {name.replace(/([A-Z])/g, ' $1').trim()} Section Header
          </h2>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
                <div>
                <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Main Heading</label>
                <input
                    type="text"
                    value={sections[name].heading}
                    onChange={(e) => setSections({
                    ...sections,
                    [name]: { ...sections[name], heading: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                />
                </div>
                <div>
                <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-wide">Main Subheading</label>
                <textarea
                    value={sections[name].subheading}
                    onChange={(e) => setSections({
                    ...sections,
                    [name]: { ...sections[name], subheading: e.target.value }
                    })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    rows="2"
                />
                </div>
            </div>

            {/* Category Cards Section */}
            {sections[name].items && (
                <div className="mt-10 pt-10 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-wider">Course Category Descriptions (Cards)</h3>
                    <div className="grid grid-cols-1 gap-6">
                        {sections[name].items.map((item, idx) => (
                            <div key={idx} className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                                <label className="block text-sm font-black text-gray-700 mb-3">{item.title} - Description</label>
                                <textarea
                                    value={item.description}
                                    onChange={(e) => {
                                        const newItems = [...sections[name].items];
                                        newItems[idx].description = e.target.value;
                                        setSections({
                                            ...sections,
                                            [name]: { ...sections[name], items: newItems }
                                        });
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:bg-white transition-all outline-none"
                                    placeholder={`Enter description for ${item.title}...`}
                                    rows="2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-6">
                <button
                onClick={() => handleUpdate(name)}
                className="w-full md:w-auto bg-teal-600 text-white font-black py-4 px-12 rounded-xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-100 hover:shadow-teal-200 active:scale-95"
                >
                SAVE ALL CHANGES
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionConfigPanel;
