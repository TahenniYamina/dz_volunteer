import React from 'react'
import styles from './TrustBar.module.css'

function TrustBar() {
  const partners = [
    { icon: 'diversity_3', name: 'Croix-Rouge' },
    { icon: 'water_drop', name: 'WWF' },
    { icon: 'volunteer_activism', name: 'Restos du Cœur' },
    { icon: 'school', name: 'Unicef' },
    { icon: 'pets', name: 'SPA' }
  ]

  return (
    <section className={styles.trustBar}>
      <div className={styles.container}>
        <p className={styles.title}>Ils nous font confiance</p>
        <div className={styles.partners}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.partner}>
              <span className="material-symbols-outlined">{partner.icon}</span>
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar