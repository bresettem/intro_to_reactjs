import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

let numbers = [3, 56, 2, 48, 5];

// Basic way to write a function

function square(x) {
  return x * x;
}

const newNumbers = numbers.map(square);
console.log("newNumbers", newNumbers); // [ 9, 3136, 4, 2304, 25 ]

////Map -Create a new array by doing something with each item in an array.

// Old
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// Arrow Script
const newNumbersMap = numbers.map((x) => {
  return x * 2;
});

console.log("newNumbersMap", newNumbersMap); // [ 6, 112, 4, 96, 10 ]

// Condensed
// Note: The parenthesis surrounding the x are not needed.
const newNumbersConMap = numbers.map((x) => x * 2);
console.log("newNumbersConMap", newNumbersConMap); // [ 6, 112, 4, 96, 10 ]

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

const newNumbersFilterCon = numbers.filter((num) => num < 10);
console.log("newNumbersFilterCon", newNumbersFilterCon); // [ 3, 2, 5 ]
//Reduce - Accumulate a value by doing something to each item in an array.
// let newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

let newNumberReduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log("newNumberReduce", newNumberReduce); // 114
////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

const newNumberFind = numbers.find((num) => num > 10);
console.log("newNumberFind", newNumberFind); // 56
////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

const newNumberFindIndex = numbers.findIndex((num) => num > 10);
console.log("newNumberFindIndex", newNumberFindIndex); // 1
