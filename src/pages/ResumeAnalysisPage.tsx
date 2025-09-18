
import React from 'react';
import { useParams } from 'react-router-dom';
import './ResumeAnalysisPage.css';

const ResumeAnalysisPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy data for demonstration purposes
  const analysisResult = {
    matchScore: 85,
    matchedSkills: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    missingSkills: ['Node.js', 'Express.js'],
    recommendation: 'This candidate is a strong fit for the role.',
  };

  return (
    <div className="resume-analysis-page">
      <h2>Resume Analysis for Application #{id}</h2>
      <div className="analysis-results">
        <div className="score-card">
          <h3>Match Score</h3>
          <div className="score-circle">
            <span>{analysisResult.matchScore}%</span>
          </div>
        </div>
        <div className="skills-card">
          <h3>Matched Skills</h3>
          <ul>
            {analysisResult.matchedSkills.map((skill) => (
              <li key={skill} className="skill matched">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-card">
          <h3>Missing Skills</h3>
          <ul>
            {analysisResult.missingSkills.map((skill) => (
              <li key={skill} className="skill missing">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="recommendation-card">
          <h3>Overall Recommendation</h3>
          <p>{analysisResult.recommendation}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysisPage;
