import emojis from "./emojipedia";

let numbers = [3, 56, 2, 48, 5];

// Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log("newNumbers", newNumbers);

// Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log("filteredNumbers", filteredNumbers); // [56, 48]
//Reduce - Accumulate a value by doing something to each item in an array.

// let newNumber = 0;

// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });

// The accumulator is the equivalent to the newNumber

let newNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log("reduce", newNumber);

//Find - find the first item that matches from an array.

let findNumber = numbers.find(function (num) {
  return num > 10;
});
console.log("findNumber", findNumber);

//FindIndex - find the index of the first item that matches.
let findIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log("findIndex", findIndex);

const reduced = emojis.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log("reduced", reduced);
