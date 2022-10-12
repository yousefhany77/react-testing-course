import React, { FunctionComponent, useEffect, useState } from "react";
const skills = ["html", "javascript", "React"];
const Home: FunctionComponent = () => {
  const [state, setstate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setstate(true);
    }, 1005);
  });
  return (
    <div
      style={
        {
          display: "flex",
          "flex-direction": "column",
          "text-align": "center",
          padding: "5rem",
          gap: "1rem",
        } as React.CSSProperties
      }
    >
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="job-location">Jop Location</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="EG">EG</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <label>
            i agree
            <input type="checkbox" id="terms" />
          </label>
        </div>
      </form>
      <button>Sumbit</button>
      {state && <button>delay</button>}
      <ul>
        {skills.map((sk) => (
          <li key={sk}>{sk}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
