import React, { useState, useEffect } from "react";
import BASE_URL from "../../config/apiConfig";

const ScholarshipTestFormPage = () => {
  const [formData, setFormData] = useState({
    examName: "",
    forClass: "",
    stream: "",
    examDate: "",
    examTime: "",
    fees: "",
    applyLink: ""
  });
  const [syllabusFile, setSyllabusFile] = useState(null);
  const [testList, setTestList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    setFetchLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/scholarship-test`);
      if (response.ok) {
        const data = await response.json();
        setTestList(data);
      }
    } catch (error) {
      console.error("Error fetching tests:", error);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      alert("Please upload only PDF files for the syllabus.");
      e.target.value = null;
      return;
    }
    setSyllabusFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!syllabusFile) {
      alert("Syllabus PDF is required.");
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      submitData.append(key, formData[key]);
    });
    submitData.append("syllabus", syllabusFile);

    try {
      const response = await fetch(`${BASE_URL}/scholarship-test`, {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Scholarship test added successfully!", type: "success" });
        setFormData({
          examName: "",
          forClass: "",
          stream: "",
          examDate: "",
          examTime: "",
          fees: "",
          applyLink: ""
        });
        setSyllabusFile(null);
        e.target.reset();
        fetchTests();
      } else {
        setMessage({ text: data.error || "Failed to add test.", type: "error" });
      }
    } catch (error) {
      console.error("Error adding test:", error);
      setMessage({ text: "Network error. Try again!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this test?")) {
      try {
        const response = await fetch(`${BASE_URL}/scholarship-test/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          fetchTests();
          setMessage({ text: "Test deleted successfully!", type: "success" });
        }
      } catch (error) {
        console.error("Error deleting test:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Section */}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-6">
            <h2 className="text-2xl font-bold text-teal-600 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Add Scholarship Test
            </h2>

            {message.text && (
              <div className={`p-4 rounded-lg mb-6 text-sm font-medium ${message.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Name</label>
                <input
                  type="text"
                  name="examName"
                  placeholder="e.g. HSAT 2025"
                  value={formData.examName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">For Class</label>
                  <select
                    name="forClass"
                    value={formData.forClass}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                    <option value="Dropper">Dropper</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Stream</label>
                  <select
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  >
                    <option value="">Select Stream</option>
                    <option value="Medical">Medical</option>
                    <option value="Non-Medical">Non-Medical</option>
                    <option value="Foundation">Foundation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Date</label>
                  <input
                    type="date"
                    name="examDate"
                    value={formData.examDate}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Time</label>
                  <input
                    type="time"
                    name="examTime"
                    value={formData.examTime}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Fees (₹)</label>
                  <input
                    type="number"
                    name="fees"
                    placeholder="Fees"
                    value={formData.fees}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Syllabus (PDF)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100 border border-gray-200 p-2 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Apply Online Link (Optional)</label>
                <input
                  type="url"
                  name="applyLink"
                  placeholder="https://example.com/apply"
                  value={formData.applyLink}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 shadow-lg ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-200"}`}
                disabled={loading}
              >
                {loading ? "Adding Test..." : "Create Scholarship Test"}
              </button>
            </form>
          </div>
        </div>

        {/* List Section */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 min-h-[600px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-between">
              Existing Tests
              <span className="text-xs bg-gray-100 text-gray-500 py-1 px-3 rounded-full">Total: {testList.length}</span>
            </h2>

            {fetchLoading ? (
              <div className="flex flex-col items-center justify-center py-20 grayscale opacity-50">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-teal-500 border-t-transparent mb-4"></div>
                <p>Loading tests...</p>
              </div>
            ) : testList.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-2xl">
                <p className="text-gray-400 font-medium">No scholarship tests scheduled yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-400 text-xs uppercase tracking-wider border-b">
                      <th className="pb-4 font-semibold">Test Details</th>
                      <th className="pb-4 font-semibold">Schedule</th>
                      <th className="pb-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {testList.map((test) => (
                      <tr key={test._id} className="group hover:bg-gray-50 transition-all">
                        <td className="py-5">
                          <div className="font-bold text-gray-800">{test.examName}</div>
                          <div className="text-xs text-gray-500">
                             For {test.forClass} • {test.stream}
                          </div>
                          <div className="mt-1">
                            <span className="text-xs font-bold text-teal-600">₹{test.fees}</span>
                          </div>
                        </td>
                        <td className="py-5">
                          <div className="text-sm font-medium text-gray-700">
                            {new Date(test.examDate).toLocaleDateString()}
                          </div>
                          <div className="text-xs text-gray-400">{test.examTime}</div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end gap-2">
                             <a 
                               href={test.syllabus} 
                               target="_blank" 
                               rel="noreferrer"
                               className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                               title="View Syllabus"
                             >
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                               </svg>
                             </a>
                             <button 
                               onClick={() => handleDelete(test._id)}
                               className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                               title="Delete Test"
                             >
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                               </svg>
                             </button>
                          </div>
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
  );
};

export default ScholarshipTestFormPage;
