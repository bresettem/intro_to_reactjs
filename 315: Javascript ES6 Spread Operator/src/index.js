import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Cherry", ...citrus]; // ... it does not need be on the end

console.log(fruits); // [ "Apple", "Banana", "Cherry", "Lime", "Lemon", "Orange" ]

const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007",
};
console.log(user); // { fName: "James", lName: "Bond", id: 1, username: "jamesbond007"
