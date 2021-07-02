// Load in the class file
const Airport = require("../src/airport.js");
const assertEquals = require("../testing-framework.js");

// Land() Method Test -------------------
console.log("Test to check if a plane can land in an airport");
//Setup 
const airport = new Airport();
const plane = 'testPlane';

console.log(`Created instance of Airport class ${airport instanceof Airport}`);

//Execute
airport.land(plane);
console.log(airport.planes);

//Verify
console.log(`The length of the planes array is equal to one: ${assertEquals(airport.planes.length, 1)}`);

console.log(`The planes array contains the testPlane ${assertEquals(airport.planes.includes('testPlane'), true)}`);
// ---------------------------------------