import React, { useState } from "react";

const ScholarshipTestPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredTests = scholarshipTest.filter((item) =>
    item["Center Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-teal-400">Scholarship Tests</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search scholarship tests..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-2 rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default ScholarshipTestPage;
