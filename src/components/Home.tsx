import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que o componente está montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`home-wrapper ${isVisible ? 'visible' : ''}`}>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Página Inicial</h1>
          <div className="section-card">
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, nisl nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 