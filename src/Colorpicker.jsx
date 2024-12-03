import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Colorpicker() {
  const [color, setColor] = useState("#ffffff");
  const toggleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Color Picker</h1>
      <div
        style={{
          border: "solid black",
          textAlign: "center",
          justifyContent: "center",
          padding: "1em",
          width: "20vw",
          height: "20vh",
          margin: "auto",
          backgroundColor: color,
        }}
      >
        {color}
      </div>
      <input
        type="color"
        onChange={toggleColor}
        value={color}
        style={{ margin: "auto", marginTop: "1em" }}
      />
    </div>
  );
}

export default Colorpicker;
