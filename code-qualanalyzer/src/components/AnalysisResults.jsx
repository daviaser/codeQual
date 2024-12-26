import React from "react";

const AnalysisResults = ({ results }) => {
  if (!results) {
    return <p>No analysis performed yet.</p>;
  }

  return (
    <div className="analysis-results">
      <h3>Code Quality Analysis Results</h3>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default AnalysisResults;