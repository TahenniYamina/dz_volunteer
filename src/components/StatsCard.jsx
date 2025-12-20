/*import React from 'react';
import './StatsCard.css';

const StatsCard = ({ icon, label, value, change }) => (
  <div className="stats-card">
    <div className="stats-label">
      {icon}
      <span>{label}</span>
    </div>
    <div className="stats-value">
      <span>{value}</span>
      {change && <span className="change">+{change}</span>}
    </div>
  </div>
);

export default StatsCard;*/
import React from 'react';
import './StatsCard.css';

const StatsCard = ({ icon, label, value, change }) => {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <div className="stats-content">
        <p className="stats-label">{label}</p>
        <div className="stats-value-container">
          <span className="stats-value">{value}</span>
          {change && <span className="stats-change">{change}</span>}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;