import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    axios.get('/api/servers')
      .then(res => setServers(res.data))
      .catch(err => console.log(err));
  }, []);

  const startServer = (id) => {
    axios.post(`/api/servers/start/${id}`)
      .then(res => {
        setServers(servers.map(server => server._id === id ? { ...server, status: 'online' } : server));
      })
      .catch(err => console.log(err));
  };

  const stopServer = (id) => {
    axios.post(`/api/servers/stop/${id}`)
      .then(res => {
        setServers(servers.map(server => server._id === id ? { ...server, status: 'offline' } : server));
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servers.map(server => (
          <div key={server._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{server.server_name}</h2>
            <p className="text-gray-600 mb-4">Status: <span className={server.status === 'online' ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>{server.status}</span></p>
            <div className="flex space-x-4">
              <button onClick={() => startServer(server._id)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
                Start
              </button>
              <button onClick={() => stopServer(server._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md">
                Stop
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
