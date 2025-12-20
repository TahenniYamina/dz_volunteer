import React from 'react';
import styles from './FormFooter.module.css';

const FormFooter = ({ agreed, onAgreementChange, onSubmit }) => {
  return (
    <>
      <div className={styles.agreement}>
        <input
          type="checkbox"
          checked={agreed}
          onChange={onAgreementChange}
          className={styles.agreementCheckbox}
          required
        />
        <p className={styles.agreementText}>
          J'accepte les{' '}
          <a href="#" className={styles.link}>conditions d'utilisation</a>
          {' '}et la{' '}
          <a href="#" className={styles.link}>politique de confidentialité</a>.
          Je confirme avoir au moins 16 ans et que toutes les informations fournies sont exactes.
        </p>
      </div>

      <button onClick={onSubmit} className={styles.submitButton}>
        <span>Créer mon compte bénévole</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>

      <div className={styles.footer}>
        <div className={styles.securityBadge}>
          <span className={`material-symbols-outlined ${styles.securityIcon}`}>lock</span>
          <span className={styles.securityText}>Vos données sont protégées et cryptées</span>
        </div>
        <p className={styles.footerText}>
          En vous inscrivant, vous rejoignez une communauté de bénévoles engagés. 
          Vous recevrez un email de confirmation après validation de votre inscription.
        </p>
      </div>
    </>
  );
};

export default FormFooter;