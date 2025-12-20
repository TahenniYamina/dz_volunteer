import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const benefits = [
    {
      icon: 'check_circle',
      title: 'Visibilité accrue',
      description: 'Faites connaître votre mission auprès de milliers de citoyens engagés.'
    },
    {
      icon: 'group_add',
      title: 'Recrutement simplifié',
      description: 'Trouvez des bénévoles qualifiés qui partagent vos valeurs.'
    },
    {
      icon: 'verified_user',
      title: 'Communauté de confiance',
      description: 'Rejoignez un réseau sécurisé et vérifié de plus de 500 associations.'
    }
  ];

  return (
    <>
      <div className={styles.sidebarCard}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarIconWrapper}>
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <h3 className={styles.sidebarTitle}>Pourquoi nous rejoindre ?</h3>
        </div>

        <ul className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <li key={index} className={styles.benefitItem}>
              <span className={`material-symbols-outlined ${styles.benefitIcon}`}>{benefit.icon}</span>
              <div>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.helpSection}>
          <div className={styles.helpCard}>
            <span className={`material-symbols-outlined ${styles.helpIcon}`}>help</span>
            <div>
              <p className={styles.helpTitle}>Besoin d'aide ?</p>
              contactez le support.
            </div>
          </div>
        </div>
      </div>

      <div className={styles.testimonialCard}>
        <div className={styles.testimonialContent}>
          <p className={styles.testimonialTitle}>Inspirant</p>
          <p className={styles.testimonialText}>
            « Grâce à cette plateforme, nous prévoyons de doubler nos effectifs d'ici quelques mois. »
          </p>
        </div>
      </div>
    </>
  );
}
