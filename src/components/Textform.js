import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word.length !== 0).length;

  return (
    <div className={darkMode ? "container bg-dark text-light p-3" : "container bg-light text-dark p-3"}>
      <div className="form-check form-switch">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="darkModeSwitch"
          onClick={() => setDarkMode(!darkMode)} 
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </label>
      </div>

      <div className="mb-3">
        <h1>{props.Heading}</h1>
        <textarea
          className={`form-control ${darkMode ? 'bg-secondary text-light' : ''}`}
          placeholder="Type here"
          value={text}
          onChange={handleOnChange}
          id="myboxx"
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-outline-danger mx-2" title='Convert to UPPERCASE' onClick={handleUpClick} disabled={!text}>🔠</button>
      <button className="btn btn-outline-danger mx-2" title='Convert to lowercase' onClick={handleLowClick} disabled={!text}>🔡</button>
      <button className="btn btn-outline-danger mx-2" title='Copy text' onClick={handleCopy} disabled={!text}>📋</button>
      <button className="btn btn-outline-danger mx-2" onClick={handleClearClick} disabled={!text}>Clear text</button>

      <div className="box2 my-3">
        <h2>Your Text Summary</h2>
        <h6>{wordCount} words and {text.length} characters</h6>
        <h2>Text Preview</h2>
        <h6>{text.length > 0 ? text : "Nothing to preview!"}</h6>
      </div>
    </div>
  );
}
