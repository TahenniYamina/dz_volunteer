import React from 'react'
import styles from './Stats.module.css'

function Stats() {
  const stats = [
    { icon: 'groups', value: 'Notre objectif', label: 'Créer une grande communauté solidaire' },
    { icon: 'handshake', value: 'Notre mission', label: 'Connecter bénévoles et associations' },
    { icon: 'schedule', value: 'Engagement', label: 'Encourager le bénévolat durable' },
    { icon: 'savings', value: 'Impact', label: 'Générer un changement positif' }
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <span className="material-symbols-outlined">{stat.icon}</span>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats