
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">AI Resume Analyzer</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Job Listings</Link>
          </li>
          <li>
            <Link to="/upload">Upload Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
