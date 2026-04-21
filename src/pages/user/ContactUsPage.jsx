
// import React, { useState } from "react";

// function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted", formData);
//     // Handle form submission (e.g., send data to server)
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-20">
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="container mx-auto text-center text-white relative z-10">
//           <h2 className="text-5xl font-extrabold mb-4">Contact Us</h2>
//           <p className="text-lg max-w-xl mx-auto">
//             We’d love to hear from you! Reach out to us via the contact form below or find our office location on the map.
//           </p>
//         </div>
//       </div>

//       {/* Main Content Section (Form + Contact Details) */}
//       <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row">
//         {/* Left Side: Contact Form */}
//         <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto mb-8 lg:mb-0">
//           <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               {/* Name */}
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-medium">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//               </div>

//               {/* Subject */}
//               <div>
//                 <label htmlFor="subject" className="block text-gray-700 font-medium">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 font-medium">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows="6"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 ></textarea>
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Right Side: Contact Details */}
//         <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
//           <h3 className="text-2xl font-semibold mb-6">Our Contact Information</h3>
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <i className="fa fa-map-marker-alt text-teal-500 text-xl"></i>
//               <div>
//                 <h4 className="font-medium text-lg">Address</h4>
//                 <p className="text-gray-700">
//                   4th Floor, SCO 343-344-345, Sector 34A, Chandigarh, India
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <i className="fa fa-phone-alt text-teal-500 text-xl"></i>
//               <div>
//                 <h4 className="font-medium text-lg">Phone</h4>
//                 <p className="text-gray-700">
//                   +91-XXXX-XXXXXX
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <i className="fa fa-envelope text-teal-500 text-xl"></i>
//               <div>
//                 <h4 className="font-medium text-lg">Email</h4>
//                 <p className="text-gray-700">
//                   contact@helixinstitute.com
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-4">
//               <i className="fa fa-clock text-teal-500 text-xl"></i>
//               <div>
//                 <h4 className="font-medium text-lg">Working Hours</h4>
//                 <p className="text-gray-700">
//                   Monday to Friday: 9:00 AM - 5:00 PM
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map Section (Made Larger) */}
//       <div className="bg-gray-100 py-12">
//         <div className="container mx-auto text-center">
//           <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
//           <div className="relative w-full h-96 rounded-lg overflow-hidden">
//             {/* Map with updated location */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4638826638894!2d76.7669354!3d30.7217207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb267717ab3%3A0xa98e0aabecae67c9!2s4th%20Floor%2C%20SCO%20343-344-345%2C%20Sector%2034A%2C%20Sector%2034%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1689232453321!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Location Map"
//             ></iframe>
//           </div>
//         </div>
//       </div>

     
//     </div>
//   );
// }

// export default ContactUsPage;

import React, { useState } from "react";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h2 className="text-5xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-lg max-w-xl mx-auto">
            We’d love to hear from you! Reach out to us via the contact form below or find our office location on the map.
          </p>
        </div>
      </div>

      {/* Main Content Section (Form + Contact Details) */}
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row">
        {/* Left Side: Contact Form */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-6 text-teal-600">Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-teal-600">Our Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <i className="fa fa-map-marker-alt text-teal-500 text-xl"></i>
              <div>
                <h4 className="font-medium text-lg">Address</h4>
                <p className="text-gray-700">
                  4th Floor, SCO 343-344-345, Sector 34A, Chandigarh, India
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <i className="fa fa-phone-alt text-teal-500 text-xl"></i>
              <div>
                <h4 className="font-medium text-lg">Phone</h4>
                <p className="text-gray-700">
                  +91-XXXX-XXXXXX
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <i className="fa fa-envelope text-teal-500 text-xl"></i>
              <div>
                <h4 className="font-medium text-lg">Email</h4>
                <p className="text-gray-700">
                  contact@helixinstitute.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <i className="fa fa-clock text-teal-500 text-xl"></i>
              <div>
                <h4 className="font-medium text-lg">Working Hours</h4>
                <p className="text-gray-700">
                  Monday to Friday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Made Larger) */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-teal-600">Our Location</h3>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            {/* Map with updated location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4638826638894!2d76.7669354!3d30.7217207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb267717ab3%3A0xa98e0aabecae67c9!2s4th%20Floor%2C%20SCO%20343-344-345%2C%20Sector%2034A%2C%20Sector%2034%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1689232453321!5m2!1sen!2sin"
              width="120%"
              height="120%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default ContactUsPage;
