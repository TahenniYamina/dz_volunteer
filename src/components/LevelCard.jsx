/*import React from 'react';
import './LevelCard.css';
import badge from '../assets/military.png';
import starIcon from '../assets/star.png';

const LevelCard = ({ level, missions, nextLevel }) => (
  <div className="level-card">
    <div className="level-content">
      <div className="badge">
        <img src={badge} alt="Badge" />
      </div>
      <h3>Niveau {level}:</h3>
      <h4>Ambassadeur</h4>
      <p>Plus que {missions} missions pour le niveau {nextLevel} !</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: '65%' }}></div>
      </div>
      <div className="level-icons">
        <div className="icon"><img src={starIcon} alt="Star" /></div>
        <div className="icon">🌱</div>
        <div className="icon">👥</div>
        <div className="icon">🔒</div>
      </div>
    </div>
  </div>
);

export default LevelCard;*/

import React from 'react';
import { Users } from 'lucide-react';
import './LevelCard.css';

const LevelCard = () => {
  return (
    <div className="level-card">
      <div className="level-badge-container">
        <div className="level-badge-circle">
          <img src="/military.png" alt="Badge" className="badge-img" />
        </div>
      </div>
      <h3 className="level-number">Niveau 3:</h3>
      <h4 className="level-title">Ambassadeur</h4>
      <p className="level-description">Plus que 2 missions pour le niveau 4 !</p>
      <div className="level-progress-bar">
        <div className="level-progress-fill"></div>
      </div>
      <div className="level-icons">
        <div className="level-icon-box">
          <img src="/star.png" alt="Star" className="level-icon-img" />
        </div>
        <div className="level-icon-box">
          <span className="level-emoji">🌱</span>
        </div>
        <div className="level-icon-box">
          <Users className="level-icon-svg" />
        </div>
        <div className="level-icon-box">
          <span className="level-emoji">🔒</span>
        </div>
      </div>
    </div>
  );
};

export default LevelCard;