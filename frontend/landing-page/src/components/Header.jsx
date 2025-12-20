import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../assets/logo.png'

function Header() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpClick = () => {
        setShowModal(true)
    }

    return (
    <header className={styles.header}>
        <div className={styles.container}>
        <div className={styles.leftSection}>
            <div className={styles.logo}>
            <img className={styles.logo_img} src={logo} alt="" />
            </div>
          <nav className={styles.nav}>
            <a href="#">Missions</a>
            <Link to="/signup-org">Organisations</Link>
            <a href="#">A propos nous</a>
          </nav>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.buttons}>
            <button className={styles.loginBtn} onClick={handleLoginClick}>
              Se connecter
            </button>
            <button className={styles.signupBtn} onClick={handleSignUpClick}>
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3>Choisissez votre type d'inscription</h3>
            <div className={styles.modalButtons}>
              <button onClick={() => { navigate('/signup'); setShowModal(false); }}>
                Bénévole
              </button>
              <button onClick={() => { navigate('/signup-org'); setShowModal(false); }}>
                Organisation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header