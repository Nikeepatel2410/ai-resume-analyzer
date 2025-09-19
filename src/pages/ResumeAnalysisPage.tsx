import { useLocation, useParams } from "react-router-dom";

const ResumeAnalysisPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const { analysis, job } = (location.state as any) || {};

  return (
    <div>
      <h2>Resume Analysis Result</h2>
      <p>Analysis ID: {id}</p>
      {job && <p>Job Title: {job.title}</p>}
      {analysis ? (
        <>
          <p>Match Score: {analysis.score}%</p>
          <p>Matched Skills: {analysis.matchedSkills.join(", ") || "None"}</p>
          <p>Missing Skills: {analysis.missingSkills.join(", ") || "None"}</p>
          <p>Feedback: {analysis.feedback}</p>
        </>
      ) : (
        <p>No analysis data available.</p>
      )}
    </div>
  );
};

export default ResumeAnalysisPage;
