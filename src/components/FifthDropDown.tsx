import React, { useState } from "react";

interface FifthDropDownProps {}

const FifthDropDown: React.FC<FifthDropDownProps> = () => {
  const [squares, setSquares] = useState<JSX.Element[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>(""); // State to store the selected color

  const createSquare = () => {
    if (!selectedColor) {
      alert("Please select a color first.");
      return;
    }

    const newSquare = (
      <div
        key={squares.length}
        className="square"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: selectedColor,
          margin: "10px",
        }}></div>
    );

    setSquares([...squares, newSquare]);
    setSelectedColor(""); // Reset selected color after creating a square
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <label>
        Select Color:
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <button onClick={createSquare}>Create Square</button>
      <div className="squareContainer">{squares}</div>
    </div>
  );
};

export default FifthDropDown;
