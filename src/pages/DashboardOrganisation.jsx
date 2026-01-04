import React, { useState, useEffect } from 'react';
import { Bell, Settings, Plus, Eye, Edit, Trash2, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { missionsAPI, applicationsAPI } from '../services/api';
import './DashboardOrganisation.css';

const DashboardOrganisation = () => {
  const [missions, setMissions] = useState([]);
  const [candidatures, setCandidatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    activeMissions: 0,
    totalVolunteers: 0,
    totalHours: 0,
    pendingApplications: 0
  });

  // ID de l'organisation (à récupérer depuis le contexte/localStorage après login)
  const organizationId = localStorage.getItem('userId') || 1;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Récupérer les missions de l'organisation
      const missionsResponse = await missionsAPI.getByOrganization(organizationId);
      setMissions(missionsResponse.data);
      
      // Récupérer les candidatures en attente
      const applicationsResponse = await applicationsAPI.getPendingForOrganization(organizationId);
      setCandidatures(applicationsResponse.data);
      
      // Calculer les statistiques
      const activeMissions = missionsResponse.data.filter(m => !m.is_archived);
      const totalVolunteers = missionsResponse.data.reduce((sum, m) => sum + (m.enrolled_count || 0), 0);
      
      setStats({
        activeMissions: activeMissions.length,
        totalVolunteers: totalVolunteers,
        totalHours: 850, // À calculer depuis les données réelles
        pendingApplications: applicationsResponse.data.length
      });
      
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
      alert('Erreur lors du chargement des données. Vérifiez que le backend est lancé.');
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    try {
      await applicationsAPI.accept(id);
      fetchData(); // Recharger les données
      alert('Candidature acceptée !');
    } catch (error) {
      console.error('Erreur lors de l\'acceptation:', error);
      alert('Erreur lors de l\'acceptation');
    }
  };

  const handleRefuse = async (id) => {
    try {
      await applicationsAPI.reject(id);
      fetchData(); // Recharger les données
      alert('Candidature refusée');
    } catch (error) {
      console.error('Erreur lors du refus:', error);
      alert('Erreur lors du refus');
    }
  };

  const handleDeleteMission = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette mission ?')) {
      try {
        await missionsAPI.delete(id);
        fetchData();
        alert('Mission supprimée');
      } catch (error) {
        console.error('Erreur lors de la suppression:', error);
        alert('Erreur lors de la suppression');
      }
    }
  };

  const topVolunteers = [
    { id: 1, name: 'Yamina Tahenni', hours: '45h', missions: 8, color: '#f59e0b' },
    { id: 2, name: 'Rahma Jouini', hours: '35h', missions: 7, color: '#8b5cf6' },
    { id: 3, name: 'Fodil Ikram', hours: '31h', missions: 6, color: '#ef4444' }
  ];

  if (loading) {
    return (
      <div className="dashboard-org-page">
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
          Chargement...
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-org-page">
      {/* Header */}
      <header className="dashboard-org-header">
        <div className="header-left">
          <img src={`${process.env.PUBLIC_URL}/volunteeractivism.png`} alt="Logo" className="org-logo" />
          <span className="org-logo-text">BÉNÉVOLE DZ</span>
        </div>
        <div className="header-right">
          <button className="header-icon-btn">
            <Bell className="header-icon" />
          </button>
          <button className="header-icon-btn">
            <Settings className="header-icon" />
          </button>
          <div className="user-badge">
            <span className="user-initials">EA</span>
          </div>
          <div className="user-info-header">
            <p className="user-org-name">Ecologie Algérie</p>
            <p className="user-org-type">Organisation</p>
          </div>
          <button className="logout-btn">
            <span>🚪</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-org-container">
        {/* Title Section */}
        <div className="org-title-section">
          <h1 className="org-main-title">Engagement Citoyen</h1>
          <p className="org-subtitle">Gérez vos missions et recrutez des bénévoles qualifiés</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards-grid">
          <div className="stat-card">
            <div className="stat-icon blue">📋</div>
            <div className="stat-content">
              <p className="stat-value">{stats.activeMissions}</p>
              <p className="stat-label">Mission actives</p>
            </div>
            <TrendingUp className="trend-icon green" />
          </div>

          <div className="stat-card">
            <div className="stat-icon green">👥</div>
            <div className="stat-content">
              <p className="stat-value">{stats.totalVolunteers}</p>
              <p className="stat-label">Bénévoles recrutés</p>
            </div>
            <TrendingUp className="trend-icon green" />
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">📊</div>
            <div className="stat-content">
              <p className="stat-value">{stats.totalHours}h</p>
              <p className="stat-label">Heures d'impact</p>
            </div>
            <TrendingUp className="trend-icon green" />
          </div>

          <div className="stat-card">
            <div className="stat-icon yellow">🔔</div>
            <div className="stat-content">
              <p className="stat-value">{stats.pendingApplications}</p>
              <p className="stat-label">Candidatures en attente</p>
            </div>
            <TrendingUp className="trend-icon orange" />
          </div>
        </div>

        {/* Main Grid */}
        <div className="org-main-grid">
          {/* Left Column - Missions */}
          <div className="org-left-column">
            {/* Mission actives */}
            <div className="section-card">
              <div className="section-header">
                <h2 className="section-title">Mission actives</h2>
                <button className="create-mission-btn">
                  <Plus className="plus-icon" />
                  Créer une mission
                </button>
              </div>

              <div className="missions-list-org">
                {missions.length === 0 ? (
                  <p style={{ textAlign: 'center', padding: '20px' }}>
                    Aucune mission créée. Créez votre première mission !
                  </p>
                ) : (
                  missions.map((mission) => (
                    <div key={mission.id} className="mission-item-org">
                      <div className="mission-header-org">
                        <h3 className="mission-title-org">{mission.title}</h3>
                        <span className={`mission-status ${mission.is_archived ? 'inactive' : 'active'}`}>
                          {mission.is_archived ? 'Archivée' : 'Active'}
                        </span>
                      </div>

                      <div className="mission-info-row">
                        <div className="mission-detail">
                          <MapPin className="detail-icon" />
                          <span>{mission.location}</span>
                        </div>
                        <div className="mission-detail">
                          <Calendar className="detail-icon" />
                          <span>{new Date(mission.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>

                      <div className="progress-section-org">
                        <div className="progress-info-org">
                          <span className="progress-label-org">
                            Bénévoles inscrits {mission.enrolled_count || 0}/{mission.slots}
                          </span>
                          <span className="progress-percentage-org">
                            {mission.slots > 0 ? Math.round(((mission.enrolled_count || 0) / mission.slots) * 100) : 0}%
                          </span>
                        </div>
                        <div className="progress-bar-org">
                          <div 
                            className="progress-fill-org" 
                            style={{ 
                              width: `${mission.slots > 0 ? ((mission.enrolled_count || 0) / mission.slots) * 100 : 0}%` 
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="mission-actions">
                        <button className="action-btn primary">
                          <Eye className="action-icon" />
                          Voir les détails
                        </button>
                        <button className="action-btn-icon">
                          <Edit className="action-icon" />
                        </button>
                        <button 
                          className="action-btn-icon danger"
                          onClick={() => handleDeleteMission(mission.id)}
                        >
                          <Trash2 className="action-icon" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Candidatures en attentes */}
            <div className="section-card">
              <h2 className="section-title">Candidatures en attentes</h2>

              <div className="candidatures-list">
                {candidatures.length === 0 ? (
                  <p style={{ textAlign: 'center', padding: '20px' }}>
                    Aucune candidature en attente.
                  </p>
                ) : (
                  candidatures.map((candidature) => (
                    <div key={candidature.id} className="candidature-item">
                      <div className="candidature-left">
                        <div className="candidature-avatar-placeholder">
                          {candidature.volunteer.username[0].toUpperCase()}
                        </div>
                        <div className="candidature-info">
                          <h4 className="candidature-name">{candidature.volunteer.username}</h4>
                          <p className="candidature-mission">{candidature.mission.title}</p>
                          <p className="candidature-engagement">
                            Candidaté le {new Date(candidature.applied_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      <div className="candidature-actions">
                        <button 
                          className="accept-btn" 
                          onClick={() => handleAccept(candidature.id)}
                        >
                          Accepter
                        </button>
                        <button 
                          className="refuse-btn" 
                          onClick={() => handleRefuse(candidature.id)}
                        >
                          Refuser
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Top Volunteers */}
          <div className="org-right-column">
            {/* Statistiques du mois */}
            <div className="stats-card-purple">
              <h3 className="stats-card-title">Statistiques du mois</h3>
              
              <div className="stat-item-purple">
                <p className="stat-item-label">Nouvelles candidatures</p>
                <p className="stat-item-value">23</p>
              </div>

              <div className="stat-item-purple">
                <p className="stat-item-label">Taux d'acceptation</p>
                <p className="stat-item-value">85%</p>
              </div>

              <div className="stat-item-purple">
                <p className="stat-item-label">Missions complétés</p>
                <p className="stat-item-value">8</p>
              </div>
            </div>

            {/* Meilleurs bénévoles */}
            <div className="section-card">
              <h3 className="section-title">Meilleurs bénévoles</h3>
              
              <div className="top-volunteers-list">
                {topVolunteers.map((volunteer, index) => (
                  <div key={volunteer.id} className="top-volunteer-item">
                    <div className="volunteer-rank" style={{ background: volunteer.color }}>
                      {index + 1}
                    </div>
                    <div className="volunteer-info-top">
                      <h4 className="volunteer-name">{volunteer.name}</h4>
                      <p className="volunteer-stats">{volunteer.hours} ~{volunteer.missions} missions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOrganisation;