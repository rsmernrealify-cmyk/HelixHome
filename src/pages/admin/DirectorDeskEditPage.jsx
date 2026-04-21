import React, { useState } from "react";

function DirectorDeskEditForm() {
  const [formData, setFormData] = useState({
    title: "A Message from Our Director",
    content: [
      "This gives me immense happiness to announce that with wholehearted co-operation of teaching and administrative staff, we have successfully entered the Twelveth year under the banner of Helix Institute.",
      "Success in Medical Entrance Examinations, in face of a stiff and cut-throat competition, calls for a planned approach and cultivation of requisite skills. Developing such skills and attitude not only requires dedication and hard work on the part of students, but also proper guidance and training from mentor.",
      "Addressing the above needs of students, we at preface, have crafted the exclusive study material, expose them to highly competitive environment, make them conceptually very strong, clear their doubts in totality and make them comfortable while attempting both competitive as well as Board examinations.",
      "Helix is a place where teaching staff, administrative staff and parents work together to achieve prosperous and secure future in academics for every student. Our students, the learners of today, will be prepared well to face the highly competitive entrance examinations.",
      "I am continuously making efforts to impart best education to students and in years to come, probably I will be able to raise standards of this institute up to the level that parents find it easy to choose this institute as best option for their ward's education among hub of institutes in this region.",
      "We are proud of the success that our students have achieved in the past. Finally I sum up by saying that our main objective is to model this establishment as a center of excellence for the students wishing to choose their career path in Medical fields."
    ],
    signature: "M.L Syal \n Director, HELIX Institute",
    image: "" // Initially no image
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Director's Desk Data:", formData);
    alert("Director's Desk updated successfully!");
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
                />
              ))}
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
              className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600"
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
