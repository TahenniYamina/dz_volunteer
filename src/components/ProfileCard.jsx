/*import React from 'react';
import './ProfileCard.css';
import profilePic from '../assets/profile.jpg';

const ProfileCard = ({ user }) => (
  <div className="profile-card">
    <div className="profile-avatar">
      <img src={profilePic} alt="Profile" />
      <div className="online-badge">✓</div>
    </div>
    <h2>{user.name}</h2>
    <p>"{user.motto}"</p>
    <div className="earth-emoji">🌍</div>
    <div className="profile-completion">
      <div className="completion-info">
        <span>Profil complété</span>
        <span>{user.profileCompletion}%</span>
      </div>
      <div className="completion-bar">
        <div className="completion-fill" style={{ width: `${user.profileCompletion}%` }}></div>
      </div>
    </div>
    <button className="edit-profile-btn">Modifier mon profil</button>
  </div>
);

export default ProfileCard;*/
import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar-container">
          <img src="/profile.jpg" alt="Thomas Dupont" className="profile-avatar" />
          <div className="profile-badge">
            <span>✓</span>
          </div>
        </div>
        <h2 className="profile-name">Thomas Dupont</h2>
        <p className="profile-quote">"Agir pour un monde plus solidaire 🌍"</p>
      </div>
      <div className="profile-progress">
        <div className="progress-header">
          <span className="progress-label">Profil complété</span>
          <span className="progress-value">85%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '85%' }}></div>
        </div>
      </div>
      <button className="edit-btn">Modifier mon profil</button>
    </div>
  );
};

export default ProfileCard;