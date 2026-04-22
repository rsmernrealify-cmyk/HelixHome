




// Example Categories and Courses Data (your original structure)
import React, { useState, useEffect } from "react";
import BASE_URL from '../../config/apiConfig';

const CATEGORIES = [
  { id: 1, type: "NEET COURSES" },
  { id: 2, type: "JEE COURSES" },
  { id: 3, type: "FOUNDATION COURSES" }
];

const EditCoursesPanel = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    instructor: "",
    lessons: 0,
    students: 0,
    duration: "",
    price: "",
    hoverDescription: "",
    isPopular: false,
    eligible: "",
    startDates: "",
    mode: "",
    admissionCriteria: "",
    longDescription: "",
    scholarshipDetails: "",
    registrationStepsOnline: "",
    registrationStepsOffline: "",
    formLink: "",
    intensity: "",
    modulesCount: "",
    popularityRanking: "",
    noteForApplicants: ""
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, [selectedCategoryId]);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`${BASE_URL}/course?categoryId=${selectedCategoryId}`);
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleEditClick = (course) => {
    console.log("Editing course object from API:", course); // CRITICAL DEBUG LOG
    setEditingCourse(course);
    setFormData({
      name: course.name || "",
      description: course.description || "",
      instructor: course.instructor || "",
      lessons: course.lessons || 0,
      students: course.students || 0,
      duration: course.duration || "",
      price: course.price || "",
      hoverDescription: course.hoverDescription || "",
      isPopular: course.isPopular || false,
      eligible: course.eligible || "",
      startDates: course.startDates || "",
      mode: course.mode || "",
      admissionCriteria: course.admissionCriteria || "",
      longDescription: course.longDescription || "",
      scholarshipDetails: course.scholarshipDetails || "",
      registrationStepsOnline: course.registrationStepsOnline || "",
      registrationStepsOffline: course.registrationStepsOffline || "",
      formLink: course.formLink || "",
      intensity: course.intensity || "",
      modulesCount: course.modulesCount || "",
      popularityRanking: course.popularityRanking || "",
      noteForApplicants: course.noteForApplicants || ""
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    // Log what we are trying to save
    console.log("Saving current formData state:", formData); 

    // Explicitly append every field to ensure Multer parses them
    const fieldsToAppend = [
      'name', 'description', 'instructor', 'lessons', 'students', 'duration', 
      'price', 'hoverDescription', 'isPopular', 'eligible', 'startDates', 
      'mode', 'admissionCriteria', 'longDescription', 'scholarshipDetails', 
      'registrationStepsOnline', 'registrationStepsOffline', 'formLink',
      'intensity', 'modulesCount', 'popularityRanking', 'noteForApplicants'
    ];

    fieldsToAppend.forEach(key => {
      // Use empty string as fallback to avoid 'undefined' string being sent
      const value = formData[key] !== undefined && formData[key] !== null ? formData[key] : "";
      data.append(key, value);
    });

    console.log(`Sending ${fieldsToAppend.length} fields to backend.`); // DIAGNOSTIC LOG
    // alert(`Preparing to send ${fieldsToAppend.length} fields. Check console.`);
    
    data.append("categoryId", selectedCategoryId);
    data.append("category", CATEGORIES.find(c => c.id === selectedCategoryId).type);
    
    if (imageFile) data.append("image", imageFile);

    const url = editingCourse ? `${BASE_URL}/course/${editingCourse._id}` : `${BASE_URL}/course`;
    const method = editingCourse ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        body: data,
      });

      if (response.ok) {
        alert(editingCourse ? "Course updated!" : "Course added!");
        fetchCourses();
        resetForm();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to save'}`);
      }
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        const response = await fetch(`${BASE_URL}/course/${id}`, { method: "DELETE" });
        if (response.ok) fetchCourses();
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    }
  };

  const resetForm = () => {
    setEditingCourse(null);
    setFormData({
      name: "",
      description: "",
      instructor: "",
      lessons: 0,
      students: 0,
      duration: "",
      price: "",
      hoverDescription: "",
      isPopular: false,
      eligible: "",
      startDates: "",
      mode: "",
      admissionCriteria: "",
      longDescription: "",
      scholarshipDetails: "",
      registrationStepsOnline: "",
      registrationStepsOffline: "",
      formLink: "",
      intensity: "",
      modulesCount: "",
      popularityRanking: "",
      noteForApplicants: ""
    });
    setImageFile(null);
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Manage Courses</h1>

      <div className="flex gap-8">
        {/* Left: Course List */}
        <div className="w-1/2">
          <div className="mb-6 flex gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${selectedCategoryId === cat.id ? "bg-teal-600 text-white shadow-md" : "bg-white text-gray-600 border hover:bg-gray-50"
                  }`}
              >
                {cat.type}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {courses.map(course => (
              <div key={course._id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center group">
                <div className="flex items-center gap-4">
                  {course.image && <img src={course.image} className="w-12 h-12 rounded-lg object-cover" alt="" />}
                  <div>
                    <h4 className="font-bold text-gray-800">{course.name}</h4>
                    <p className="text-xs text-gray-500 line-clamp-1">{course.description}</p>
                  </div>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button onClick={() => handleEditClick(course)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">Edit</button>
                  <button onClick={() => handleDelete(course._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">Delete</button>
                </div>
              </div>
            ))}
            <button onClick={resetForm} className="w-full py-4 border-2 border-dashed rounded-xl text-gray-400 hover:text-teal-600 hover:border-teal-200 transition">
              + Add New Course
            </button>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-1/2">
          <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800">{editingCourse ? "Edit Course" : "New Course"}</h2>

            <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Course Name" className="w-full px-4 py-2 border rounded-lg" required />
              
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Short Description (for cards)</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Brief summary..." className="w-full px-4 py-2 border rounded-lg" rows="2" required />
                 </div>
                 <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Hover Description</label>
                    <input type="text" name="hoverDescription" value={formData.hoverDescription} onChange={handleInputChange} placeholder="Quick highlight..." className="w-full px-4 py-2 border rounded-lg h-full" />
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="instructor" value={formData.instructor} onChange={handleInputChange} placeholder="Instructor" className="w-full px-4 py-2 border rounded-lg" />
                <input type="text" name="duration" value={formData.duration} onChange={handleInputChange} placeholder="Duration (e.g. 2 Years)" className="w-full px-4 py-2 border rounded-lg" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="price" value={formData.price} onChange={handleInputChange} placeholder="Fees (e.g. ₹85,000)" className="w-full px-4 py-2 border rounded-lg" />
                <input type="number" name="lessons" value={formData.lessons} onChange={handleInputChange} placeholder="Lessons Count" className="w-full px-4 py-2 border rounded-lg" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="eligible" value={formData.eligible} onChange={handleInputChange} placeholder="Eligibility (e.g. 10th Appeared)" className="w-full px-4 py-2 border rounded-lg" />
                <input type="text" name="startDates" value={formData.startDates} onChange={handleInputChange} placeholder="Start Dates (e.g. 6 April)" className="w-full px-4 py-2 border rounded-lg" />
              </div>

              <div className="bg-teal-50/30 p-4 rounded-xl border border-teal-100 flex flex-col gap-4">
                 <p className="text-[10px] font-black text-teal-700 uppercase tracking-widest px-1">Quick Summary Stats (Sidebar)</p>
                 <div className="grid grid-cols-3 gap-3">
                    <input type="text" name="intensity" value={formData.intensity} onChange={handleInputChange} placeholder="Intensity (Full-Time)" className="px-3 py-2 border rounded-lg text-sm" />
                    <input type="text" name="modulesCount" value={formData.modulesCount} onChange={handleInputChange} placeholder="Modules (36+)" className="px-3 py-2 border rounded-lg text-sm" />
                    <input type="text" name="popularityRanking" value={formData.popularityRanking} onChange={handleInputChange} placeholder="Ranking (Top 1%)" className="px-3 py-2 border rounded-lg text-sm" />
                 </div>
              </div>

              <input type="text" name="mode" value={formData.mode} onChange={handleInputChange} placeholder="Class Mode (e.g. Offline Classes)" className="w-full px-4 py-2 border rounded-lg" />

              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Detailed Course Description</label>
                <textarea name="longDescription" value={formData.longDescription} onChange={handleInputChange} placeholder="Full curriculum details, schedules, etc." className="w-full px-4 py-2 border rounded-lg font-mono text-sm" rows="6" />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Admission & Scholarship Criteria (Brief)</label>
                <textarea name="admissionCriteria" value={formData.admissionCriteria} onChange={handleInputChange} placeholder="Minimum marks, test dates, concessions..." className="w-full px-4 py-2 border rounded-lg font-mono text-sm" rows="3" title="This is a brief summary of criteria shown at the top" />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Scholarships or Discounts (Detailed Rules)</label>
                <textarea name="scholarshipDetails" value={formData.scholarshipDetails} onChange={handleInputChange} placeholder="1. 10th class marks... 2. Concessions... etc." className="w-full px-4 py-2 border rounded-lg font-mono text-sm" rows="5" title="List detailed points and notes here" />
              </div>

              <div>
                <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Scholarship Note for Applicants (The bottom quote)</label>
                <textarea name="noteForApplicants" value={formData.noteForApplicants} onChange={handleInputChange} placeholder='"For scholarship entry, students must participate... etc."' className="w-full px-4 py-2 border rounded-lg italic text-sm" rows="3" />
              </div>

              <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100/50 space-y-4">
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest px-1">How to Register (Dynamic Steps)</p>
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Online Registration Steps</label>
                  <textarea name="registrationStepsOnline" value={formData.registrationStepsOnline} onChange={handleInputChange} placeholder="⇨ Click on ENROL NOW... etc." className="w-full px-4 py-2 border rounded-lg font-mono text-sm" rows="4" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Offline Registration Steps</label>
                  <textarea name="registrationStepsOffline" value={formData.registrationStepsOffline} onChange={handleInputChange} placeholder="⇨ Download and print application form... etc." className="w-full px-4 py-2 border rounded-lg font-mono text-sm" rows="4" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold text-gray-400 ml-1">Download Form Link (URL)</label>
                  <input type="text" name="formLink" value={formData.formLink} onChange={handleInputChange} placeholder="https://example.com/form.pdf" className="w-full px-4 py-2 border rounded-lg h-full" title="Link for the DOWNLOAD FORM button" />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                <input type="checkbox" name="isPopular" checked={formData.isPopular} onChange={handleInputChange} id="isPopular" className="w-4 h-4 text-teal-600" />
                <label htmlFor="isPopular" className="text-sm font-bold text-gray-600">Mark as Popular Course</label>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1 ml-1 caps">Course Header Image</label>
                <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 border p-2 rounded-lg" />
              </div>

              <div className="pt-4 flex gap-3 sticky bottom-0 bg-white pb-2">
                <button type="submit" className="flex-1 bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 shadow-lg transition">{editingCourse ? "Update All Details" : "Create Course"}</button>
                {editingCourse && <button type="button" onClick={resetForm} className="px-6 py-3 border rounded-xl hover:bg-gray-50 transition font-bold text-gray-500">Cancel</button>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoursesPanel;


