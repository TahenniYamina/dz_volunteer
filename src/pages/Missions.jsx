import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronDown, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { missionsAPI } from '../services/api';
import './Missions.css';

const Missions = () => {
  const navigate = useNavigate();
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(['Toutes']);
  const [searchParams, setSearchParams] = useState({
    search: '',
    location: '',
  });

  // Charger les missions au montage du composant
  useEffect(() => {
    fetchMissions();
  }, []);

  const fetchMissions = async () => {
    try {
      setLoading(true);
      const response = await missionsAPI.getAll(searchParams);
      setMissions(response.data);
      setError(null);
    } catch (err) {
      console.error('Erreur lors du chargement des missions:', err);
      setError('Impossible de charger les missions. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchMissions();
  };

  const handleLocationChange = (e) => {
    setSearchParams({ ...searchParams, location: e.target.value });
  };

  const handleReset = () => {
    setSearchParams({ search: '', location: '' });
    fetchMissions();
  };

  const handleMissionClick = (missionId) => {
    navigate(`/mission/${missionId}`);
  };

  if (loading) {
    return (
      <div className="missions-page">
        <Navbar />
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
          Chargement des missions...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="missions-page">
        <Navbar />
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px', color: 'red' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="missions-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">{missions.length} opportunités pour changer les choses aujourd'hui.</h1>
        <p className="hero-subtitle">
          Rejoignez une communauté de 50 000 bénévoles engagés pour un impact positif local et global.
        </p>
      </div>

      <div className="missions-container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3 className="filters-title">Filtres</h3>
            <button className="reset-btn" onClick={handleReset}>
              Réinitialiser
            </button>
          </div>

          {/* Localisation */}
          <div className="filter-section">
            <h4 className="filter-label">Localisation</h4>
            <div className="location-input">
              <MapPin className="location-icon" />
              <input 
                type="text" 
                placeholder="Ville ou code postal" 
                value={searchParams.location}
                onChange={handleLocationChange}
              />
              <button className="locate-btn" onClick={handleSearch}>🔍</button>
            </div>
          </div>

          {/* Préférences */}
          <div className="filter-section">
            <h4 className="filter-label">Préférences</h4>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkbox-text">Missions à distance</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkbox-text">Missions urgentes</span>
            </label>
          </div>

          {/* Compétences */}
          <div className="filter-section">
            <h4 className="filter-label">Compétences</h4>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="checkbox-text">Education & Formation</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkbox-text">Communication</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkbox-text">Gestion de projet</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkbox-text">Santé & Soins</span>
            </label>
            <button className="see-more-btn">+ Voir plus</button>
          </div>

          {/* Causes */}
          <div className="filter-section">
            <h4 className="filter-label">Causes (ODD)</h4>
            <div className="causes-tags">
              <span className="cause-tag">Environnement</span>
              <span className="cause-tag">Pauvreté</span>
              <span className="cause-tag">Égalité</span>
              <span className="cause-tag">Santé</span>
            </div>
          </div>

          {/* Disponibilité */}
          <div className="filter-section">
            <h4 className="filter-label">Disponibilité</h4>
            <select className="availability-select">
              <option>Peu importe</option>
              <option>Ce week-end</option>
              <option>Cette semaine</option>
              <option>Ce mois-ci</option>
            </select>
          </div>
        </aside>

        {/* Main Content */}
        <main className="missions-main">
          {/* Filter Tabs */}
          <div className="filter-tabs-section">
            <div className="tabs-header">
              <span className="missions-count">{missions.length} missions trouvées</span>
              <div className="sort-container">
                <span className="sort-label">Trier par:</span>
                <select className="sort-select">
                  <option>Pertinence</option>
                  <option>Plus récentes</option>
                  <option>Plus proches</option>
                </select>
              </div>
            </div>

            <div className="filter-tabs">
              <button className="filter-tab active">Toutes</button>
              <button className="filter-tab">
                <span className="tab-icon">🌳</span> Environnement
              </button>
              <button className="filter-tab">
                <span className="tab-icon">📚</span> Education
              </button>
              <button className="filter-tab">
                <span className="tab-icon">❤️</span> Santé
              </button>
              <button className="filter-tab">
                <span className="tab-icon">👥</span> Social
              </button>
            </div>
          </div>

          {/* Missions Grid */}
          <div className="missions-grid">
            {missions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
                Aucune mission trouvée. Essayez de modifier vos filtres.
              </div>
            ) : (
              missions.map((mission) => (
                <div key={mission.id} className="mission-card-item">
                  <div className="mission-image-container">
                    <img 
                      src={mission.image || `${process.env.PUBLIC_URL}/photo1.jpg`} 
                      alt={mission.title} 
                      className="mission-image" 
                      onError={(e) => {
                        e.target.src = `${process.env.PUBLIC_URL}/photo1.jpg`;
                      }}
                    />
                    <button className="favorite-btn">
                      <Heart className="heart-icon" />
                    </button>
                  </div>

                  <div className="mission-card-content">
                    <div className="mission-card-header">
                      <h3 className="mission-card-title">{mission.title}</h3>
                      <button 
                        className="mission-arrow-btn"
                        onClick={() => handleMissionClick(mission.id)}
                      >
                        →
                      </button>
                    </div>
                    
                    <p className="mission-org-location">
                      {mission.organization_name || 'Organisation'} • {mission.location}
                    </p>

                    <p className="mission-description">
                      {mission.description.length > 150 
                        ? mission.description.substring(0, 150) + '...'
                        : mission.description
                      }
                    </p>

                    <div className="mission-meta">
                      <span className="mission-category">
                        📅 {new Date(mission.date).toLocaleDateString('fr-FR')}
                      </span>
                      <span className="mission-frequency">
                        👥 {mission.enrolled_count || 0}/{mission.slots} inscrits
                      </span>
                    </div>

                    <div className="mission-card-footer">
                      <button 
                        className="view-mission-btn"
                        onClick={() => handleMissionClick(mission.id)}
                      >
                        Voir la mission
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Load More */}
          {missions.length > 0 && (
            <div className="load-more-section">
              <button className="load-more-btn">
                Voir plus de missions <ChevronDown className="chevron-icon" />
              </button>
              <p className="missions-info">Affichage de {missions.length} missions</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Missions;