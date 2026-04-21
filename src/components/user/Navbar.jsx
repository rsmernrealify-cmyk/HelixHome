import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // State to control dropdown visibility
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [isPayOnlineOpen, setPayOnlineOpen] = useState(false);
  const [isScholarshipOpen, setScholarshipOpen] = useState(false);
  const [isDownloadsOpen, setDownloadsOpen] = useState(false);

  const courseCategories = [
    { id: 1, type: "NEET Courses" },
    { id: 2, type: "JEE Courses" },
    { id: 3, type: "Foundation Courses" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 mr-5">
            HELIX
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-9 items-center">
            <Link
              to="/"
              className="text-black hover:bg-[#F1EFFF] hover:scale-110 transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold"
            >
              Home
            </Link>
            <Link
              to="/director-desk"
              className="text-black hover:bg-[#F1EFFF] hover:scale-110 transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold"
            >
              Director's Desk
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <div className="text-black hover:bg-[#F1EFFF] hover:scale-110 transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold">
                Courses
              </div>
              {isCoursesOpen && (
               <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-md rounded-md z-50">
                  {courseCategories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`} // Dynamically route based on categoryId
                      className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                    >
                      {category.type}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pay Online Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setPayOnlineOpen(true)}
              onMouseLeave={() => setPayOnlineOpen(false)}
            >
              <div className="text-black hover:bg-[#F1EFFF] hover:scale-110 transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold">
                Pay Online
              </div>
              {isPayOnlineOpen && (
                <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-md rounded-md z-50">
                  <Link
                    to="/pay-online"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                    NEET Courses
                  </Link>
                  <Link
                    to="/pay-online-method-2"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                    JEE Courses
                  </Link>
                  <Link
                    to="/pay-online-method-3"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                    Foundation Courses
                  </Link>
                </div>
              )}
            </div>

            {/* Scholarship Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setScholarshipOpen(true)}
              onMouseLeave={() => setScholarshipOpen(false)}
            >
              <div className="text-black hover:bg-[#F1EFFF] hover:scale-110 transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold">
                Scholarship
              </div>
              {isScholarshipOpen && (
                <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-md rounded-md z-50">
                  <Link
                    to="/scholarship-test"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                    Apply for Scholarship Test
                  </Link>
                  <a
                    href="https://www.helixinstitute.com/HSAT/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                    About Scholarship Test
                  </a>
                </div>
              )}
            </div>

            {/* Downloads Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDownloadsOpen(true)}
              onMouseLeave={() => setDownloadsOpen(false)}
            >
              <div className="text-black hover:bg-[#F1EFFF] hover:scale-110 transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold">
                Downloads
              </div>
              {isDownloadsOpen && (
                <div className="absolute left-0 top-full mt-0 w-48 bg-white shadow-md rounded-md z-50">
                  <Link
                    to="/download-syllabus"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                    Download Syllabus
                  </Link>
                  <Link
                    to="/neet-answer-key"
                    className="block px-4 py-2 text-black hover:bg-[#F1EFFF]"
                  >
                  NEET Answer Key
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/jobs"
              className="text-black hover:scale-110 hover:bg-[#F1EFFF] transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold"
            >
              Jobs
            </Link>
            <Link
              to="/contact-us"
              className="text-black hover:scale-110 hover:bg-[#F1EFFF] transition-all duration-200 cursor-pointer flex items-center h-[40px] font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Search and Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white"
          >
            Log In
          </Link>
          <Link
            to="/join"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
