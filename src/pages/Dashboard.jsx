import React, { useState, useEffect } from 'react';
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
import { applicationsAPI, usersAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    totalHours: 120,
    totalMissions: 15,
    impactScore: 850
  });
  const [loading, setLoading] = useState(true);

  // ID du bénévole (à récupérer depuis le localStorage après login)
  const volunteerId = localStorage.getItem('userId') || 1;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Récupérer les candidatures du bénévole
      const appsResponse = await applicationsAPI.getMyApplications(volunteerId);
      setApplications(appsResponse.data);
      
      // Calculer les stats
      const confirmedMissions = appsResponse.data.filter(app => app.status === 'confirmed');
      const totalHours = appsResponse.data.reduce((sum, app) => sum + (app.hours_validated || 0), 0);
      
      setStats({
        totalHours: totalHours,
        totalMissions: confirmedMissions.length,
        impactScore: totalHours * 10 // Exemple de calcul
      });
      
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard">
        <Navbar />
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
          Chargement...
        </div>
      </div>
    );
  }

  // Filtrer les missions en cours (confirmées)
  const currentMissions = applications.filter(app => app.status === 'confirmed');
  
  // Filtrer les candidatures en attente
  const pendingApplications = applications.filter(app => app.status === 'pending');

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
                value={`${stats.totalHours}h`}
                change="+12%"
              />
              <StatsCard
                icon={<img src="/volunteeractivism.png" alt="Missions" />}
                label="Missions"
                value={stats.totalMissions}
                change="+2"
              />
              <StatsCard
                icon={<img src="/star.png" alt="Impact" />}
                label="Impact Score"
                value={stats.impactScore}
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
                {currentMissions.length === 0 ? (
                  <p style={{ textAlign: 'center', padding: '20px' }}>
                    Vous n'avez pas encore de missions confirmées.
                  </p>
                ) : (
                  currentMissions.slice(0, 2).map((app) => (
                    <MissionCard
                      key={app.id}
                      date={new Date(app.mission.date).getDate()}
                      month={new Date(app.mission.date).toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase()}
                      status="Confirmé"
                      statusColor="status-green"
                      title={app.mission.title}
                      organization={app.mission.organization_name || 'Organisation'}
                      location={app.mission.location}
                      participants=""
                      time=""
                    />
                  ))
                )}
              </div>
            </div>

            <Candidatures applications={pendingApplications} />
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