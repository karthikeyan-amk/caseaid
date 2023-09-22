import React, { useState } from 'react';

import Monitor from './Monitor';
import Research from './Research';
import Connect from './Connect';

function Home() {
  const [selectedOption, setSelectedOption] = useState('monitor');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'monitor':
        return <Monitor />;
      case 'research':
        return <Research />;
      case 'connect':
        return <Connect />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome Advocate</h2>

      <div className="mb-4">
        <button
          className={`mr-4 ${
            selectedOption === 'monitor' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('monitor')}
        >
          Monitor
        </button>
        <button
          className={`mr-4 ${
            selectedOption === 'research' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('research')}
        >
          Research
        </button>
        <button
          className={`mr-4 ${
            selectedOption === 'connect' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('connect')}
        >
          Connect
        </button>
      </div>

      {renderComponent()}
    </div>
  );
}

export default Home;
