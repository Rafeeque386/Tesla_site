import React from 'react';
import Header from '../header/Header';
import './layout.css';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
