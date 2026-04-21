

import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FaBars, FaCog, FaSignOutAlt, FaUserAlt, FaImage, FaPhotoVideo, FaDesktop, FaCreditCard, FaBriefcase, FaDownload, FaUserTie } from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
  const [isHomePageMenuOpen, setIsHomePageMenuOpen] = useState(false); // Home Page submenu state
  const [isDownloadsMenuOpen, setIsDownloadsMenuOpen] = useState(false); // Downloads submenu state

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Toggle Home Page submenu
  const toggleHomePageMenu = () => setIsHomePageMenuOpen(!isHomePageMenuOpen);

  // Toggle Downloads submenu
  const toggleDownloadsMenu = () => setIsDownloadsMenuOpen(!isDownloadsMenuOpen);

  return (
    <div className="flex h-[90vh] bg-gray-200">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-gray-800 text-white transition-all duration-300 ease-in-out flex flex-col p-4 overflow-y-auto`}
      >
        <div className="flex items-center justify-between mb-6">
          {/* Sidebar Toggle */}
          <button onClick={toggleSidebar} className="text-white">
            <FaBars size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-6">
          <Link to="/admin/dashboard" className="flex items-center gap-4 text-lg hover:text-gray-300">
            <FaDesktop size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>

          {/* Home Page Menu with Submenus */}
          <div className="flex flex-col">
            <button
              onClick={toggleHomePageMenu}
              className="flex items-center gap-4 text-lg hover:text-gray-300"
            >
              <FaImage size={20} />
              {isSidebarOpen && <span>Home Page</span>}
            </button>
            {/* Submenu for Home Page */}
            {isHomePageMenuOpen && (
              <div className="pl-6 mt-2 flex flex-col gap-4">
                <Link
                  to="/admin/home-sliderImage"
                  className="flex items-center gap-4 text-lg hover:text-gray-300"
                >
                  <FaImage size={20} />
                  {isSidebarOpen && <span>Slider Images</span>}
                </Link>
                <Link
                  to="/admin/home-testimonials"
                  className="flex items-center gap-4 text-lg hover:text-gray-300"
                >
                  <FaPhotoVideo size={20} />
                  {isSidebarOpen && <span>Testimonials Images</span>}
                </Link>
              </div>
            )}
          </div>

          {/* Downloads Menu with Submenus */}
          <div className="flex flex-col">
            <button
              onClick={toggleDownloadsMenu}
              className="flex items-center gap-4 text-lg hover:text-gray-300"
            >
              <FaDownload size={20} />
              {isSidebarOpen && <span>Downloads</span>}
            </button>
            {/* Submenu for Downloads */}
            {isDownloadsMenuOpen && (
              <div className="pl-6 mt-2 flex flex-col gap-4">
                <Link
                  to="/admin/syllabusUpload"
                  className="flex items-center gap-4 text-lg hover:text-gray-300"
                >
                  <FaDownload size={20} />
                  {isSidebarOpen && <span>Upload Syllabus</span>}
                </Link>
                <Link
                  to="/admin/download-neet-answer-key"
                  className="flex items-center gap-4 text-lg hover:text-gray-300"
                >
                  <FaDownload size={20} />
                  {isSidebarOpen && <span>Download NEET Answer Key</span>}
                </Link>
              </div>
            )}
          </div>

          {/* Additional Menu Items */}
          <Link to="/admin/pay-online" className="flex items-center gap-4 text-lg hover:text-gray-300">
            <FaCreditCard size={20} />
            {isSidebarOpen && <span>Pay Online</span>}
          </Link>
          <Link to="/admin/jobs" className="flex items-center gap-4 text-lg hover:text-gray-300">
            <FaBriefcase size={20} />
            {isSidebarOpen && <span>Jobs</span>}
          </Link>
          <Link to="/admin/directorDesk-edit" className="flex items-center gap-4 text-lg hover:text-gray-300">
            <FaUserTie size={20} />
            {isSidebarOpen && <span>Director Desk</span>}
          </Link>

          <Link to="/admin/edit-courses" className="flex items-center gap-4 text-lg hover:text-gray-300">
            <FaCog size={20} className='animate-spin [animation-duration:2.5s]'/>
            {isSidebarOpen && <span>Edit Courses</span>}
          </Link>
          <Link to="/admin/scholasrhipTests-from" className="flex items-center gap-4 text-lg hover:text-gray-300">
            <FaUserAlt size={20} />
            {isSidebarOpen && <span>Scholarship Tests</span>}
          </Link>
        </nav>  

        {/* Logout Button */}
        <button
          className="mt-5 flex items-center gap-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 w-full"
          onClick={handleLogout}
        >
          <FaSignOutAlt size={20} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 h-full overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
