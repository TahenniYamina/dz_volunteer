import React from 'react'
import styles from './MissionCard.module.css'

function MissionCard({ mission }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.location}>
          <span className="material-symbols-outlined">location_on</span>
          {mission.location}
        </div>
        <img src={mission.image} alt={mission.title} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.tags}>
          {mission.urgent && (
            <span className={`${styles.tag} ${styles.urgent}`}>Urgent</span>
          )}
          <span className={styles.category}>{mission.category}</span>
        </div>
        
        <h3 className={styles.title}>{mission.title}</h3>
        <p className={styles.description}>{mission.description}</p>
        
        <div className={styles.footer}>
          <div className={styles.organization}>
            <img src={mission.orgLogo} alt={mission.orgName} />
            <span>{mission.orgName}</span>
          </div>
          <div className={styles.duration}>
            <span className="material-symbols-outlined">schedule</span>
            {mission.duration}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionCard