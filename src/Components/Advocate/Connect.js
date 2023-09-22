import React from 'react';
import { FiVideo, FiMic, FiPhone, FiMessageSquare } from 'react-icons/fi';

const Connect = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-900 p-2 text-white flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">Meeting Room: ABC123</h1>
          <p className="text-xs">Hosted by Karthikeyan</p>
        </div>
        <div className="space-x-4">
          <button className="text-yellow-500 hover:text-yellow-300">
            <FiVideo className="text-lg" />
          </button>
          <button className="text-red-500 hover:text-red-300">
            <FiPhone className="text-lg" />
          </button>
          <button className="text-blue-500 hover:text-blue-300">
            <FiMessageSquare className="text-lg" />
          </button>
          <button className="text-green-500 hover:text-green-300">
            <FiMic className="text-lg" />
          </button>
        </div>
      </div>
      <div className="flex-grow bg-black relative">
        {/* Video container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg">Video Placeholder</p>
        </div>
        {/* Controls */}
        <div className="absolute bottom-4 left-4 flex space-x-4">
          <button className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200">
            <FiMic className="text-lg" />
          </button>
          <button className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200">
            <FiVideo className="text-lg" />
          </button>
          <button className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600">
            End Call
          </button>
          <button className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200">
            <FiMessageSquare className="text-lg" />
          </button>
          <button className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
