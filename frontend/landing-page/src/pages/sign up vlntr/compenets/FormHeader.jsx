import React from 'react';
import styles from './FormHeader.module.css';

const FormHeader = () => {
  return (
    <div>
      <div className={styles.formHeader}>
        <h1 className={styles.title}>Rejoignez le mouvement solidaire</h1>
        <p className={styles.subtitle}>
          Créez votre profil bénévole complet et trouvez des missions qui correspondent à vos valeurs et compétences.
        </p>
      </div>

      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerLine}></div>
      </div>

      <div className={styles.divider}>
        <div className={styles.dividerLine}></div>
        <p className={styles.dividerText}>inscription complète</p>
        <div className={styles.dividerLine}></div>
      </div>
    </div>
  );
};

export default FormHeader;