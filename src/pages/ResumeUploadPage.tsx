import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResumeUploadPage.css";

const ResumeUploadPage: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [job, setJob] = useState<any>(null);
  const [jobs, setJobs] = useState<any[]>([]);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get("jobId");

  // Fetch jobs from backend
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then(setJobs)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (jobId && jobs.length > 0) {
      const selected = jobs.find((j) => j.id === parseInt(jobId, 10));
      setJob(selected);
    }
  }, [jobId, jobs]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!resume || !job) return;

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const response = await fetch(
        `http://localhost:5000/upload-resume/${job.id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log("Analysis result:", data);

      navigate(`/analysis/${data.id}`, {
        state: { analysis: data.analysis, job: job },
      });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Resume upload failed. Please try again.");
    }
  };

  return (
    <div className="resume-upload-page">
      <h2>Upload Your Resume</h2>
      {job ? (
        <p>
          Applying for: <strong>{job.title}</strong>
        </p>
      ) : (
        <p>Please select a job to apply.</p>
      )}
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.docx"
          required
        />
        <button type="submit" className="btn btn-primary">
          Analyze Resume
        </button>
      </form>
    </div>
  );
};

export default ResumeUploadPage;
