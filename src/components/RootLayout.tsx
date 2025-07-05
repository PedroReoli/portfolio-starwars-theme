import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '@/css/SharedComponents.css';
import '../css/stars.css';

const RootLayout: React.FC = () => {
  return (
    <div className="root-layout">
      <div className="stars" />
      <div className="root-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout; 