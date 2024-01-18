import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black",
  textDecoration: "underline",
};

customStyle.color = "purple";
ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <p style={customStyle}>Custom styles</p>
  </div>,
  document.getElementById("root")
);
