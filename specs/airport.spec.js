const assertEquals = require('./../test-framework.js');
const Airport = require('./../src/airport.js');

// Test to see whether a plane can land at an airport
console.log('\nWill the plane land at the airport?');
// Setup

let airport = new Airport();
let plane1 = 'Boeing 747';

// Execute

actualResult = airport.land(plane1);


// Verify 

console.log(assertEquals(plane1, actualResult));