


  import React, { useState } from "react";

  const LoginSignup = () => {
    const [activeForm, setActiveForm] = useState("");

    const changeToLogin = () => setActiveForm("login");
    const changeToSignUp = () => setActiveForm("signUp");
    const hideForms = () => setActiveForm("");

    return (
      <div
        className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d')",
        }}
      >
        <div className="relative flex flex-col items-center w-full max-w-4xl h-96 shadow-lg bg-white bg-opacity-80 rounded-lg overflow-hidden">
          <div className="relative flex justify-between w-full h-full">
            {/* Login Section */}
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-700 bg-opacity-70 text-white p-4">
              <h2 className="text-2xl font-semibold">LOGIN</h2>
              <p className="mt-2 text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded shadow"
                onClick={changeToLogin}
              >
                LOGIN
              </button>
            </div>

            {/* Signup Section */}
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-500 bg-opacity-70 text-white p-4">
              <h2 className="text-2xl font-semibold">SIGN UP</h2>
              <p className="mt-2 text-sm text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button
                className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow"
                onClick={changeToSignUp}
              >
                SIGN UP
              </button>
            </div>
          </div>

          {/* Forms Section */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gray-100 p-8 transition-transform duration-500 ${
              activeForm === "login" ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              className="absolute top-2 right-4 text-gray-500"
              onClick={hideForms}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold">LOGIN</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 p-2 border rounded"
            />
            <button className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded shadow">
              LOGIN
            </button>
          </div>

          <div
            className={`absolute top-0 left-1/2 w-1/2 h-full bg-gray-100 p-8 transition-transform duration-500 ${
              activeForm === "signUp" ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              className="absolute top-2 right-4 text-gray-500"
              onClick={hideForms}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold">SIGN UP</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="User"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mt-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mt-4 p-2 border rounded"
            />
            <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default LoginSignup;
