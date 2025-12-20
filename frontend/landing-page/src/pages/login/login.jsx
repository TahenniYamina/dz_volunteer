import React, { useState } from 'react';
import styles from './login.module.css';
import { useNavigate, Link } from 'react-router-dom';
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };
  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className={styles.pageContainer}>    
      <div className={styles.mainWrapper}>
        <div className={styles.heroSection}>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQESdnSDB211M7_VZbd6iyn7vRbBFAUQYGfH6gyHuWba0hiS58ZnQ8p_impchmjPijbDlpC49CmU9aNMuwO7iRy2yryd-f18CNlI5L7W9320dsY3oNkuliZvvjBSwFUVKBvgqgZv4Dk5bbSxDpCCLpx5ohVAWrTA8-0VKdOHJMx6hmMGxWuESH-v1keC5OmaO22DQ0zCl-DYwfDCS-2obG8aYbyIDx2co5Y4yBvdEjfXBorwps6T2_0fRekz0mjNHFzG_XbnU3sRw" 
            alt="Volunteers planting trees together"
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay}></div>
          
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.badge}>
                <span className="material-icons-outlined">volunteer_activism</span>
              </div>

              <h1 className={styles.heroTitle}>
                Transformons l'engagement citoyen en impact réel.
              </h1>

              <p className={styles.heroDescription}>
                Découvrez des opportunités de bénévolat qui comptent, connectez-vous avec des causes sociales et participez au développement durable de notre communauté.
              </p>

              <div className={styles.socialProof}>
                <div className={styles.socialProofText}>
                  <p className={styles.socialProofTitle}>Communauté active</p>
                  <p className={styles.socialProofSubtitle}>Des milliers d'actions chaque jour</p>
                </div>
              </div>
            </div>

            <div className={styles.heroFooter}>
              <p>© 2025 Benevolat Platform</p>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Bon retour parmi nous !</h2>
              <p className={styles.formSubtitle}>
                Veuillez entrer vos coordonnées pour accéder à votre espace bénévole.
              </p>
            </div>

            <div className={styles.divider}>
              <div className={styles.dividerLine}></div>
              <span className={styles.dividerText}>avec votre email</span>
              <div className={styles.dividerLine}></div>
            </div>

            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Adresse email
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`material-icons-outlined ${styles.inputIcon}`}>mail</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="vous@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.formLabel}>
                  Mot de passe
                </label>
                <div className={styles.inputWrapper}>
                  <span className={`material-icons-outlined ${styles.inputIcon}`}>lock</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={styles.formInput}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-icons-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              <div className={styles.formOptions}>
                <div className={styles.rememberMe}>
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me">Se souvenir de moi</label>
                </div>
                <a href="#" className={styles.forgotPassword}>
                  Mot de passe oublié ?
                </a>
              </div>

              <button type="submit" className={styles.submitButton}>
                Se connecter
              </button>
            </form>

            <div className={styles.signupLink}>
              <p>
                Pas encore membre ?
                <a href="#" onClick={handleSignUpClick}>Créer un compte gratuitement</a>
                <br/>
                <a href="#" onClick={handleSignUpClick}>Bénévole /</a>
                <Link to="/signup-org">/ Organisation</Link>
              </p>
            </div>

            <div className={styles.mobileFooter}>
              <p>© 2025 Benevolat Platform. Tous droits réservés.</p>
            </div>
          </div>

          <div className={styles.decorBottom}></div>
          <div className={styles.decorTop}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;