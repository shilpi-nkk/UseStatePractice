import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const [headingText, setHeading] = useState("Hello");
  function EventHandling() {
    setHeading("Submitted");
  }
  function EventOver() {
    setColor("black");
  }
  function EventOut() {
    setColor("white");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color }}
        onClick={EventHandling}
        onMouseOver={EventOver}
        onMouseOut={EventOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
