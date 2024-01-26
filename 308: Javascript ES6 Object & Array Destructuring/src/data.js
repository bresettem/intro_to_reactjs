const animals = [
  { name: "cat", sound: "meow", feedingRequirements: { food: 2, water: 3 } },
  { name: "dog", sound: "woof" },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log("useAnimals", animal.sound);
    },
  ];
}
export { useAnimals };
export default animals;
