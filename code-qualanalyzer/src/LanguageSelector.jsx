import React from "react";

const LanguageSelector = ({ selectedLanguage, onSelectLanguage }) => {
  const languages = ["javascript", "python", "java", "cpp"];

  return (
    <div className="language-selector">
      <label>Select Language:</label>
      <select
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;