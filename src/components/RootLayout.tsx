import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarResponsive from './NavbarResponsive';
import '@/css/SharedComponents.css';
import '../css/stars.css';

const RootLayout: React.FC = () => {
  return (
    <div 
      className="root-layout" 
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="stars" />
      <div 
        className="root-content"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Navbar />
        <NavbarResponsive />
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout; 