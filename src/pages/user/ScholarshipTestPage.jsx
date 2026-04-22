import React, { useState, useEffect } from "react";
import BASE_URL from "../../config/apiConfig";

const ScholarshipTestPage = () => {
  const [testList, setTestList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch(`${BASE_URL}/scholarship-test`);
        if (response.ok) {
          const data = await response.json();
          setTestList(data);
        }
      } catch (error) {
        console.error("Error fetching scholarship tests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const filteredTests = testList.filter((item) =>
    item.examName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.forClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.stream.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-2 tracking-tight">
          Unlock Your <span className="text-teal-600">Potential</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto font-medium text-sm">
          Apply for our upcoming Scholarship Tests (HSAT) and stand a chance to win significant fee waivers for your academic journey.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-lg mx-auto mb-10 relative">
        <input
          type="text"
          placeholder="Search by exam name, class or stream..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3.5 rounded-xl border-none shadow-md focus:ring-4 focus:ring-teal-100 outline-none transition-all pr-12 text-gray-700 text-sm font-medium"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-400 font-bold animate-pulse">Loading tests...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {filteredTests.length === 0 ? (
            <div className="bg-white p-20 text-center rounded-3xl shadow-sm border border-gray-100">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700">No matching tests found</h3>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTests.map((item) => (
                <div
                  key={item._id}
                  className="group bg-white shadow-lg rounded-[1.5rem] overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-1.5 transition-all duration-500"
                >
                  <div className="bg-teal-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                    <div className="relative z-10">
                      <span className="inline-block px-2.5 py-0.5 bg-white/20 backdrop-blur-md rounded-lg text-[9px] font-black uppercase tracking-widest mb-2">
                        Upcoming Test
                      </span>
                      <h2 className="text-xl font-black leading-tight line-clamp-1">
                        {item.examName}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-xs py-2 border-b border-gray-50">
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">For Class</span>
                        <span className="font-extrabold text-gray-700 bg-gray-50 px-2.5 py-0.5 rounded-lg">{item.forClass}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs py-2 border-b border-gray-50">
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">Stream</span>
                        <span className="font-extrabold text-gray-700">{item.stream}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs py-2 border-b border-gray-50">
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">Exam Schedule</span>
                        <div className="text-right">
                          <div className="font-extrabold text-gray-800">{new Date(item.examDate).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                          <div className="text-[10px] text-teal-600 font-bold">{item.examTime}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs py-2">
                        <span className="text-gray-400 font-bold uppercase tracking-wider text-[9px]">Exam Fees</span>
                        <span className="text-lg font-black text-gray-900">₹{item.fees}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {item.syllabus && (
                        <a
                          href={item.syllabus}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-3 text-xs font-black text-teal-600 border-2 border-teal-50 border-t-teal-100 rounded-xl hover:bg-teal-50 transition-all flex items-center justify-center gap-2 group/btn"
                        >
                          <svg className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Syllabus Document
                        </a>
                      )}
                      
                      <a
                        href={item.applyLink || "#"}
                        target={item.applyLink ? "_blank" : "_self"}
                        rel={item.applyLink ? "noreferrer" : ""}
                        className={`w-full py-3.5 text-xs font-black text-white rounded-xl shadow-md transition-all flex items-center justify-center gap-2 ${
                            item.applyLink 
                            ? "bg-gray-900 hover:bg-gray-800 hover:-translate-y-0.5" 
                            : "bg-gray-300 cursor-not-allowed pointer-events-none"
                        }`}
                        onClick={(e) => !item.applyLink && e.preventDefault()}
                      >
                        {item.applyLink ? (
                          <>
                            Apply Online Now
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        ) : (
                          "Link Unavailable"
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScholarshipTestPage;
