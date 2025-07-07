import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAstronaut, FaTools, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import '@/css/SharedComponents.css';

const NavbarResponsive: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar-responsive">
      <button className="nav-btn-responsive" onClick={() => navigate('/home')}><FaUserAstronaut /> </button>
      <button className="nav-btn-responsive" onClick={() => navigate('/skills')}><FaTools /> </button>
      <button className="nav-btn-responsive" onClick={() => navigate('/experience')}><FaBriefcase /> </button>
      <button className="nav-btn-responsive" onClick={() => navigate('/contact')}><FaEnvelope /> </button>
    </nav>
  );
};

export default NavbarResponsive; 