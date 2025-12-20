import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../assets/logo.png'; 

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>

        <div className={styles.navLinks}>

          <p className={styles.pInscrit}>Déjà inscrit ? <Link to="/login" className={styles.loginLink}>Se connecter</Link></p>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
