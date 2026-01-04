import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, Clock, Users, Mail, Phone } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { missionsAPI, applicationsAPI } from '../services/api';
import './MissionDetails.css';

const MissionDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupérer l'ID de la mission depuis l'URL
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    nomComplet: '',
    email: '',
    telephone: '',
    message: ''
  });

  // Charger les détails de la mission
  useEffect(() => {
    if (id) {
      fetchMissionDetails();
    }
  }, [id]);

  const fetchMissionDetails = async () => {
    try {
      setLoading(true);
      const response = await missionsAPI.getById(id);
      setMission(response.data);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
      alert('Mission introuvable');
      navigate('/missions');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // ID du bénévole (à récupérer depuis localStorage après login)
      const volunteerId = localStorage.getItem('userId');
      
      if (!volunteerId) {
        alert('Vous devez être connecté pour postuler');
        navigate('/login');
        return;
      }

      // Créer la candidature
      await applicationsAPI.create({
        mission: parseInt(id),
        volunteer: parseInt(volunteerId)
      });

      alert('Candidature envoyée avec succès !');
      navigate('/dashboard');
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      
      if (error.response?.data) {
        const errorMsg = error.response.data;
        if (typeof errorMsg === 'object') {
          alert(Object.values(errorMsg).join('\n'));
        } else {
          alert(errorMsg);
        }
      } else {
        alert('Erreur lors de l\'envoi de la candidature');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="mission-details-page">
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
          Chargement...
        </div>
      </div>
    );
  }

  if (!mission) {
    return (
      <div className="mission-details-page">
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>
          Mission introuvable
        </div>
      </div>
    );
  }

  return (
    <div className="mission-details-page">
      {/* Header */}
      <header className="mission-details-header">
        <button className="back-btn-mission" onClick={handleBack}>
          <ArrowLeft className="back-icon" />
        </button>
        <h1 className="mission-details-title">{mission.title}</h1>
      </header>

      {/* Main Content */}
      <div className="mission-details-container">
        <div className="mission-details-content">
          {/* Hero Image */}
          <div className="mission-hero">
            <img 
              src={mission.image || `${process.env.PUBLIC_URL}/sol.png`} 
              alt={mission.title} 
              className="mission-hero-image"
              onError={(e) => {
                e.target.src = `${process.env.PUBLIC_URL}/sol.png`;
              }}
            />
          </div>

          {/* Description Section */}
          <div className="mission-section">
            <h2 className="mission-section-title">Description</h2>
            <p className="mission-description-text">{mission.description}</p>
          </div>

          {/* Organisation Section */}
          <div className="mission-section">
            <h2 className="mission-section-title">Organisation</h2>
            <p className="mission-description-text">
              {mission.organization_name || 'Organisation'}
            </p>
          </div>

          {/* Application Form */}
          <div className="mission-section application-section">
            <h2 className="mission-section-title">Postuler pour cette mission</h2>
            
            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-group-mission">
                <label className="form-label-mission">
                  Nom complet <span className="required-asterisk">*</span>
                </label>
                <input
                  type="text"
                  name="nomComplet"
                  value={formData.nomComplet}
                  onChange={handleInputChange}
                  placeholder="Entrer votre nom et prénom"
                  className="form-input-mission"
                  required
                />
              </div>

              <div className="form-group-mission">
                <label className="form-label-mission">
                  Email <span className="required-asterisk">*</span>
                </label>
                <div className="input-with-icon-mission">
                  <Mail className="input-icon-mission" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Entrer votre adresse email"
                    className="form-input-mission with-icon-mission"
                    required
                  />
                </div>
              </div>

              <div className="form-group-mission">
                <label className="form-label-mission">
                  Téléphone <span className="required-asterisk">*</span>
                </label>
                <div className="input-with-icon-mission">
                  <Phone className="input-icon-mission" />
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="Entrer votre N° de téléphone"
                    className="form-input-mission with-icon-mission"
                    required
                  />
                </div>
              </div>

              <div className="form-group-mission">
                <label className="form-label-mission">Message (optionnel)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Parlez sur vos motivations"
                  className="form-textarea-mission"
                  rows={4}
                />
              </div>

              <button 
                type="submit" 
                className="submit-candidature-btn"
                disabled={submitting}
              >
                {submitting ? 'Envoi en cours...' : 'Envoyer ma candidature'}
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="mission-details-sidebar">
          <div className="mission-info-card">
            <div className="info-item">
              <MapPin className="info-icon green-icon" />
              <div>
                <p className="info-label">Localisation</p>
                <p className="info-value">{mission.location}</p>
              </div>
            </div>

            <div className="info-item">
              <Calendar className="info-icon green-icon" />
              <div>
                <p className="info-label">Date</p>
                <p className="info-value">
                  {new Date(mission.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon green-icon" />
              <div>
                <p className="info-label">Durée</p>
                <p className="info-value">Une journée</p>
              </div>
            </div>

            <div className="info-item">
              <Users className="info-icon green-icon" />
              <div>
                <p className="info-label">Participants</p>
                <p className="info-value">
                  {mission.enrolled_count || 0}/{mission.slots}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MissionDetails;