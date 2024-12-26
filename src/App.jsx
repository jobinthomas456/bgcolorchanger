import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("white");

  const colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: color, height: "110vh", textAlign: "center", paddingTop: "20px" ,}}>
      <h1>Background Color Changer</h1>
      <button 
        onClick={changeColor} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default App;
