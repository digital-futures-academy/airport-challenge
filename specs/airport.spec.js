const assertEquals = require('./../test-framework.js');
const Airport = require('./../src/airport.js');
let airport, plane1, actualResult, changableCapacity;

// Test1 - Test to see whether a plane can land at an airport
console.log('\nWill the plane land at the airport?');
// Setup

airport = new Airport();
plane1 = 'Boeing 747';

// Execute

actualResult = airport.land(plane1);


// Verify 

console.log(assertEquals(plane1, actualResult));

//-----------------------------------------------------------------------

// Test2 - Test to check whether we can change the airport capacity when desired

console.log('\nCan we change the airport capacity?');
// Setup

changableCapacity = 3;

// Execute 

airport = new Airport(changableCapacity);
actualResult = airport.capacity;

// Verify 

console.log(assertEquals(changableCapacity, actualResult));
console.log(`Capacity is ${actualResult}`);