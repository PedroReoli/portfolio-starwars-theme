import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Switch from '../components/bb8/bb8';
import '@/components/AboutMe.css';

const AboutMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isJediMode, setIsJediMode] = useState(true);

  useEffect(() => {
    // Pequeno delay para garantir que o componente está montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleToggleMode = () => {
    console.log('BB-8 clicked! Current mode:', isJediMode ? 'Jedi' : 'Sith');
    setIsJediMode(!isJediMode);
  };

  return (
    <div className={`home-wrapper ${isVisible ? 'visible' : ''}`}>
      <Navbar />
      <div className="home-container">
        <div className="home-content row-layout">
          {/* Card da Foto */}
          <div className={`photo-card ${isJediMode ? 'jedi-mode' : 'sith-mode'}`}>
            <div className="photo-container">
              <img 
                src={isJediMode 
                  ? "https://via.placeholder.com/300x400/4bd5ee/ffffff?text=Jedi+Pedro" 
                  : "https://via.placeholder.com/300x400/8b0000/ffffff?text=Sith+Pedro"
                } 
                alt={isJediMode ? "Pedro Lucas Reis - Jedi Mode" : "Pedro Lucas Reis - Sith Mode"}
                className="profile-photo"
              />
              <div className="photo-overlay">
                <span className="mode-indicator">
                  {isJediMode ? "JEDI MODE" : "SITH MODE"}
                </span>
              </div>
            </div>
          </div>

          {/* Card da Descrição */}
          <div className="description-card">
            <div className="about-text">
              <p>
                I'm Pedro Lucas Reis, a Junior Full Stack Developer on a mission to build powerful and efficient web applications across the galaxy. My main stack includes React, Next.js, Node.js, and Python, with additional experience in TypeScript, C#, and database systems like PostgreSQL and SQL Server.
              </p>
              <p>
                Currently, I work at Autocom3, where I've contributed to both frontend and backend development — from building the company's institutional website to creating internal tools like a digital time tracking system and a web app for accounting.
              </p>
              <p>
                I'm passionate about clean code, automation, and solving real-world problems through technology. I've also led workshops focused on digital inclusion and coordinated development events using agile methodologies.
              </p>
              <p>
                Whether in a team or flying solo, I bring dedication and clarity to every mission.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* BB8 no canto direito inferior */}
      <div className="bb8-container">
        <Switch isJediMode={isJediMode} onToggle={handleToggleMode} />
      </div>
    </div>
  );
};

export default AboutMe; 