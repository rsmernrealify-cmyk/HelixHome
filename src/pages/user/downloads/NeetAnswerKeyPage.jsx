import React, { useState, useEffect } from "react";
import BASE_URL from "../../../config/apiConfig";

const NEETAnswerKeyPage = () => {
  const [keysList, setKeysList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchKeys();
  }, []);

  const fetchKeys = async () => {
    try {
      const response = await fetch(`${BASE_URL}/answer-key`);
      if (response.ok) {
        const data = await response.json();
        setKeysList(data);
      }
    } catch (error) {
      console.error("Error fetching keys:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-12 bg-gray-50 flex flex-col items-center w-full min-h-[50vh]">
      {/* Premium Header Card */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 mb-10">
        <div className="bg-gradient-to-br from-teal-900 to-emerald-900 p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
              NEET <span className="text-emerald-400">Answer Keys</span>
            </h1>
            <p className="text-emerald-50/70 font-medium max-w-2xl mx-auto text-sm md:text-base">
              Comprehensive repository of NEET Question Papers and official Answer Keys to streamline your examination review process.
            </p>
          </div>
        </div>

        {/* Dynamic Content Section */}
        <div className="p-8 md:p-12">
          {loading ? (
            <div className="py-20 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
              <p className="text-gray-400 font-black tracking-widest text-xs uppercase animate-pulse">Syncing data...</p>
            </div>
          ) : keysList.length === 0 ? (
            <div className="py-20 text-center rounded-[2rem] border-2 border-dashed border-gray-100 bg-gray-50/50">
              <div className="text-6xl mb-6 grayscale opacity-30">📄</div>
              <h3 className="text-xl font-bold text-gray-800">Archive Currently Empty</h3>
              <p className="text-gray-400 text-sm mt-2 font-medium">New assessment keys will be published here upon release.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-400 text-[10px] font-black uppercase tracking-[0.25em] italic">
                    <th className="pb-6 px-6">ID</th>
                    <th className="pb-6 px-6">Examination Identity</th>
                    <th className="pb-6 px-6 text-center">Reference</th>
                    <th className="pb-6 px-6 text-right">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {keysList.map((key, index) => (
                    <tr key={key._id} className="group hover:bg-emerald-50/30 transition-all duration-500">
                      <td className="py-8 px-6 font-black text-gray-300 text-lg group-hover:text-emerald-300 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </td>
                      <td className="py-8 px-6">
                        <div className="font-black text-gray-800 text-lg group-hover:text-emerald-900 transition-colors">
                          {key.name}
                        </div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                           Released on {new Date(key.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-8 px-6 text-center">
                        <a 
                          href={`${BASE_URL}${key.questionPaperUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white border-2 border-gray-100 rounded-2xl text-[10px] font-black text-gray-600 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-2xl hover:shadow-emerald-100 transition-all group/btn"
                        >
                          <svg className="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          QUESTION PAPER
                        </a>
                      </td>
                      <td className="py-8 px-6 text-right">
                        <a 
                          href={`${BASE_URL}${key.answerKeyUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2.5 px-7 py-4 bg-gray-900 rounded-[1.25rem] text-[10px] font-black text-white hover:bg-emerald-600 hover:shadow-2xl hover:shadow-emerald-200 hover:-translate-y-1 transition-all group/ans"
                        >
                          <svg className="w-5 h-5 group-hover/ans:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          ANSWER KEY
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NEETAnswerKeyPage;
