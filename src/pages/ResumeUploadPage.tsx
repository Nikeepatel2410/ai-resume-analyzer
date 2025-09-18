import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResumeUploadPage.css";

const ResumeUploadPage: React.FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get("jobId");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!resume) return;

    const formData = new FormData();
    formData.append("resume", resume);

    try {
      const response = await fetch("http://localhost:5000/upload-resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload response:", data);

      // Navigate to analysis page with backend response ID if needed
      // Here we use dummy ID for example
      navigate(`/analysis/123`);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Resume upload failed. Please try again.");
    }
  };

  return (
    <div className="resume-upload-page">
      <h2>Upload Your Resume</h2>
      {jobId && <p>Applying for Job ID: {jobId}</p>}
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
