import React from 'react';
import { Link } from 'react-router-dom';

function Header({ courseTitle }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">📚</span>
          <h1>{courseTitle}</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

