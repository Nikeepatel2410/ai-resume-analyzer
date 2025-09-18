import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JobListingsPage from './pages/JobListingsPage';
import ResumeUploadPage from './pages/ResumeUploadPage';
import ResumeAnalysisPage from './pages/ResumeAnalysisPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobListingsPage />} />
          <Route path="/upload" element={<ResumeUploadPage />} />
          <Route path="/analysis/:id" element={<ResumeAnalysisPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;