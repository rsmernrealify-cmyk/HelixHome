import React from 'react';

const DownloadSyllabus = () => {
    const pdfs = [
      { name: 'NEET Course Overview', url: '/path/to/pdf1.pdf' },
      { name: 'Class Room Course Details', url: '/path/to/pdf2.pdf' },
      { name: 'Scholarship Test Guidelines', url: '/path/to/pdf3.pdf' },
    ];
  
    return (
      <div className="p-6 flex flex-col items-center w-full bg-gray-50">
        {/* Heading */}
        <h1 className="text-3xl w-full text-center py-6 text-white font-bold bg-gradient-to-r from-teal-400 to-blue-500 rounded-md shadow-lg">
          Download Syllabus
        </h1>
  
        {/* Syllabus List */}
        <ul className="w-full max-w-3xl mt-6 flex flex-col gap-4 overflow-y-auto bg-white p-6 rounded-md shadow-lg border border-gray-200">
          {pdfs.map((pdf, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-md shadow-sm transition-transform hover:scale-105"
            >
              <span className="text-lg font-semibold text-gray-800">
                {pdf.name}
              </span>
              <a
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-6 bg-teal-500 text-white font-medium rounded-md shadow-sm hover:bg-teal-600 transition-colors"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DownloadSyllabus;
  