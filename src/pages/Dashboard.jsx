/*import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import Skills from '../components/Skills';
import StatsCard from '../components/StatsCard';
import MissionCard from '../components/MissionCard';
import LevelCard from '../components/LevelCard';
import CalendarWidget from '../components/CalendarWidget';
import ApplicationsTable from '../components/ApplicationsTable';
import MessagesWidget from '../components/MessagesWidget';
import './DashboardPage.css';

const DashboardPage = () => {
  const userData = {
    name: 'Thomas Dupont',
    motto: 'Agir pour un monde plus solidaire',
    profileCompletion: 85,
    hours: '120h',
    missions: 15,
    impactScore: 850,
    level: 3,
    skills: ['Gestion de projet', 'Premiers Secours']
  };

  const currentMissions = [
    { month: 'OCT', day: '14', status: 'Confirmé', title: 'Distribution alimentaire', organization: 'Restos du Coeur', location: 'Paris 13ème', participants: 5, time: '14:00 - 18:00' },
    { month: 'HEBDO', day: 'MER', status: 'En cours', title: 'Soutien Scolaire Lycéens', organization: 'Secours Populaire', location: 'Distanciel', participants: 0, time: '' }
  ];

  const applications = [
    { mission: 'Maraude Sociale', association: 'Croix Rouge', date: '18 Oct', status: 'En attente' },
    { mission: 'Collecte Vêtements', association: 'Emmaüs', date: '22 Oct', status: 'Acceptée' }
  ];

  const calendarEvents = [
    { title: 'Distribution alimentaire', time: '14 Oct • 14:00' },
    { title: 'Soutien Scolaire', time: '16 Oct • 17:30' }
  ];

  const messages = [
    { sender: 'Sophie Martin', preview: "Merci pour ton aide hier ! ...", unread: true },
    { sender: 'Marc Dubois', preview: "On se retrouve à 14h ?", unread: true }
  ];

  return (
    <div className="dashboard-page">
      <Header userName={userData.name} />
      <div className="dashboard-container">
        <div className="left-sidebar">
          <ProfileCard user={userData} />
          <Skills skills={userData.skills} />
        </div>

        <div className="main-content">
          <button className="find-mission-btn">🔍 Trouver une mission</button>

          <div className="stats-grid">
            <StatsCard label="Heures totales" value="120h" change="12%" />
            <StatsCard label="Missions" value="15" change="2" />
            <StatsCard label="Impact Score" value="850" />
          </div>

          <div className="missions-section">
            <h2>Missions en cours</h2>
            <div className="missions-list">
              {currentMissions.map((m, i) => <MissionCard key={i} mission={m} />)}
            </div>
          </div>

          <ApplicationsTable applications={applications} />
        </div>

        <div className="right-sidebar">
          <LevelCard level={3} missions={2} nextLevel={4} />
          <CalendarWidget events={calendarEvents} />
          <MessagesWidget messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;*/

import React from 'react';
import { Clock, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';
import Competences from '../components/Competences';
import StatsCard from '../components/StatsCard';
import MissionCard from '../components/MissionCard';
import LevelCard from '../components/LevelCard';
import CalendarComponent from '../components/CalendarComponent';
import Messages from '../components/Messages';
import Candidatures from '../components/Candidatures';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      
      <div className="dashboard-container">
        <div className="welcome-section">
          <h1 className="welcome-title">Bonjour, Thomas ! 👋</h1>
          <p className="welcome-text">Prêt à faire la différence aujourd'hui ?</p>
        </div>

        <div className="dashboard-grid">
          <div className="sidebar-left">
            <ProfileCard />
            <Competences />
          </div>

          <div className="main-content">
            <div className="stats-grid">
              <StatsCard
                icon={<Clock className="stats-icon-svg" />}
                label="Heures totales"
                value="120h"
                change="+12%"
              />
              <StatsCard
                icon={<img src="/volunteeractivism.png" alt="Missions" />}
                label="Missions"
                value="15"
                change="+2"
              />
              <StatsCard
                icon={<img src="/star.png" alt="Impact" />}
                label="Impact Score"
                value="850"
              />
            </div>

            <button className="find-mission-btn">
              <Search className="btn-icon" />
              Trouver une mission
            </button>

            <div className="missions-section">
              <div className="section-header">
                <h2 className="section-title">Missions en cours</h2>
                <a href="#" className="see-all">Voir tout</a>
              </div>
              <div className="missions-list">
                <MissionCard
                  date="14"
                  month="OCT"
                  status="Confirmé"
                  statusColor="status-green"
                  title="Distribution alimentaire"
                  organization="Restos du Cœur"
                  location="Paris 13ème"
                  participants="5"
                  time="14:00 - 18:00"
                />
                <MissionCard
                  date="MER"
                  month="HEBDO"
                  status="En cours"
                  statusColor="status-blue"
                  title="Soutien Scolaire Lycéens"
                  organization="Secours Populaire"
                  location="Distanciel"
                  participants=""
                  time=""
                />
              </div>
            </div>

            <Candidatures />
          </div>

          <div className="sidebar-right">
            <LevelCard />
            <CalendarComponent />
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;