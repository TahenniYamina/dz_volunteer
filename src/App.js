/*import React from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return <Dashboard />;
}

export default App;*/
/*import React from 'react';
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

export default App;*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Missions from './pages/Missions';
import InscriptionOrganisation from './pages/InscriptionOrganisation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/inscription-organisation" element={<InscriptionOrganisation />} />
      </Routes>
    </Router>
  );
}

export default App;*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Missions from './pages/Missions';
import DashboardOrganisation from './pages/DashboardOrganisation';
import MissionDetails from './pages/MissionDetails';
import CreerMission from './pages/CreerMission';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dashboard-organisation" element={<DashboardOrganisation />} />
        <Route path="/mission/:id" element={<MissionDetails />} />
        <Route path="/creer-mission" element={<CreerMission />} />
      </Routes>
    </Router>
  );
}

export default App;