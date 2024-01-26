import animals from "./data";
import { useAnimals } from "./data";

console.log("animals", animals);
/* animals
[
    {
        "name": "cat",
        "sound": "meow",
        "feedingRequirements": {
            "food": 2,
            "water": 3
        }
    },
    {
        "name": "dog",
        "sound": "woof"
    }
]

*/

const [cat, dog] = animals;
console.log("cat", cat);
/* cat
{
    "name": "cat",
    "sound": "meow",
    "feedingRequirements": {
        "food": 2,
        "water": 3
    }
}
*/

const { name, sound } = cat;
console.log("sound", sound); //sound meow

const { name: catName, sound: catSound } = cat;
console.log("catName", catName); // catName cat
console.log("dog", dog);
// dog {
//     "name": "dog",
//     "sound": "woof"
// }

const { name1 = "Fluffy", sound1 = "Purr" } = cat;
console.log("name1", name1); // name1 Fluffy

const {
  feedingRequirements: { food, water },
} = cat;
console.log("food", food); // food 2

const [animal, makeSound] = useAnimals(cat);
console.log("animal", animal); // animal cat
makeSound(); // useAnimals meow
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  colorsByPopularity: [hondaTopColor],
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  colorsByPopularity: [teslaTopColor],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
