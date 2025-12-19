import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <span className="logo-icon">aa</span>
        Accessibility<span className="logo-highlight">Analyzer</span>
      </div>
      <div className="nav-links">
        <a href="#" className="nav-item">Documentation</a>
        <a href="#" className="nav-item">History</a>
        <button className="github-btn">GitHub v1.0</button>
      </div>
    </nav>
  );
};

export default Navbar;