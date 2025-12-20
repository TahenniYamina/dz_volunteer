/*import React from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return <Dashboard />;
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Missions from './pages/Missions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
