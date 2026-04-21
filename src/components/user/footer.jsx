// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto px-6">
//         {/* Footer Sections */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <ul>
//               <li>Phone: +91-XXXX-XXXXXX</li>
//               <li>Email: contact@helixinstitute.com</li>
//               <li>Address: 123 Helix St., Chandigarh, India</li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul>
//               <li><a href="/" className="hover:underline">Home</a></li>
//               <li><a href="/Director's Desk" className="hover:underline">Director's Desk</a></li>
//               <li><a href="/Courses" className="hover:underline">Courses</a></li>
//               <li><a href="/Scholarship" className="hover:underline">Scholarship</a></li>
//               <li><a href="/Jobs" className="hover:underline">Jobs</a></li>
//               <li><a href="/Downloads" className="hover:underline">Downloads</a></li>
//               <li><a href="/Contact Us" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com/helixinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
//                 <i className="fab fa-facebook-f"></i> Facebook
//               </a>
//               <a href="https://www.instagram.com/helixinstitute" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
//                 <i className="fab fa-instagram"></i> Instagram
//               </a>
//               <a href="https://twitter.com/helixinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
//                 <i className="fab fa-twitter"></i> Twitter
//               </a>
//             </div>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
//             <form action="#" method="POST">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-2 mb-4 border border-gray-400 rounded"
//               />
//               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center mt-8 text-sm">
//           <p>&copy; 2025 Helix Institute. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;







import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +91-XXXX-XXXXXX</li>
              <li>Email: contact@helixinstitute.com</li>
              <li>Address: 4th Floor, SCO 343-344-345, Sector 34A, Chandigarh, India</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://www.facebook.com/helixinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://www.instagram.com/helixinstitute" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://twitter.com/helixinstitute" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Our Location</h3>
            <div className="relative w-full h-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4638826638894!2d76.7669354!3d30.7217207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb267717ab3%3A0xa98e0aabecae67c9!2s4th%20Floor%2C%20SCO%20343-344-345%2C%20Sector%2034A%2C%20Sector%2034%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1689232453321!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Helix Institute Location"
              ></iframe>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Subscribe to Our Newsletter</h3>
            <form action="#" method="POST">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 mb-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400"
              />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 text-sm text-gray-500">
          <p>&copy; 2025 Helix Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
