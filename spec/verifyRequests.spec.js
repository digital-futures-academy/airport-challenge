const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- VERIFY TAKE-OFFS AND LANDINGS ---');

let expectedOutput, result;

// Test 1 - Test to check that a request for a plane that isn't at the airport to take off can't be made
console.log('Test 1 - Test to check that a request for a plane that isn\'t at the airport to take off can\'t be made');
// Arrange
let airport = new Airport();
let plane1 = new Plane();
let plane2 = new Plane();
expectedOutput = 1;
// Act
airport.landPlane(plane1);
airport.allowTakeOff(plane2);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 2 - Test to check that a request for a plane to land which has already landed can't be made
console.log('Test 2 - Test to check that a request for a plane to land which has already landed can\'t be made');
// Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
expectedOutput = 2;
// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane1);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);