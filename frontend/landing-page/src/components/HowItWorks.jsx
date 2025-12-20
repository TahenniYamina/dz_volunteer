import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Comment ça fonctionne</h2>
          <p>
            Commencer est simple. Suivez ces trois étapes faciles pour débuter votre parcours.
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">person_add</span>
            </div>
            <h3>1. Créez votre profil</h3>
            <p>
              Inscrivez-vous en tant que bénévole ou organisation. C'est rapide, facile et gratuit.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">search</span>
            </div>
            <h3>2. Découvrez les correspondances</h3>
            <p>
              Parcourez les opportunités ou trouvez des bénévoles correspondant à votre mission et compétences.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">
                connect_without_contact
              </span>
            </div>
            <h3>3. Commencez le bénévolat</h3>
            <p>
              Connectez-vous, collaborez et commencez à avoir un impact positif dans votre communauté.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
