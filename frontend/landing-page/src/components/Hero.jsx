import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'
import wallpaper from '../assets/wallpaper.avif'
function Hero() {
  return (
    <section className={styles.hero}>
      <img src={wallpaper} alt="Wallpaper" className={styles.wallpaperImg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined">public</span>
            <span>IMPACT GLOBAL</span>
          </div>
          
          <h1 className={styles.title}>
            Transformez votre temps en <span className={styles.highlight}>impact social</span>
          </h1>
          
          <p className={styles.description}>
            Rejoignez la plus grande communauté de bénévoles engagés. Trouvez des missions locales, 
            développez vos compétences et soutenez les causes qui vous tiennent à cœur.
          </p>
          
          <div className={styles.buttons}>
            <Link to="/signup">
              <button className={styles.primaryBtn}>Trouver une mission</button>
            </Link>
            <Link to="/signup-org">
              <button className={styles.secondaryBtn}>Proposer une mission</button>
            </Link>
          </div>
          

        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.bgDecoration}></div>
          <div className={styles.imageWrapper}>
            <img 
              src={wallpaper} 
              alt="Groupe de bénévoles" 
            />
          </div>
          <div className={styles.floatingCard}>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined">eco</span>
            </div>
            <div>
              <p className={styles.cardTitle}>Nouvelle mission !</p>
              <p className={styles.cardText}>Rejoindre nous </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero