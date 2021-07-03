// Load in the class file
const Airport = require("../src/airport.js");
const assertEquals = require("../testing-framework.js");

let airport, plane 

// Land() Method Test -------------------
console.log("Test to check if a plane can land in an airport");
//Setup 
airport = new Airport();
plane = 'testPlane';

console.log(`Created instance of Airport class ${airport instanceof Airport}`);

//Execute
airport.land(plane);
console.log(airport.planes);

//Verify
console.log(`The length of the planes array is equal to one: ${assertEquals(airport.planes.length, 1)}`);

console.log(`The planes array contains the testPlane ${assertEquals(airport.planes.includes('testPlane'), true)}`);
// ---------------------------------------
// Capacity Test -------------------
console.log("Test to check the default capacity has been initialised andchangeCapacity() can overide the number contained in the capacity property");
//Setup 
const newCapacity = 10;
airport = new Airport();

console.log(`Created instance of Airport class ${airport instanceof Airport}`);
console.log);
console.log(`The default airport capacity is: ${airport.capacity}`);

//Execute
airport.changeCapacity(newCapacity);

//Verify
console.log(`The airport capacity has been overridden to ${airport.capacity}: ${assertEquals(airport.capacity, newCapacity)}`);
// ---------------------------------------