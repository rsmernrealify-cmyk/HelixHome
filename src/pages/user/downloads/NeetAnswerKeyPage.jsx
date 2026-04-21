
import React from "react";

const neetAnswerKeys = [
  {
    year: "2024",
    description: "Download the answer key for NEET 2024 and check your answers.",
    link: "/path-to-answer-key-2024",
  },
  {
    year: "2023",
    description: "Download the answer key for NEET 2023 and analyze your performance.",
    link: "/path-to-answer-key-2023",
  },
  {
    year: "2022",
    description: "Get the NEET 2022 answer key to compare your solutions.",
    link: "/path-to-answer-key-2022",
  },
  {
    year: "2021",
    description: "Access the NEET 2021 answer key and evaluate your answers.",
    link: "/path-to-answer-key-2021",
  },
];

const NEETAnswerKeyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        NEET Answer Keys
      </h2>
      <p className="text-center mb-8 text-gray-600">
        Select and download the NEET Answer Key for the respective year to review and analyze your performance.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {neetAnswerKeys.map((key, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              NEET {key.year} Answer Key
            </h3>
            <p className="text-sm text-gray-600 mb-4">{key.description}</p>
            <a
              href={key.link}
              className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NEETAnswerKeyPage;
