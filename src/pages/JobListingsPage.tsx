
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobListingsPage.css';

interface Job {
  id: number;
  title: string;
  description: string;
}

const initialJobs: Job[] = [
  { id: 1, title: 'Frontend Developer', description: 'We are looking for a skilled Frontend Developer to join our team.' },
  { id: 2, title: 'Backend Developer', description: 'We are looking for a skilled Backend Developer to join our team.' },
  { id: 3, title: 'Full-Stack Developer', description: 'We are looking for a skilled Full-Stack Developer to join our team.' },
];

const JobListingsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  return (
    <div className="job-listings-page">
      <h2>Job Listings</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <Link to={`/upload?jobId=${job.id}`} className="btn btn-primary">Apply Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListingsPage;
