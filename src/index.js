// function add(a, b) {
//     return a + b;
// }

// const counter = require("./app");
import { counter } from './app';

const obj = {
  a: 1,
  b: 2,
};

const greet = name => `hello ${name}`;

class Animal {
  makeSound() {
    return 'bow wow';
  }
}

const animal = new Animal();

console.log(animal.makeSound());

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(counter());
