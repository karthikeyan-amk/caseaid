import React, { useState } from 'react';

const Research = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [searchResults, setSearchResults] = useState([]);

  // Dummy search results from history
  const dummySearchResults = [
    {
      caseId: '12345',
      reference: 'Lorem ipsum reference 1...',
    },
    {
      caseId: '54321',
      reference: 'Lorem ipsum reference 2...',
    },
    {
      caseId: '98765',
      reference: 'Lorem ipsum reference 3...',
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults(dummySearchResults);
  };  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">NLP-Based Search</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Detailed Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Search Results</h3>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Case ID</th>
            <th className="py-2 px-4 text-left">Reference</th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {searchResults.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-300'}>
              <td className="py-2 px-4">{result.caseId}</td>
              <td className="py-2 px-4">{result.reference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Research;
