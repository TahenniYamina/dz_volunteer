import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import './Missions.css';

const Missions = () => {
  const [selectedFilters, setSelectedFilters] = useState(['Toutes']);

  const missions = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/photo1.jpg`,
      badge: 'Super Organisation',
      urgent: false,
      nouveau: false,
      title: 'Mentorat pour jeunes étudiants',
      organization: 'Association Avenir',
      location: 'Paris (75)',
      description: 'Accompagnez des lycéens issus de quartiers prioritaires pour les aider à construire leur projet d\'avenir. Une...',
      category: 'Education',
      frequency: '2h / semaine',
      time: 'Il y a 2 jours'
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/photo2.jpg`,
      badge: null,
      urgent: true,
      nouveau: false,
      title: 'Plantation d\'arbres urbains',
      organization: 'Green Planet',
      location: 'Lyon (69)',
      description: 'Rejoignez notre grande opération de végétalisation ce week-end. Matériel fourni, bonne humeur garantie !',
      category: 'Environnement',
      frequency: 'Ce week-end',
      time: 'Il y a 4 heures'
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/photo3.jpg`,
      badge: null,
      urgent: false,
      nouveau: false,
      title: 'Création de site web Wordpress',
      organization: 'La Croix Rouge',
      location: 'National',
      description: 'Nous cherchons un bénévole expert Wordpress pour refondre la page de notre antenne locale.',
      category: 'Tech',
      frequency: 'Flexible',
      time: 'Hier',
      remote: true
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/photo4.jpg`,
      badge: null,
      urgent: false,
      nouveau: true,
      title: 'Distribution alimentaire',
      organization: 'Les Restos du Cœur',
      location: 'Marseille (13)',
      description: 'Aidez-nous à trier et distribuer des repas chauds aux personnes dans le besoin chaque soir.',
      category: 'Social',
      frequency: 'Récurrent',
      time: 'Il y a 10 min'
    }
  ];

  return (
    <div className="missions-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">1 240 opportunités pour changer les choses aujourd'hui.</h1>
        <p className="hero-subtitle">
          Rejoignez une communauté de 50 000 bénévoles engagés pour un impact positif local et global.
        </p>
      </div>

      <div className="missions-container">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3 className="filters-title">Filtres</h3>
            <button className="reset-btn">Réinitialiser</button>
          </div>

          {/* Localisation */}
          <div className="filter-section">
            <h4 className="filter-label">Localisation</h4>
            <div className="location-input">
              <MapPin className="location-icon" />
              <input type="text" placeholder="Ville ou code postal" />
              <button className="locate-btn">⊕</button>
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
              <span className="missions-count">145 missions trouvées</span>
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
            {missions.map((mission) => (
              <div key={mission.id} className="mission-card-item">
                <div className="mission-image-container">
                  <img src={mission.image} alt={mission.title} className="mission-image" />
                  {mission.badge && (
                    <span className="mission-badge super-org">⭐ {mission.badge}</span>
                  )}
                  {mission.urgent && (
                    <span className="mission-badge urgent">⚡ Urgent</span>
                  )}
                  {mission.nouveau && (
                    <span className="mission-badge nouveau">✨ Nouveau</span>
                  )}
                  <button className="favorite-btn">
                    <Heart className="heart-icon" />
                  </button>
                </div>

                <div className="mission-card-content">
                  <div className="mission-card-header">
                    <h3 className="mission-card-title">{mission.title}</h3>
                    <button className="mission-arrow-btn">→</button>
                  </div>
                  
                  <p className="mission-org-location">
                    {mission.organization} • {mission.location}
                  </p>

                  <p className="mission-description">{mission.description}</p>

                  <div className="mission-meta">
                    <span className="mission-category">
                      {mission.category === 'Education' && '📚'}
                      {mission.category === 'Environnement' && '🌳'}
                      {mission.category === 'Tech' && '💻'}
                      {mission.category === 'Social' && '👥'}
                      {' '}{mission.category}
                    </span>
                    <span className="mission-frequency">
                      {mission.remote && '📍 '}
                      {mission.frequency}
                    </span>
                  </div>

                  <div className="mission-card-footer">
                    <span className="mission-time">{mission.time}</span>
                    <button className="view-mission-btn">Voir la mission</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="load-more-section">
            <button className="load-more-btn">
              Voir plus de missions <ChevronDown className="chevron-icon" />
            </button>
            <p className="missions-info">Affichage de 4 sur 145 missions</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Missions;