import React, { useState, useEffect } from 'react';
import Header from './compenets/Header';
import FormHeader from './compenets/FormHeader';
import InputField from './compenets/InputField';
import SelectField from './compenets/SelectField';
import TextareaField from './compenets/TextareaField';
import CheckboxGroup from './compenets/CheckboxGroup';
import FormFooter from './compenets/FormFooter';
import RightSection from './compenets/RightSection';
import SectionTitle from './compenets/SectionTitle';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    interests: [],
    skills: [],
    availability: '',
    experience: '',
    motivation: '',
    languages: [],
    education: '',
    emergencyContact: '',
    emergencyPhone: '',
    hasTransport: '',
    dietaryRestrictions: '',
    medicalInfo: '',
    agreed: false,
  });

  const [focusedField, setFocusedField] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      const formElement = document.querySelector('.leftSection');
      if (formElement) {
        formElement.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };
    document.addEventListener('wheel', handleWheel);
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  const interestOptions = [
    'Environnement',
    'Éducation',
    'Santé',
    'Social',
    'Culture',
    'Sport',
    'Animaux',
    'Technologie',
  ];

  const skillOptions = [
    'Communication',
    'Organisation',
    'Enseignement',
    'Informatique',
    'Cuisine',
    'Bricolage',
    'Premiers secours',
    'Langues étrangères',
  ];

  const languageOptions = [
    'Français',
    'Anglais',
    'Arabe',
    'Espagnol',
    'Allemand',
    'Italien',
    'Chinois',
    'Autre',
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(i => i !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Inscription réussie ! Bienvenue dans notre communauté de bénévoles.');
  };

  return (
    <div className="container">

      <div className="leftSection">
        <Header />

        <main className="mainContent">
          <div className="formWrapper">
            <FormHeader />

            <div className="formFields">

              <SectionTitle>📋 Informations personnelles</SectionTitle>

              <div className="formRow">
                <InputField
                  label="Prénom"
                  name="firstName"
                  icon="person"
                  placeholder="Votre prénom"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />

                <InputField
                  label="Nom"
                  name="lastName"
                  icon="badge"
                  placeholder="Votre nom"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              <div className="formRow">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  icon="mail"
                  placeholder="votre@email.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />

                <InputField
                  label="Téléphone"
                  name="phone"
                  type="tel"
                  icon="phone"
                  placeholder="+213 6 12 34 56 78"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              <div className="formRow">
                <InputField
                  label="Mot de passe"
                  name="password"
                  icon="lock"
                  placeholder="••••••••"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                  hint="Au moins 8 caractères"
                  showPasswordToggle
                  showPassword={showPassword}
                  onPasswordToggle={() => setShowPassword(!showPassword)}
                />

                <InputField
                  label="Confirmer le mot de passe"
                  name="confirmPassword"
                  icon="lock_reset"
                  placeholder="••••••••"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                  showPasswordToggle
                  showPassword={showConfirmPassword}
                  onPasswordToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>

              <div className="formRow">
                <InputField
                  label="Date de naissance"
                  name="dateOfBirth"
                  type="date"
                  icon="cake"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />

                <SelectField
                  label="Genre"
                  name="gender"
                  icon="wc"
                  required
                  value={formData.gender}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                  options={[
                    { value: '', label: 'Sélectionner' },
                    { value: 'homme', label: 'Homme' },
                    { value: 'femme', label: 'Femme' },

                  ]}
                />
              </div>

              <InputField
                label="Nationalité"
                name="nationality"
                icon="flag"
                placeholder="Ex: Française"
                value={formData.nationality}
                onChange={handleInputChange}
                focusedField={focusedField}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField('')}
              />

              <SectionTitle>📍 Adresse</SectionTitle>

              <InputField
                label="Adresse complète"
                name="address"
                icon="home"
                placeholder="Numéro et nom de rue"
                value={formData.address}
                onChange={handleInputChange}
                focusedField={focusedField}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField('')}
              />

              <div className="formRow">
                <InputField
                  label="Ville"
                  name="city"
                  icon="location_city"
                  placeholder="Votre ville"
                  value={formData.city}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />


              </div>

              <SectionTitle>💼 Profil bénévole</SectionTitle>

              <CheckboxGroup
                label="Centres d'intérêt"
                required
                options={interestOptions}
                selectedValues={formData.interests}
                onToggle={(value) => handleMultiSelect('interests', value)}
              />

              <CheckboxGroup
                label="Compétences"
                options={skillOptions}
                selectedValues={formData.skills}
                onToggle={(value) => handleMultiSelect('skills', value)}
              />

              <CheckboxGroup
                label="Langues parlées"
                options={languageOptions}
                selectedValues={formData.languages}
                onToggle={(value) => handleMultiSelect('languages', value)}
              />

              <div className="formRow">
                <SelectField
                  label="Disponibilité"
                  name="availability"
                  icon="schedule"
                  required
                  value={formData.availability}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                  options={[
                    { value: '', label: 'Sélectionner' },
                    { value: 'weekdays', label: 'En semaine' },
                    { value: 'weekends', label: 'Week-ends' },
                    { value: 'evenings', label: 'Soirées' },
                    { value: 'flexible', label: 'Flexible' },
                  ]}
                />

                <SelectField
                  label="Niveau d'études"
                  name="education"
                  icon="school"
                  value={formData.education}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                  options={[
                    { value: '', label: 'Sélectionner' },
                    { value: 'college', label: 'Collège' },
                    { value: 'lycee', label: 'Lycée' },
                    { value: 'bac', label: 'Baccalauréat' },
                    { value: 'bac+2', label: 'Bac+2' },
                    { value: 'bac+3', label: 'Bac+3/Licence' },
                    { value: 'bac+5', label: 'Bac+5/Master' },
                    { value: 'doctorat', label: 'Doctorat' },
                  ]}
                />
              </div>

              <TextareaField
                label="Expérience de bénévolat"
                name="experience"
                placeholder="Décrivez vos expériences passées en bénévolat (organisations, missions, durée)..."
                value={formData.experience}
                onChange={handleInputChange}
                focusedField={focusedField}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField('')}
              />

              <TextareaField
                label="Votre motivation"
                name="motivation"
                placeholder="Qu'est-ce qui vous motive à devenir bénévole ? Qu'aimeriez-vous apporter ?"
                required
                value={formData.motivation}
                onChange={handleInputChange}
                focusedField={focusedField}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField('')}
              />

              <SectionTitle>🚗 Informations pratiques</SectionTitle>

              <div className="formRow">
                <InputField
                  label="Contact d'urgence"
                  name="emergencyContact"
                  icon="contact_emergency"
                  placeholder="Nom de la personne"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />

                <InputField
                  label="Téléphone d'urgence"
                  name="emergencyPhone"
                  type="tel"
                  icon="emergency"
                  placeholder="+213 6 12 34 56 78"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              <div className="formRow">
                <SelectField
                  label="Moyen de transport"
                  name="hasTransport"
                  icon="directions_car"
                  value={formData.hasTransport}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                  options={[
                    { value: '', label: 'Sélectionner' },
                    { value: 'voiture', label: 'Voiture personnelle' },
                    { value: 'velo', label: 'Vélo' },
                    { value: 'transports', label: 'Transports en commun' },
                    { value: 'aucun', label: 'Aucun' },
                  ]}
                />

                <InputField
                  label="Restrictions alimentaires"
                  name="dietaryRestrictions"
                  icon="restaurant"
                  placeholder="Végétarien, allergies..."
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  focusedField={focusedField}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              <TextareaField
                label="Informations médicales"
                name="medicalInfo"
                placeholder="Allergies, conditions médicales importantes que nous devrions connaître (optionnel et confidentiel)"
                value={formData.medicalInfo}
                onChange={handleInputChange}
                focusedField={focusedField}
                onFocus={setFocusedField}
                onBlur={() => setFocusedField('')}
                hint="Ces informations sont confidentielles et utilisées uniquement pour votre sécurité"
              />

              <FormFooter
                agreed={formData.agreed}
                onAgreementChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
          <RightSection />

        </main>
      </div>

    </div>
  );
};

export default App;
