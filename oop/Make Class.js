function Animal(name, species, age, health, weight, color) {
  this.name = name;
  this.species = species;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.color = color;
}

function makeClass(...properties) {
  return class {
    constructor(...values) {
      properties.forEach((prop, index) => {
        this[prop] = values[index] || undefined;
      });
    }
  }
}

const Animel = new makeClass(
  "name",
  "species",
  "age",
  "health",
  "weight",
  "color"
);

console.log(new Animel("Bob", "Dog", "5", "good", "50lb", "brown"));
console.log(new Animal("Bob", "Dog", "5", "good", "50lb", "brown"));
const dog1 = new Animal("Bob", "Dog", "5", "good", "50lb", "brown");
const dog2 = new Animel("Bob", "Dog", "5", "good", "50lb", "brown");

// Completed