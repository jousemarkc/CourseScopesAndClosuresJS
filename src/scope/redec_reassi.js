// with var is possible redeclare and reassign

var color; // Undefined
color = 'David'; // Assign
console.log(color);

var country = 'Mexico'; // Declare and Assign
country = 'France'; // Reassign
console.log(country);

var animal = 'Dog'; // Declare and Assign
var animal = 'Cat'; // Redeclare and Reassign
console.log(animal);

// with let is possible reassign but not redeclare

let color; // Undefined
color = 'David'; // Assign
console.log(color);

let country = 'Mexico'; // Declare and Assign
country = 'France'; // Reassign
console.log(country);

let animal = 'Dog'; // Declare and Assign
let animal = 'Cat'; // Redeclare and Reassign. Problem.
console.log(animal); // Error

// with const not is possible redeclare and neither reassign

const color; // Declaration must be initialized. Error
color = 'David'; // Assign
console.log(color);

const country = 'Mexico'; // Declare and Assign. Correct
country = 'France'; // Reassign. Not is possible.
console.log(country);

const animal = 'Dog'; // Declare and Assign
const animal = 'Cat'; // Redeclare and Reassign. Problem.
console.log(animal); // Error