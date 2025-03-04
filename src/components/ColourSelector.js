import React from "react";

function ColourSelector({ colors, onSelectColor }) {
  return (
    <div>
      {colors.map((color, index) => (
        <button 
          key={index} 
          data-testid={color}  // Added test ID for Cypress
          onClick={() => onSelectColor(color)} 
          style={{ margin: "5px", padding: "10px" }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
