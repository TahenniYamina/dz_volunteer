/*import React from 'react';
import './Header.css';
import { Search, Bell, MessageSquare } from 'lucide-react';
import logo from '../assets/volunteeractivism.png';
import profilePic from '../assets/profile.jpg';

const Header = ({ userName }) => (
  <header className="header">
    <div className="header-container">
      <div className="header-left">
        <div className="logo-section">
          <div className="logo-box">
            <img src={logo} alt="Logo" />
          </div>
          <span className="logo-text">Bénévolat Impact</span>
        </div>

        <div className="search-wrapper">
          <Search className="search-icon" />
          <input type="text" placeholder="Rechercher des missions, assos..." />
        </div>
      </div>

      <div className="header-right">
        <a href="#">Missions</a>
        <a href="#">Associations</a>
        <a href="#" className="active">Mon Espace</a>
        <button className="bell">
          <Bell />
          <span className="notification"></span>
        </button>
        <button>
          <MessageSquare />
        </button>
        <div className="profile-info">
          <div className="avatar">
            <img src={profilePic} alt="Profile" />
          </div>
          <span>{userName}</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;*/

import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="/volunteeractivism.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Bénévolat Impact</span>
        </div>
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher des missions, assos..."
            className="search-input"
          />
        </div>
      </div>
      <div className="navbar-right">
        <a href="#" className="nav-link">Missions</a>
        <a href="#" className="nav-link">Associations</a>
        <a href="#" className="nav-link active">Mon Espace</a>
        <button className="icon-btn">
          <Bell className="icon" />
        </button>
        <button className="icon-btn">
          <MessageSquare className="icon" />
        </button>
        <div className="user-info">
          <img src="/profile.jpg" alt="Thomas" className="user-avatar" />
          <span className="user-name">Thomas</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
