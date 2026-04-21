


import React, { useState } from "react";

// Example Categories and Courses Data (your original structure)
const courseCategories = [
  {
    id: 1,
    type: "NEET COURSES",
    description: "An extensive range of courses designed for NEET preparation.",
    courses: [
      { id: 1, name: "11th Medical for NEET - 2 Year Course", description: "An intensive 2-year program for 11th-grade students." },
      { id: 2, name: "12th Medical for NEET", description: "A comprehensive course for 12th-grade students." },
    ],
  },
  {
    id: 2,
    type: "JEE COURSES",
    description: "Courses focused on JEE (Main & Advanced), from 11th-grade to repeater batches.",
    courses: [
      { id: 1, name: "11th Non-medical for JEE (Main & Advanced) - 2 Year Course", description: "Comprehensive 2-year course for 11th-grade students." },
      { id: 2, name: "12th Non-Medical for JEE (Main & Advanced)", description: "A complete program for 12th-grade students focused on JEE." },
    ],
  },
  {
    id: 3,
    type: "FOUNDATION COURSES",
    description: "Foundation courses designed for students in class 9th and 10th.",
    courses: [
      { id: 1, name: "9th Class Two Year Foundation Course", description: "A 2-year foundation course designed to prepare students for competitive exams." },
      { id: 2, name: "10th Class One Year Foundation Course", description: "One-year foundation course for class 10 students." },
    ],
  },
];

const EditCoursesPanel = () => {
  const [categories, setCategories] = useState(courseCategories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editingCourse, setEditingCourse] = useState(null);
  const [updatedCourse, setUpdatedCourse] = useState({ name: "", description: "" });

  // Handle Category Selection
  const handleCategoryChange = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category);
    setEditingCourse(null);  // Reset when a new category is selected
  };

  // Handle Editing Course
  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setUpdatedCourse({ name: course.name, description: course.description });
  };

  // Save Updated Course
  const handleSaveCourse = () => {
    const updatedCategories = categories.map((category) => {
      if (category.id === selectedCategory.id) {
        category.courses = category.courses.map((course) =>
          course.id === editingCourse.id ? { ...course, ...updatedCourse } : course
        );
      }
      return category;
    });
    setCategories(updatedCategories);
    setEditingCourse(null);  // Reset after saving
  };

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">Edit Course Categories and Courses</h1>

      {/* Step 1: Category Selection */}
      {!selectedCategory ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Step 1: Select Course Category</h2>
          <div className="mb-4">
            <label className="block text-lg font-medium">Select Category</label>
            <select
              onChange={(e) => handleCategoryChange(Number(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-3"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.type}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{selectedCategory.type}</h2>
          <p className="mb-6">{selectedCategory.description}</p>

          {/* Step 2: Edit Courses */}
          <h3 className="text-xl font-semibold mb-4">Step 2: Edit Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedCategory.courses.map((course) => (
              <div key={course.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                <div>
                  <h4 className="text-lg font-semibold">{course.name}</h4>
                  <p>{course.description}</p>
                </div>
                <button
                  onClick={() => handleEditCourse(course)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>

          {/* Editing the selected course */}
          {editingCourse && (
            <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Editing {editingCourse.name}</h3>
              <div className="mb-4">
                <label className="block text-lg font-medium">Course Name</label>
                <input
                  type="text"
                  value={updatedCourse.name}
                  onChange={(e) => setUpdatedCourse({ ...updatedCourse, name: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium">Course Description</label>
                <textarea
                  value={updatedCourse.description}
                  onChange={(e) => setUpdatedCourse({ ...updatedCourse, description: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                  rows="4"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleSaveCourse}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingCourse(null)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditCoursesPanel;
