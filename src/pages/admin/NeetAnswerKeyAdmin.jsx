import React, { useState, useEffect } from "react";
import BASE_URL from "../../config/apiConfig";

const NeetAnswerKeyAdmin = () => {
  const [formData, setFormData] = useState({
    name: "",
  });
  const [questionPaper, setQuestionPaper] = useState(null);
  const [answerKey, setAnswerKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [keysList, setKeysList] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    fetchKeys();
  }, []);

  const fetchKeys = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/answer-key`);
      if (response.ok) {
        const data = await response.json();
        setKeysList(data);
      }
    } catch (error) {
      console.error("Error fetching keys:", error);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!questionPaper || !answerKey) {
      setMessage({ text: "Please select both Question Paper and Answer Key PDFs", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("questionPaper", questionPaper);
    submitData.append("answerKey", answerKey);

    try {
      const response = await fetch(`${BASE_URL}/answer-key`, {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ text: "NEET Answer Key added successfully!", type: "success" });
        setFormData({ name: "" });
        setQuestionPaper(null);
        setAnswerKey(null);
        fetchKeys();
      } else {
        setMessage({ text: data.error || "Failed to add answer key", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Network error. Try again!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this answer key?")) return;

    try {
      const response = await fetch(`${BASE_URL}/answer-key/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMessage({ text: "Deleted successfully!", type: "success" });
        fetchKeys();
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-gray-800 mb-8 tracking-tight">
          NEET <span className="text-teal-600">Answer Key</span> Management
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Key</h2>
              
              {message.text && (
                <div className={`p-4 rounded-xl mb-6 text-sm font-bold ${message.type === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. NEET 2024 Phase 1"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Question Paper (PDF)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setQuestionPaper(e.target.files[0])}
                    className="w-full p-2 border border-gray-200 rounded-xl text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Answer Key (PDF)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setAnswerKey(e.target.files[0])}
                    className="w-full p-2 border border-gray-200 rounded-xl text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 shadow-lg ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700 shadow-teal-200"}`}
                >
                  {loading ? "Uploading..." : "Upload Details"}
                </button>
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-800">Existing Answer Keys</h2>
                <span className="bg-teal-50 text-teal-600 px-4 py-1 rounded-full text-xs font-black uppercase">
                  Total: {keysList.length}
                </span>
              </div>

              {fetchLoading ? (
                <div className="py-20 text-center text-gray-400 font-bold animate-pulse">Loading data...</div>
              ) : keysList.length === 0 ? (
                <div className="py-20 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
                  No answer keys added yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-b border-gray-50">
                        <th className="pb-4 pr-4">S.No</th>
                        <th className="pb-4 pr-4">Name</th>
                        <th className="pb-4 pr-4 text-center">QP</th>
                        <th className="pb-4 pr-4 text-center">AK</th>
                        <th className="pb-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {keysList.map((key, index) => (
                        <tr key={key._id} className="group hover:bg-gray-50/50 transition-colors">
                          <td className="py-5 font-bold text-gray-400 text-sm">{index + 1}</td>
                          <td className="py-5 font-bold text-gray-800">{key.name}</td>
                          <td className="py-5 text-center">
                            <a 
                              href={`${BASE_URL}${key.questionPaperUrl}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-sm"
                              title="Download Question Paper"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </a>
                          </td>
                          <td className="py-5 text-center">
                             <a 
                              href={`${BASE_URL}${key.answerKeyUrl}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex p-2 bg-teal-50 text-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-all shadow-sm"
                              title="Download Answer Key"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </a>
                          </td>
                          <td className="py-5 text-right">
                            <button 
                              onClick={() => handleDelete(key._id)}
                              className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
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
      </div>
    </div>
  );
};

export default NeetAnswerKeyAdmin;
