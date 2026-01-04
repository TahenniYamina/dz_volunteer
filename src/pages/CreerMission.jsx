import React, { useState, useEffect } from 'react';
import { ArrowLeft, Bell, Settings, Calendar, MapPin, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { missionsAPI, oddsAPI, skillsAPI } from '../services/api';
import './CreerMission.css';

const CreerMission = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [odds, setOdds] = useState([]);
  const [skills, setSkills] = useState([]);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    slots: '',
    odd: '',
    skills_required: []
  });

  // Charger les ODD et Skills au montage
  useEffect(() => {
    fetchOddsAndSkills();
  }, []);

  const fetchOddsAndSkills = async () => {
    try {
      const [oddsResponse, skillsResponse] = await Promise.all([
        oddsAPI.getAll(),
        skillsAPI.getAll()
      ]);
      setOdds(oddsResponse.data);
      setSkills(skillsResponse.data);
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = (skillId) => {
    setFormData(prev => ({
      ...prev,
      skills_required: prev.skills_required.includes(skillId)
        ? prev.skills_required.filter(id => id !== skillId)
        : [...prev.skills_required, skillId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Créer la mission via l'API
      const response = await missionsAPI.create({
        title: formData.title,
        description: formData.description,
        location: formData.location,
        date: formData.date,
        slots: parseInt(formData.slots),
        odd: formData.odd ? parseInt(formData.odd) : null,
        skills_required: formData.skills_required,
        is_archived: false
      });

      alert('Mission créée avec succès !');
      navigate('/dashboard-organisation');
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      alert('Erreur lors de la création de la mission. Vérifiez que vous êtes connecté.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="creer-mission-page">
      {/* Header */}
      <header className="creer-mission-header">
        <div className="header-left-creer">
          <img src={`${process.env.PUBLIC_URL}/volunteeractivism.png`} alt="Logo" className="logo-creer" />
          <span className="logo-text-creer">BÉNÉVOLE DZ</span>
        </div>
        <div className="header-right-creer">
          <button className="header-icon-btn-creer">
            <Bell className="header-icon-creer" />
          </button>
          <button className="header-icon-btn-creer">
            <Settings className="header-icon-creer" />
          </button>
          <div className="user-badge-creer">EA</div>
          <div className="user-info-creer">
            <p className="user-name-creer">Ecologie Algérie</p>
            <p className="user-type-creer">Organisation</p>
          </div>
          <button className="logout-btn-creer">🚪</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="creer-mission-container">
        {/* Title Section */}
        <div className="creer-title-section">
          <button className="back-btn-creer" onClick={handleBack}>
            <ArrowLeft className="back-icon-creer" />
          </button>
          <div>
            <h1 className="creer-main-title">Créer une nouvelle mission</h1>
            <p className="creer-subtitle">Remplissez les informations pour publier votre mission de bénévolat.</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="creer-mission-form">
          {/* Information de base */}
          <div className="form-section-creer">
            <h2 className="section-title-creer">Information de base</h2>

            <div className="form-group-creer">
              <label className="form-label-creer">
                Titre de la mission <span className="required-red">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Ex : Nettoyage des plages"
                className="form-input-creer"
                required
              />
            </div>

            <div className="form-group-creer">
              <label className="form-label-creer">
                Objectif de Développement Durable (ODD)
              </label>
              <select
                name="odd"
                value={formData.odd}
                onChange={handleInputChange}
                className="form-input-creer"
              >
                <option value="">Sélectionner un ODD (optionnel)</option>
                {odds.map(odd => (
                  <option key={odd.id} value={odd.id}>
                    {odd.code} - {odd.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group-creer">
              <label className="form-label-creer">
                Description de la mission <span className="required-red">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Décrivez la mission en détail..."
                className="form-textarea-creer"
                rows={4}
                required
              />
            </div>
          </div>

          {/* Détails & Localisation */}
          <div className="form-section-creer">
            <h2 className="section-title-creer">Détails & Localisation</h2>

            <div className="form-group-creer">
              <label className="form-label-creer">
                <MapPin className="label-icon" /> Localisation <span className="required-red">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Ex : Sidi Fredj, Alger"
                className="form-input-creer"
                required
              />
            </div>

            <div className="form-row-creer">
              <div className="form-group-creer flex-1">
                <label className="form-label-creer">
                  <Calendar className="label-icon" /> Date <span className="required-red">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="form-input-creer"
                  required
                />
              </div>

              <div className="form-group-creer flex-1">
                <label className="form-label-creer">
                  Nombre de bénévoles requis <span className="required-red">*</span>
                </label>
                <input
                  type="number"
                  name="slots"
                  value={formData.slots}
                  onChange={handleInputChange}
                  placeholder="Ex : 30"
                  className="form-input-creer"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>

          {/* Compétences requises */}
          <div className="form-section-creer">
            <h2 className="section-title-creer">Compétences requises (optionnel)</h2>
            <p className="section-subtitle-creer">Sélectionnez les compétences nécessaires</p>

            <div className="competences-grid">
              {skills.map((skill) => (
                <button
                  key={skill.id}
                  type="button"
                  className={`competence-btn ${formData.skills_required.includes(skill.id) ? 'active' : ''}`}
                  onClick={() => handleSkillToggle(skill.id)}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-mission-btn" disabled={loading}>
            {loading ? 'Création en cours...' : 'Publier la mission'}
          </button>
        </form>

        {/* Tips Card */}
        <div className="tips-card">
          <div className="tips-header">
            <Lightbulb className="tips-icon" />
            <h3 className="tips-title">Conseils pour créer une mission attractive</h3>
          </div>
          <ul className="tips-list">
            <li>• Soyez précis sur les tâches et le déroulement de la mission</li>
            <li>• Indiquez clairement le lieu de rendez-vous et les horaires</li>
            <li>• Mentionnez si du matériel sera fourni ou si les bénévoles doivent apporter quelque chose</li>
            <li>• Sélectionnez uniquement les compétences vraiment nécessaires</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreerMission;