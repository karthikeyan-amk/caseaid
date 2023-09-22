import React, { useState } from 'react';

import Monitor from './Monitor';
import Research from './Research';
import Connect from './Connect';

function Home() {
  const [selectedOption, setSelectedOption] = useState('Monitor');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Monitor':
        return <Monitor />;
      case 'Research':
        return <Research />;
      case 'Connect':
        return <Connect />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome Judge</h2>

      <div className="mb-4">
        <button
          className={`mr-4 ${
            selectedOption === 'Monitor' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('Monitor')}
        >
          Monitor
        </button>
        <button
          className={`mr-4 ${
            selectedOption === 'Research' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('Research')}
        >
          Research
        </button>
        <button
          className={`mr-4 ${
            selectedOption === 'Connect' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('Connect')}
        >
          Connect
        </button>
      </div>

      {renderComponent()}
    </div>
  );
}

export default Home;
