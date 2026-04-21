



      import React, { useState } from "react";
      import { useNavigate } from "react-router-dom";
      
     

const PayOnlinePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [testType, setTestType] = useState("Class Room");
  const navigate = useNavigate();


  const classRoomTest = [
    { course: "TEST SERIES (ONLINE and OFFLINE both)-for +2 PASSED  (HMC-3 NEET-2025)" },
    { classType: "for +1 Admission", course: "11th Medical for NEET - 2 Year Course  (HMC-6 (2025))" },
    { classType: "for +2 Admission", course: "12th Medical for NEET  (HMC-8 2024)" },
    { course: "Dropper Batch (120-DAYS) -for NEET-2025  (HMC-105)" },
    { classType: "for +1 Admission", course: "Physics for NEET 2025 (HMC-12)" },
    { classType: "for +2 Admission", course: "NEET 2024 Chemistry Course (HMC-25)" },
    { classType: "for +1 Admission", course: "Mathematics for NEET 2025 (HMC-30)" },
    { classType: "for +2 Admission", course: "Biology NEET Crash Course (HMC-50)" },
    { course: "Weekend Test Series for NEET-2025 (HMC-120)" },
    { course: "Dropper Batch for NEET-2024 (HMC-80)" },
  ];

  const scholarshipTest = [
    {
      "Center Name": "for +1 MEDICAL- Scholarship Test (HSAT) date 2-2-2025 (10th Moving to 11th MEDICAL)",
      "For Class": "11th Medical",
      Stream: "Medical",
      "Exam Date": "01/02/2025 12:30 PM",
      "Exam Fees": 500,
    },
    {
      "Center Name": "for +2 MEDICAL- Scholarship Test (HSAT) date 5-3-2025 (11th Moving to 12th MEDICAL)",
      "For Class": "12th Medical",
      Stream: "Medical",
      "Exam Date": "05/03/2025 03:00 PM",
      "Exam Fees": 600,
    },
    {
      "Center Name": "for +1 NON-MEDICAL- Scholarship Test (HSAT) date 10-3-2025 (10th Moving to 11th NON-MEDICAL)",
      "For Class": "11th Non-Medical",
      Stream: "Non-Medical",
      "Exam Date": "10/03/2025 11:00 AM",
      "Exam Fees": 400,
    },
    {
      "Center Name": "for +2 NON-MEDICAL- Scholarship Test (HSAT) date 15-4-2025 (11th Moving to 12th NON-MEDICAL)",
      "For Class": "12th Non-Medical",
      Stream: "Non-Medical",
      "Exam Date": "15/04/2025 10:30 AM",
      "Exam Fees": 550,
    },
  ];

  const filteredTests =
    testType === "Class Room"
      ? classRoomTest.filter((item) =>
          item.course.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : scholarshipTest.filter((item) =>
          item["Center Name"].toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div
      className={`p-6 min-h-screen transition-all ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-teal-400">NEET Courses & Tests</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-700 rounded-full shadow-md hover:bg-gray-600"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search tests..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-2 rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["Class Room", "Scholarship"].map((type) => (
          <button
            key={type}
            onClick={() => setTestType(type)}
            className={`py-2 px-6 rounded-full font-medium shadow-md transition-all ${
              testType === type
                ? "bg-teal-500 text-white scale-105 shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {type} Test
          </button>
        ))}
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((item, index) =>
          testType === "Class Room" ? (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform"
            >
              <h2 className="text-lg font-bold mb-2 text-teal-400">{item.course}</h2>
              {item.classType && (
                <p className="text-sm text-gray-400">Class Type: {item.classType}</p>
              )}
              <div className="flex mt-4 justify-between">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  onClick={() => navigate("/pay-installment")}
                  >

                  Pay Installment
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  New Admission
                </button>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform"
            >
              <h2 className="text-lg font-bold mb-2 text-teal-400">{item["Center Name"]}</h2>
              <p className="text-sm text-gray-400">For Class: {item["For Class"]}</p>
              <p className="text-sm text-gray-400">Stream: {item.Stream}</p>
              <p className="text-sm text-gray-400">Exam Date: {item["Exam Date"]}</p>
              <p className="text-sm text-gray-400">Exam Fees: ₹{item["Exam Fees"]}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">
                Apply Online
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PayOnlinePage;
