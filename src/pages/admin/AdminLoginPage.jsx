import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // === QUICK DUMMY LOGIN (no network) ===
    // If user types the dummy credentials, log them in locally and redirect.
    // Dummy credentials: admin / admin123
    if (adminId === "admin" && password === "admin123") {
      // You can use sessionStorage if you want it to expire after browser tab closed
      localStorage.setItem("adminToken", "dummy-token"); // dummy token
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
      return;
    }

    // === REAL API LOGIN (only if not using dummy) ===
    try {
      // Replace this endpoint with your real API if needed
      const response = await fetch(" https://kzlhxr7v-3000.inc1.devtunnels.ms/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: adminId, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save real token if returned by backend
        if (data.token) {
          localStorage.setItem("adminToken", data.token);
        } else {
          // fallback if backend doesn't return token but login succeeded
          localStorage.setItem("adminToken", "backend-login-success");
        }
        localStorage.setItem("adminLoggedIn", "true");
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Invalid Admin ID or Password");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-96 transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">Admin Login</h2>
        {error && <p className="text-red-500 text-center mb-4 font-medium">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="adminId" className="block text-sm font-semibold text-gray-700">Admin ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transform transition duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Helpful note about dummy credentials */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          (Demo credentials: <span className="font-medium">admin</span> / <span className="font-medium">admin123</span>)
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
