import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import LanguageSelector from "./components/LanguageSelector";
import AnalysisResults from "./components/AnalysisResults";
import axios from "axios";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [results, setResults] = useState(null);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", selectedLanguage);

    try {
      const response = await axios.post("http://localhost:5000/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error analyzing file:", error);
      alert("Failed to analyze the file. Please try again.");
    }
  };

  return (
    <div className="app">
      <h1>Code Quality Analyzer</h1>
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
      />
      <FileUpload onUpload={handleFileUpload} />
      <AnalysisResults results={results} />
    </div>
  );
};

export default App;