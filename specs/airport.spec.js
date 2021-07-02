// Load in the class file
const Airport = require("../src/airport.js");
const assertEquals = require("../testing-framework.js");

console.log("Test to check if a plane can land in an airport");
//Setup 
const airport = new Airport();
const plane = 'testPlane';

console.log(airport instanceof Airport);

//Execute
console.log(airport.land(plane));

//Verify
console.log(assertEquals(airport.planes.length, 1));
console.log(assertEquals(airport.planes.includes('testPlane'), true));