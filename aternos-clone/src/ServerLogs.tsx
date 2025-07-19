import React from 'react';

const ServerLogs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Server Logs</h2>
        <div className="bg-gray-900 text-white font-mono text-sm rounded-md p-4 h-96 overflow-y-scroll">
          <p>[15:31:54] [Server thread/INFO]: Starting minecraft server version 1.19.2</p>
          <p>[15:31:54] [Server thread/INFO]: Loading properties</p>
          <p>[15:31:54] [Server thread/INFO]: Default game type: SURVIVAL</p>
          <p>[15:31:54] [Server thread/INFO]: Generating keypair</p>
          <p>[15:31:55] [Server thread/INFO]: Starting Minecraft server on *:25565</p>
          <p>[15:31:55] [Server thread/INFO]: Using default channel type</p>
          <p>[15:31:56] [Server thread/INFO]: Preparing level "world"</p>
          <p>[15:31:57] [Server thread/INFO]: Preparing start region for dimension minecraft:overworld</p>
          <p>[15:31:58] [Server thread/INFO]: Preparing spawn area: 48%</p>
          <p>[15:31:59] [Server thread/INFO]: Done (3.541s)! For help, type "help"</p>
        </div>
      </div>
    </div>
  );
};

export default ServerLogs;
