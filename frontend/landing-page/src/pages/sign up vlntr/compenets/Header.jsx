import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className={styles.header}>
          <Link to="/">
            <img className={styles.logo} src={Logo} alt="Logo" />
          </Link>
          <div className={styles.headerLink}> Déjà inscrit ?
                    <Link to="/login" className={styles.headerLink}>
        <span className={styles.loginLink}>Se connecter</span>
              </Link>
              

        </div>

    </header>
  );
};

export default Header;