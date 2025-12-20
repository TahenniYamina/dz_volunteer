/*import React from 'react';
import './MissionCard.css';
import { MoreHorizontal } from 'lucide-react';
import woman from '../assets/woman.jpg';
import man from '../assets/man.jpg';

const MissionCard = ({ mission }) => (
  <div className="mission-card">
    <div className="mission-header">
      <div className="mission-date">
        <div className="month">{mission.month}</div>
        <div className="day">{mission.day}</div>
      </div>
      <div className="mission-info">
        <span className={`status ${mission.status === 'Confirmé' ? 'confirmed' : 'in-progress'}`}>{mission.status}</span>
        <h4>{mission.title}</h4>
        <div className="organization">
          <span>{mission.organization}</span> • <span>📍 {mission.location}</span>
        </div>
      </div>
      <button className="more-btn"><MoreHorizontal /></button>
    </div>

    <div className="mission-footer">
      <div className="participants">
        <div className="avatars">
          <img src={woman} alt="Participant" />
          <img src={man} alt="Participant" />
        </div>
        <span>+{mission.participants}</span>
      </div>
      <span className="time">{mission.time}</span>
    </div>
  </div>
);

export default MissionCard;*/
import React from 'react';
import { MoreHorizontal, MapPin } from 'lucide-react';
import './MissionCard.css';

const MissionCard = ({ date, month, status, title, organization, location, participants, time, statusColor }) => {
  return (
    <div className="mission-card">
      <div className="mission-date">
        <div className="date-month">{month}</div>
        <div className="date-day">{date}</div>
      </div>
      <div className="mission-content">
        <div className="mission-status-container">
          <span className={`mission-status ${statusColor}`}>{status}</span>
        </div>
        <h3 className="mission-title">{title}</h3>
        <div className="mission-info">
          <span>{organization}</span>
          <span>•</span>
          <div className="mission-location">
            <MapPin className="location-icon" />
            <span>{location}</span>
          </div>
        </div>
        {(participants || time) && (
          <div className="mission-footer">
            {participants && (
              <div className="mission-participants">
                <div className="participants-avatars">
                  <div className="avatar avatar-1"></div>
                  <div className="avatar avatar-2"></div>
                </div>
                <span className="participants-count">+{participants}</span>
              </div>
            )}
            {time && <span className="mission-time">{time}</span>}
          </div>
        )}
      </div>
      <button className="mission-menu">
        <MoreHorizontal className="menu-icon" />
      </button>
    </div>
  );
};

export default MissionCard;