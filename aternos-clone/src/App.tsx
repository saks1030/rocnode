import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="bg-purple-200 min-h-screen">
        <nav className="bg-purple-800 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <main className="p-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-purple-800">Welcome to Aternos Clone</h1>
    <p className="text-purple-600 mt-4">Create and manage your own Minecraft servers for free.</p>
  </div>
);

export default App;
