import React, { useState } from 'react';

const Research = () => {
  const [caseId, setCaseId] = useState('');
  const [proceedingInfo, setProceedingInfo] = useState('');

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
    const { value } = event.target;
    setCaseId(value); // Update the caseId state with the input value
  };

  const searchCase = (caseId) => {
    const foundCase = dummySearchResults.find((result) => result.caseId === caseId);
    return foundCase;
  };

  const handleSearch = () => {
    const result = searchCase(caseId);
    if (result) {
      // If the case is found, set the proceedingInfo state with case details.
      setProceedingInfo(`Case ID: ${result.caseId}\nReference: ${result.reference}`);
    } else {
      // If the case is not found, set proceedingInfo state accordingly.
      setProceedingInfo('Case not found.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Case Verification</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Case ID"
          value={caseId} // Bind the input value to the caseId state
          onChange={handleInputChange} // Update the caseId state when the input changes
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-400"
      >
        Verify Case
      </button>

      <div className="mt-4 p-4 border rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Verification Result</h3>
        <p>{proceedingInfo}</p>
      </div>
    </div>
  );
};

export default Research;
