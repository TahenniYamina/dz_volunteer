import React from 'react';
import { Plus } from 'lucide-react';
import './Competences.css';

const Competences = () => {
  return (
    <div className="competences-card">
      <div className="competences-header">
        <h3 className="competences-title">Compétences</h3>
        <button className="add-btn">
          <Plus className="add-icon" />
        </button>
      </div>
      <div className="competences-list">
        <div className="competence-item verified">
          <span className="check-icon">✓</span>
          <span className="competence-name">Gestion de projet</span>
        </div>
        <div className="competence-item verified">
          <span className="check-icon">✓</span>
          <span className="competence-name">Premiers Secours</span>
        </div>
        <div className="competence-tags">
          <span className="tag">Photographie</span>
          <span className="tag">Wordpress</span>
        </div>
      </div>
    </div>
  );
};

export default Competences;