import React from 'react';

const ServerSettings = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Server Settings</h2>
        <form className="flex flex-col">
          <label className="text-gray-700 font-bold mb-2">Server Name</label>
          <input
            type="text"
            placeholder="My Awesome Server"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition ease-in-out duration-150"
          />

          <label className="text-gray-700 font-bold mb-2">Game Type</label>
          <select className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition ease-in-out duration-150">
            <option>Java</option>
            <option>Bedrock</option>
          </select>

          <label className="text-gray-700 font-bold mb-2">Version</label>
          <input
            type="text"
            placeholder="1.19.2"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition ease-in-out duration-150"
          />

          <label className="text-gray-700 font-bold mb-2">RAM (GB)</label>
          <input
            type="number"
            placeholder="2"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 transition ease-in-out duration-150"
          />

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md mt-4 transition ease-in-out duration-150"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServerSettings;
