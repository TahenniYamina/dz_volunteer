import React from 'react'
import styles from './Testimonials.module.css'
import person1 from '../assets/person1.avif'
import person2 from '../assets/person2.avif'
import person3 from '../assets/person3.avif'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "J'ai rencontré des personnes incroyables et j'ai l'impression d'être vraiment utile à ma communauté.",
      author: 'Mohamed L.',
      role: 'Bénévole',
      initial: 'M',
      color: 'var(--primary)',
      image: person2
    },
    {
      id: 2,
      quote: "C'est facile de trouver une mission qui correspond à mon emploi du temps chargé. Flexibilité totale !",
      author: 'Manal P.',
      role: 'Bénévole ponctuelle',
      initial: 'M',
      color: 'var(--secondary-green)',
      image: person1
    },
    {
      id: 3,
      quote: "Grâce à VolunteerConnect, notre association a trouvé les compétences web dont nous avions besoin.",
      author: 'Wadjdan J.',
      role: "Directeur d'association",
      initial: 'W',
      color: '#fbbf24',
      image: person3
    }
  ]

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>La parole aux bénévoles</h2>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.videoContainer}>
                <img src={testimonial.image} alt="testimonial" />
                
              </div>
              
              <div className={styles.content}>
                <p className={styles.quote}>{testimonial.quote}</p>
                <div className={styles.author}>
                  <div 
                    className={styles.avatar}
                    style={{ 
                      backgroundColor: `${testimonial.color}33`,
                      color: testimonial.color
                    }}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className={styles.name}>{testimonial.author}</p>
                    <p className={styles.role}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials