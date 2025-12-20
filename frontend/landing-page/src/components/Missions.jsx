import React from 'react'
import MissionCard from './MissionCard'
import styles from './Missions.module.css'

function Missions() {
  const missions = [
    {
      id: 1,
      title: 'Maraude Solidaire - Centre Ville',
      description: 'Rejoignez l\'équipe pour distribuer des repas chauds et des vêtements aux sans-abris du quartier.',
      location: 'Bejeia',
      category: 'Solidarité',
      urgent: true,
      duration: '3h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7mlW5YpcS_YWRztpV3f61NlD6Gi7eyEWZ06wTTPHkI6dDus7S4ap4Ps9RfdTjW3PVVRSCOf2PT0gp1qaveU1UHxibECyNIij1VwUG4TczRprefrCrIHZC72sZwVUgH94peXvhpNiUCA-MWU2icPp18MHF24gtNby0AGlqJo_BEVdY8NrB9nACtZPce0KKKMAo55qfcqbAtnwRH-tOC6yeo_6klR_PNB_RkVZj79m81p6BvQnnnwS8BIGdNS2TZ4iQYUy8wMLS-Ss',
      orgLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxQt8L24dVZ2NsglyqEXvPfNivQE804Lzw4JghdWLqZmz00E05soiczaNnBOfue9GC4ZjSu2EvAb2Yj4fD9GIpilbAJTX8BC1GCV44Ge38-AcPwiB_8zqJNrK1Yo6TomwFUEEvaxJ5qCvOsaE7JpM4QDIv4dyaQRaZHEnJz1NmckEmeEfSUaF9cuFwH2k-xOFK3myw6rY5REcn_ov9DkY-aNomH4g1qg7FjCpZsIuMxt5orC17nyeUP1JUjd6PdRLg6IgFHafMYbs',
      orgName: 'Asso. Cœur Ouvert'
    },
    {
      id: 2,
      title: 'Nettoyage des Berges du Rhône',
      description: 'Opération grand nettoyage pour préserver la biodiversité locale et sensibiliser au tri des déchets.',
      location: 'Alger',
      category: 'Environnement',
      urgent: false,
      duration: '4h',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSj8QiZFpLfLVFo6DjTFajLB1gtMIl0UD-MP5hO4thoH06QPjgjwC65B40wDiHrus5n3iGvCudRlJ9cAQSiVFkEKlydGmzRJxYJCLQd6Yx5AjzDjzeHpYX5DQROlNJSDL6vR_mGF2fQbPg7S2naU0t6Zppz43HZEykm1b96ICwVHn_nyx0CS4JdVyhPyR_u-BDJUQImcrJpjxqdZ_rC3QalcBOOxp7HKZErfina_VjWLBcUa5Lq1BmtDFjgnpSw3lFh3U_GMsHsJI',
      orgLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9336vJxoKXh0e6KpCqQ2fHtFcV2eOzvFhSAJwOBcpx1NEm6a0wQWpkZMuQlTVAvPJ2RNZmErNA_0MTbBMt3UasdYWwmKZSUiVLcgfCx8eqfUPqFuPX5JhUWUJzyn9kgPCjWoX1f03pMmhHiRzJ2p0cAiGJRg8rYJ39FxmiOt8Z4RCBlCCWImyF1eyXWJkkzqfUxdY74zqg2IItUEHnzIrvbS8bAbTuPVbY10Wxj7rbrmFFNhV_uixc5rdUlXfR9wxIVp0UiuQYI4',
      orgName: 'Green Earth'
    },
    {
      id: 3,
      title: 'Mentorat & Soutien Scolaire',
      description: 'Accompagnez un élève en difficulté une heure par semaine en visio pour l\'aider à réussir.',
      location: 'Bouira',
      category: 'Éducation',
      urgent: false,
      duration: '1h/sem',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZHyGnjU7SdDvixPkDn4XTSVZ1ypsav2-GK8yPGtgBMKebTmzMuYkPjjA-jN3hSYnz84GWLVTP3LMPVFNbJRVtb1mQJWWO6WZKg4iLN0tg2jK5_MMWGwppnvUxK8Nmky21PuP4_lUES9fDkD5YFlYkpzgXIq2x5NrkaknU92sQF8UQi7CmmB0StfcjmBupGAhK73X9gSAXjGLFv_gbUoB5GfhYFhJJxr7u4PPPIIl93Q9HV0yIUSwdAr04ktQhbQh-ggSW0tYK6I',
      orgLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-UA9vfBtBOV30TAqC_DntloHsOZoPR6X9eeK-CskCu-x0aAXsx48TLx1tzlsflEDB4NiDtwbomz0FCVXKPVsYiVUXaLAkY-yCogQV9zvOVkT_BYPYXqzeOCBx0ODVcAHOex4JyR6e2VkmfdUc0qxzrGiGWpGoeqMYsYiLqcvcM9MurNWEA2t8goMiRJBnjR2DX3e_8pLUf7rJX8_hr8WZCg7twwUVssED43Iy5lsG0YD8rgmYYD--daxrV0P48kSoAeq1kDpzTiA',
      orgName: 'Réussite Pour Tous'
    }
  ]

  return (
    <section className={styles.missions}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Missions à la une</h2>
            <p className={styles.subtitle}>Découvrez les opportunités de bénévolat près de chez vous.</p>
          </div>
          <a href="#" className={styles.viewAll}>
            Voir toutes les missions
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
        
        <div className={styles.grid}>
          {missions.map(mission => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Missions