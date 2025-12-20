import React from 'react';
import Navigation from './components/Navigation';
import RegistrationForm from './components/RegistrationForm';
import Sidebar from './components/Sidebar';
import './App.css';
import ProgressBar from './components/ProgressBar';
export default function App() {
  return (
    <div className="app">
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        rel="stylesheet" 
      />
      
      <Navigation />
      <main className="main-content">
        <div className="content-grid">
          <div className="form-column">
            <div className="page-header">
              <div className="header-text">
                <h1 className="page-title">Inscrivez votre organisation</h1>
                <p className="page-subtitle">
                  Rejoignez le mouvement et trouvez vos futurs bénévoles en quelques clics.
                </p>
              </div>
      <ProgressBar />

            </div>
            <RegistrationForm />
          </div>
          
          <div className="sidebar-column">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}