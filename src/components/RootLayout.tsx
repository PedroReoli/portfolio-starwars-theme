import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Background from './Background';

const RootLayout: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout; 