// Load in the class file
const Airport = require("../src/airport.js");
const assertEquals = require("../testing-framework.js");

let airport, plane, newCapacity 

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

console.log(`The planes array contains the testPlane ${assertEquals(airport.planes.includes('testPlane'), true)}\n`);
// ---------------------------------------
// Capacity Test -------------------
console.log("Test to check the default capacity has been initialised andchangeCapacity() can overide the number contained in the capacity property");
//Setup 
newCapacity = 10;
airport = new Airport();
console.log(`The default airport capacity is: ${airport.capacity}`);

//Execute
airport.changeCapacity(newCapacity);

//Verify
console.log(`The airport capacity has been overridden to ${airport.capacity}: ${assertEquals(airport.capacity, newCapacity)}`);
// ---------------------------------------
// Test for full airport - Land() 
console.log("Testing the full condition on land() method");
//Setup 
airport = new Airport();
newCapacity = 1;
airport.changeCapacity(newCapacity);
console.log(`The current airport capacity is: ${airport.capacity}\n`);

//Execute (No new methods were added)

//Verify
// Land a plane in an empty Airport
console.log(`Plane can land if airport has capacity: ${assertEquals("The plane has landed.", airport.land(plane))}`)
// Land a plane in a full Airport
console.log(`Plane cannot land if airport is full: ${assertEquals("Sorry, unable to land, the aiport is full.", airport.land(plane))}`)

// ---------------------------------------