import React, { useState } from 'react';
import LogoUpload from './LogoUpload';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    slogan: '',
    description: '',
    sector: 'Environnement',
    website: '',
    email: '',
    phone: '',
    city: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  return (
    <div className={styles.formCard}>
      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>
          <span className={`material-symbols-outlined ${styles.sectionIcon}`}>badge</span>
          Identité de l'organisation
        </h2>
        <div className={styles.identityRow}>
          <LogoUpload />
          <div className={styles.identityInputs}>
            <label className={styles.inputGroup}>
              <p className={styles.inputLabel}>
                Nom de l'organisation <span className={styles.required}>*</span>
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.textInput}
                placeholder="Ex: Association Pour la Terre"
              />
            </label>
            <label className={styles.inputGroup}>
              <p className={styles.inputLabel}>Slogan (Optionnel)</p>
              <input
                type="text"
                name="slogan"
                value={formData.slogan}
                onChange={handleInputChange}
                className={styles.textInput}
                placeholder="Ex: Agir ensemble pour demain"
              />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <label className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <p className={styles.inputLabel}>
              Description <span className={styles.required}>*</span>
            </p>
            <span className={styles.labelHint}>Min. 100 caractères</span>
          </div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={styles.textareaInput}
            placeholder="Présentez votre mission, vos valeurs et vos actions principales..."
          />
        </label>


      </div>
      <div className={`${styles.formSection} ${styles.sectionDivider}`}>
        <h2 className={styles.sectionTitle}>
          <span className={`material-symbols-outlined ${styles.sectionIcon}`}>contact_mail</span>
          Contact principal
        </h2>
        <div className={styles.contactGrid}>
          <label className={styles.inputGroup}>
            <p className={styles.inputLabel}>Site Web</p>
            <div className={styles.inputWithIcon}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>language</span>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className={`${styles.textInput} ${styles.iconInput}`}
                placeholder="https://www.exemple.org"
              />
            </div>
          </label>

          <label className={styles.inputGroup}>
            <p className={styles.inputLabel}>
              Email de contact <span className={styles.required}>*</span>
            </p>
            <div className={styles.inputWithIcon}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>mail</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${styles.textInput} ${styles.iconInput}`}
                placeholder="contact@exemple.org"
              />
            </div>
          </label>

          <label className={styles.inputGroup}>
            <p className={styles.inputLabel}>Téléphone</p>
            <div className={styles.inputWithIcon}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>call</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`${styles.textInput} ${styles.iconInput}`}
                placeholder="+213 1 23 45 67 89"
              />
            </div>
          </label>

          <label className={styles.inputGroup}>
            <p className={styles.inputLabel}>
              Ville <span className={styles.required}>*</span>
            </p>
            <div className={styles.inputWithIcon}>
              <span className={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`${styles.textInput} ${styles.iconInput}`}
                placeholder="Alger ..."
              />
            </div>
          </label>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button className={`${styles.btnPrimary} ${styles.btnContinue}`}>
          Continuer
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
