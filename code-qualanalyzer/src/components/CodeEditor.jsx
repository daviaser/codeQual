import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";  // Add your preferred theme here
import "prismjs/components/prism-javascript.min.js";  // JavaScript syntax
import "prismjs/components/prism-python.min.js";  // Python syntax
import "prismjs/components/prism-java.min.js";  // Java syntax
import "prismjs/components/prism-cpp.min.js";  // C++ syntax


const CodeEditor = ({ onAnalyze, language }) => {
  const [code, setCode] = useState("");
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const highlighted = Prism.highlight(code, Prism.languages[language], language);
    setHighlightedCode(highlighted);
  }, [code, language]);

  const handleAnalyze = () => {
    if (!code.trim()) {
      alert("Please enter some code to analyze!");
      return;
    }

    onAnalyze(code);
  };

  return (
    <div className="code-editor">
      <h3>Paste Your Code</h3>
      <textarea
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={50}
      ></textarea>
      <button onClick={handleAnalyze}>Analyze Code</button>
      
      {/* Display the highlighted code */}
      <div
        className="highlighted-code"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      ></div>
    </div>
  );
};

export default CodeEditor;