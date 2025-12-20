import React from 'react'
import styles from './SDGs.module.css'

function SDGs() {
  const goals = [
    { number: '01', title: 'Pas de pauvreté', icon: 'family_restroom', color: '#24c8e5ff' },
    { number: '02', title: 'Faim "Zéro"', icon: 'restaurant', color: '#DDA63A' },
    { number: '03', title: 'Bonne santé et bien-être', icon: 'cardiology', color: '#4C9F38' },
    { number: '04', title: 'Éducation de qualité', icon: 'school', color: '#2519c5ff' },
    { number: '05', title: 'Égalité entre les sexes', icon: 'female', color: '#ff21e5ff' },
    { number: '06', title: 'Eau propre et assainissement', icon: 'scuba_diving', color: '#0A97D9' },
    { number: '07', title: 'Énergie propre et d’un coût abordable', icon: 'forest', color: '#56C02B' },
    { number: '08', title: 'Travail décent et croissance économique', icon: 'restaurant', color: '#DDA63A' },
    { number: '09', title: 'Industrie, innovation et infrastructure', icon: 'family_restroom', color: '#E5243B' },
    { number: '10', title: 'Inégalités réduites', icon: 'restaurant', color: '#DDA63A' },
    { number: '11', title: 'Villes et communautés durables', icon: 'cardiology', color: '#4C9F38' },
    { number: '12', title: 'Consommation et production responsables', icon: 'public', color: '#897c39ff' },
    { number: '13', title: 'Lutte contre les changements climatiques', icon: 'scuba_diving', color: '#0A97D9' },
    { number: '14', title: 'Vie aquatique', icon: 'forest', color: '#a22bc0ff' },
    { number: '15', title: 'Vie terrestre', icon: 'restaurant', color: '#dd3a3aff' },
    { number: '16', title: 'Partenariats pour la réalisation des objectifs', icon: 'public', color: '#3F7E44' },
    { number: '17', title: 'Partenariats pour la réalisation des objectifs', icon: 'scuba_diving', color: '#0A97D9' },


  ]

  return (
    <section className={styles.sdgs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Nous soutenons les 17 ODD</h2>
          <p>Objectifs de Développement Durable des Nations Unies</p>
        </div>
      </div>
      
      <div className={styles.scrollContainer}>
        <div className={styles.cardsWrapper}>
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ backgroundColor: goal.color }}
            >
              <span className={styles.number}>{goal.number}</span>
              <div className={styles.title}>{goal.title}</div>
              <span className={`material-symbols-outlined ${styles.icon}`}>{goal.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SDGs