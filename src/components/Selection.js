// Selection.js
import React from "react";
import "../styles/App.css";




function Selection({ color }) {
  return (
    <div 
      className="fix-box" 
      style={{ backgroundColor: color, width: "100px", height: "100px", border: "1px solid black" }}
    >
    </div>
  );
}

export default Selection;

