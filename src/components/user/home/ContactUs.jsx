// import React from "react";

// function ContactUs() {
//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
//       <div className="container mx-auto max-w-5xl">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-2">
//             Contact <span className="text-blue-600">Us</span>
//           </h2>
//           <p className="text-gray-600">
//             We would love to hear from you! Please fill out the form below or find us at the location on the map.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your message"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Google Map */}
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4638826638894!2d76.7669354!3d30.7217207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb267717ab3%3A0xa98e0aabecae67c9!2s4th%20Floor%2C%20SCO%20343-344-345%2C%20Sector%2034A%2C%20Sector%2034%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1689232453321!5m2!1sen!2sin"
//               width="100%"
//               height="400"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="border-0 w-full h-full"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;



import React from "react";

function ContactUs() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        {/* Left Column: Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4638826638894!2d76.7669354!3d30.7217207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb267717ab3%3A0xa98e0aabecae67c9!2s4th%20Floor%2C%20SCO%20343-344-345%2C%20Sector%2034A%2C%20Sector%2034%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1689232453321!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Have questions or need assistance? Fill out the form, and we'll get back to you shortly.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
