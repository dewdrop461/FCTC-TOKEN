// src/Layout.js
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Assuming your sidebar is a separate component
import '../Layout/Layout.css'; // Custom styles for layout

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
