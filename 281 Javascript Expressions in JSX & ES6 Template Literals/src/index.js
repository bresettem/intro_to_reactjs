import React from "react";
import ReactDOM from "react-dom";

const fName = "brese";
const lName = "eserb";
let num = 2;

if (fName === "brese") {
  num = 7;
} else {
  num = 12;
}
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>
      Hello {`${fName} ${lName}`}! (In ES6, template literals or string
      interpolation)
    </h1>
    <p>My lucky number is {num}.</p>
    <p>My lucky number is {3 + 1}.</p>
    <p>My lucky number is {Math.floor(Math.random() * 10 + 1)}.</p>
  </div>,
  document.getElementById("root")
);
