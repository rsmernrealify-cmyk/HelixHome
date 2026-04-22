

import React, { useState, useEffect } from 'react';
import BASE_URL from "../../../config/apiConfig";

const DownloadSyllabus = () => {
  const [syllabuses, setSyllabuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSyllabuses = async () => {
      try {
        const response = await fetch(`${BASE_URL}/syllabus`);
        if (response.ok) {
          const data = await response.json();
          setSyllabuses(data);
        }
      } catch (error) {
        console.error("Error fetching syllabuses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSyllabuses();
  }, []);

  return (
    <div className="p-6 md:p-12 flex flex-col items-center w-full bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl py-8 text-white font-extrabold bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl shadow-xl">
          Download Syllabus
        </h1>
        <p className="mt-4 text-gray-500 font-medium">Access detailed curriculum for all our academic programs.</p>
      </div>

      {loading ? (
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-4 border-teal-500 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading resources...</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl space-y-4">
          {syllabuses.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border-2 border-dashed border-gray-200 text-gray-400 font-medium">
              No syllabus files available at the moment.
            </div>
          ) : (
            syllabuses.map((syllabus) => (
              <div
                key={syllabus._id}
                className="group flex flex-col md:flex-row justify-between items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-bold rounded-full mb-2 uppercase tracking-wide">
                    {syllabus.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition">
                    {syllabus.title}
                  </h3>
                </div>
                <a
                  href={syllabus.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto py-3 px-8 bg-teal-600 text-white font-bold rounded-xl shadow-lg hover:bg-teal-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default DownloadSyllabus;

;
