import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarResponsive from './NavbarResponsive';
import '@/css/SharedComponents.css';
import '../css/stars.css';

const RootLayout: React.FC = () => {
  return (
    <div className="root-layout">
      <div className="stars" />
      <div className="root-content">
        <Navbar />
        <NavbarResponsive />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout; 