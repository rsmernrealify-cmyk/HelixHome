// // import React from 'react';
// // import { Route } from 'react-router-dom';
// // import AdminLoginPage from '../pages/admin/AdminLoginPage';
// // import { Navigate } from 'react-router-dom';
// // // import AdminPanelLayout from '../components/admin/AdminPanelLayout';
// // // import AdminDashboard from '../pages/admin/AdminDashboard';
// // // import UploadImage from '../pages/admin/UploadImage';
// // // import EditCourse from '../pages/admin/EditCourse';

// // const isAuthenticated = () => localStorage.getItem('adminToken');

// // const AdminRoutes = [
// //   <Route
// //     key="admin-*"
// //   path="*"
// //   element={<Navigate to="/admin/login" />} // Always redirect to login first
// // />,
// //   <Route
// //   key="admin-login"
// //         path="login"
// //         element={isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <AdminLoginPage />}
// //       />
// //   // <Route key="admin-panel" path="/" element={isAuthenticated() ? <AdminPanelLayout /> : <AdminLoginPage />}>
// //   //   <Route key="admin-dashboard" path="dashboard" element={<AdminDashboard />} />
// //   //   <Route key="upload-image" path="upload-image" element={<UploadImage />} />
// //   //   <Route key="edit-course" path="edit-course" element={<EditCourse />} />
  
// // ];

// // export default AdminRoutes;


// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import AdminLoginPage from '../pages/admin/AdminLoginPage';
// // import AdminDashboard from '../pages/admin/AdminDashboard';  // Assuming AdminDashboard exists
// import { isAuthenticated } from '../utils/auth';
// import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
// import { EditCoursesPage } from '../pages/admin/EditCoursesPage';
// import AdminLayout from '../pages/admin/AdminLayoutPage';

// const AdminRoutes = () => {
//   return (
//     <div className='flex'>
//      <AdminLayout/>
//     <Routes>
//       {/* If not authenticated, redirect to login */}
//       <Route 
//         path="*" 
//         element={isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <Navigate to="/admin/login" />}
//       />
      
//       {/* Admin Login Route */}
//       <Route 
//         path="login" 
//         element={isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <AdminLoginPage />} 

//       />
      
      
//       {/* Admin Panel Routes */}
//       <Route path="/" element={isAuthenticated() ? <AdminDashboardPage /> : <Navigate to="/admin/login" />} />
//       <Route path="dashboard" element={isAuthenticated() ? <AdminDashboardPage/> : <Navigate to="/admin/login" />} />
//       <Route path="edit-courses" element={isAuthenticated() ? <EditCoursesPage/> : <Navigate to="/admin/login" />} />
//       {/* Add more admin routes here */}

//     </Routes>
//      </div>
//   );
// };

// export default AdminRoutes;

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminLoginPage from '../pages/admin/AdminLoginPage';
import { isAuthenticated } from '../utils/auth';
import AdminLayout from '../pages/admin/AdminLayoutPage'; // AdminLayout with Sidebar
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import EditCoursesPage from '../pages/admin/EditCoursesPage';
import { TestimonialsPanelPage } from '../pages/admin/TestimonialsPanelPage';
import { SliderImagePage } from '../pages/admin/SliderImagePage';
import SyllabusUplaodPage from '../pages/admin/SyllabusUplaodPage';
import ScholarshipTestFormPage from '../pages/admin/ScholarShipTestFromPage';
import DirectorDeskEditForm from '../pages/admin/DirectorDeskEditPage';

const AdminRoutes = () => {
  return (
    <Routes>
      {/* If not authenticated, redirect to login */}
      <Route
        path="*"
        element={isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <Navigate to="/admin/login" />}
      />

      {/* Admin Login Route */}
      <Route
        path="login"
        element={isAuthenticated() ? <Navigate to="/admin/dashboard" /> : <AdminLoginPage />}
      />

      {/* Admin Panel Routes */}
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={isAuthenticated() ? <AdminDashboardPage /> : <Navigate to="/admin/login" />} />
        <Route path="/edit-courses" element={isAuthenticated() ? <EditCoursesPage /> : <Navigate to="/admin/login" />} />
        <Route path="/home-testimonials" element={isAuthenticated() ? <TestimonialsPanelPage /> : <Navigate to="/admin/login" />} />
        <Route path="/home-sliderImage" element={isAuthenticated() ? <SliderImagePage /> : <Navigate to="/admin/login" />} />
        <Route path="/syllabusUpload" element={isAuthenticated() ? <SyllabusUplaodPage/> : <Navigate to="/admin/login" />} />
        <Route path="/scholasrhipTests-from" element={isAuthenticated() ? <ScholarshipTestFormPage/> : <Navigate to="/admin/login" />} />
        <Route path="/directorDesk-edit" element={isAuthenticated() ? <DirectorDeskEditForm/> : <Navigate to="/admin/login" />} />    
        {/* Add more admin routes here */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
