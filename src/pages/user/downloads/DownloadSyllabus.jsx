

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
    <div className="p-6 md:p-12 bg-gray-50 flex flex-col items-center w-full min-h-[50vh]">
      {/* Header Card */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 mb-10">
        <div className="bg-gradient-to-br from-gray-900 to-teal-900 p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full -ml-40 -mb-40 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
              Curriculum <span className="text-teal-400">Resources</span>
            </h1>
            <p className="text-gray-400 font-medium max-w-xl mx-auto text-sm md:text-base">
              Access and download the official syllabus for our comprehensive academic programs and preparatory courses.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          {loading ? (
            <div className="py-16 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent mx-auto"></div>
              <p className="mt-4 text-gray-400 font-bold tracking-widest text-xs uppercase animate-pulse">Establishing connection...</p>
            </div>
          ) : (
            <>
              {syllabuses.length === 0 ? (
                <div className="bg-gray-50 py-20 text-center rounded-[1.5rem] border-2 border-dashed border-gray-200">
                  <div className="text-5xl mb-4">📂</div>
                  <h3 className="text-lg font-bold text-gray-700">No Resources Found</h3>
                  <p className="text-gray-400 text-sm">Please check back later for curriculum updates.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-gray-100 italic">
                        <th className="pb-6 px-4">#</th>
                        <th className="pb-6 px-4">Asset Details</th>
                        <th className="pb-6 px-4 text-center">Classification</th>
                        <th className="pb-6 px-4 text-right">Access</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {syllabuses.map((syllabus, index) => (
                        <tr
                          key={syllabus._id}
                          className="group hover:bg-teal-50/20 transition-all duration-300"
                        >
                          <td className="py-8 px-4 font-black text-gray-300 text-lg group-hover:text-teal-200 transition-colors">
                            {String(index + 1).padStart(2, '0')}
                          </td>
                          <td className="py-8 px-4">
                            <div className="flex items-center gap-5">
                              <div className="bg-gradient-to-br from-red-50 to-red-100 p-3 rounded-[1rem] shadow-sm transform group-hover:rotate-12 transition-all">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-lg font-black text-gray-800 leading-tight group-hover:text-teal-900 transition-colors">
                                  {syllabus.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">PDF Resource</span>
                                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                  <span className="text-[10px] font-bold text-teal-600 uppercase tracking-wider">Verified Asset</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-8 px-4 text-center">
                            <span className="inline-block px-4 py-1.5 bg-gray-50 text-gray-600 text-[10px] font-black rounded-lg uppercase tracking-widest border border-gray-100 group-hover:bg-teal-100/50 group-hover:border-teal-200 transition-all">
                              {syllabus.category}
                            </span>
                          </td>
                          <td className="py-8 px-4 text-right">
                            <a
                              href={syllabus.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 py-3.5 px-8 bg-gray-900 text-white text-xs font-black rounded-xl shadow-lg hover:bg-teal-700 hover:shadow-teal-100 hover:-translate-y-1 active:translate-y-0 transition-all uppercase tracking-widest"
                            >
                              Get File
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6"/>
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadSyllabus;

;
