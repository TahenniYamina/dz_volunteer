import React from 'react';
import styles from './RightSection.module.css';

const RightSection = () => {
  return (
    <div className={styles.rightSection}>
      <div className={styles.rightSectionInner}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4p-VvVXGRUBMXnosIQcSuRa1enQbp6MvajoFGXq6MPIsYsZ-xTGwMULbvtP_Ln8HVJ7cDiRN96eqG994Wq_Qtu_keeLUBHf_ROMjjf7lkocPK1G4FseR4Y6a4FK-kI7xMELXPCa5HVUl8GUUMbdGWySHzwhmI3MJ2sGz_mczk1I_UFWELWFlMPsNRivXZMzKVfgMqOZPK7kn_kPsom1LDkKdyu1cwY__6ezkvOND7DwJAqC_hTCGOpSg-A-1VGpVGx6Wtdvq8TtY"
          alt="Group of diverse volunteers"
          className={styles.bgImage}
        />
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.floatingCard}>
          <blockquote className={styles.quote}>
            "Grâce à cette plateforme, j'ai trouvé une mission de bénévolat qui correspond parfaitement à mes horaires et mes valeurs. C'est simple, rapide et tellement gratifiant !"
          </blockquote>
          
        </div>
        <div className={styles.tags}>
          <span className={styles.tag}>#Environnement</span>
          <span className={styles.tag}>#Social</span>
          <span className={styles.tag}>#Éducation</span>
          <span className={styles.tag}>#Santé</span>
        </div>
      </div>
    </div>
  );
};

export default RightSection;