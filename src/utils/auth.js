// utils/auth.js

export const isAuthenticated = () => {
    return !!localStorage.getItem("adminToken"); // Check if adminToken exists in localStorage
  };
  