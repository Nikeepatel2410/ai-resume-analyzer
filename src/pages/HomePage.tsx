
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>AI-Powered Resume Analyzer</h1>
        <p>Streamline your hiring process with intelligent resume analysis.</p>
        <div className="cta-buttons">
          <Link to="/jobs" className="btn btn-primary">View Job Listings</Link>
          <Link to="/upload" className="btn btn-secondary">Upload a Resume</Link>
        </div>
      </header>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Automated Resume Scoring</h3>
            <p>Get an instant score on how well a resume matches a job description.</p>
          </div>
          <div className="feature-card">
            <h3>Skill Gap Analysis</h3>
            <p>Identify key skills that are present or missing in a candidate's resume.</p>
          </div>
          <div className="feature-card">
            <h3>Actionable Recommendations</h3>
            <p>Receive clear recommendations on a candidate's suitability for a role.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
