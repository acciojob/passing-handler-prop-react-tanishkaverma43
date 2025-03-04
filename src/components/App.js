// App.js
import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

const colors = ["red", "blue", "green"];

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h1>Color Selector</h1>
      <ColourSelector onSelectColor={setSelectedColor} colors={colors} />
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
        <Selection color={selectedColor} />
      </div>
    </div>
  );
}

export default App;

