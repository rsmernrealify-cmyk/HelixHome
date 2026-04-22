




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
    isPopular: false
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
    setEditingCourse(course);
    setFormData({
      name: course.name,
      description: course.description,
      instructor: course.instructor || "",
      lessons: course.lessons || 0,
      students: course.students || 0,
      duration: course.duration || "",
      price: course.price || "",
      hoverDescription: course.hoverDescription || "",
      isPopular: course.isPopular || false
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
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
      isPopular: false
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

            <div className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Course Name" className="w-full px-4 py-2 border rounded-lg" required />
              <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" className="w-full px-4 py-2 border rounded-lg" rows="2" required />

              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="instructor" value={formData.instructor} onChange={handleInputChange} placeholder="Instructor" className="w-full px-4 py-2 border rounded-lg" />
                <input type="text" name="duration" value={formData.duration} onChange={handleInputChange} placeholder="Duration (e.g. 2 Years)" className="w-full px-4 py-2 border rounded-lg" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="price" value={formData.price} onChange={handleInputChange} placeholder="Price (e.g. ₹85,000)" className="w-full px-4 py-2 border rounded-lg" />
                <input type="number" name="lessons" value={formData.lessons} onChange={handleInputChange} placeholder="Lessons Count" className="w-full px-4 py-2 border rounded-lg" />
              </div>

              <input type="text" name="hoverDescription" value={formData.hoverDescription} onChange={handleInputChange} placeholder="Hover Description (Brief summary)" className="w-full px-4 py-2 border rounded-lg" />

              <div className="flex items-center gap-2">
                <input type="checkbox" name="isPopular" checked={formData.isPopular} onChange={handleInputChange} id="isPopular" />
                <label htmlFor="isPopular" className="text-sm text-gray-600">Show in Popular Courses</label>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 caps">Course Image</label>
                <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
              </div>

              <div className="pt-4 flex gap-3">
                <button type="submit" className="flex-1 bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 shadow-lg transition">{editingCourse ? "Update Course" : "Save Course"}</button>
                {editingCourse && <button type="button" onClick={resetForm} className="px-6 py-3 border rounded-xl hover:bg-gray-50 transition">Cancel</button>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCoursesPanel;


