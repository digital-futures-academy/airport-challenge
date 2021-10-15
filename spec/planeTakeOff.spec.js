const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- PLANE TAKE OFF TESTS ---');

let expectedOutput, actualOutput, result;

// Test 1 - Test to see that the planes list length reduces when a plane takes off
console.log('Test 1 - Test to see that the planes list length reduces when a plane takes off');
// Arrange
let airport = new Airport();
let plane = new Plane();
expectedOutput = 0;
// Act
airport.landPlane(plane);
airport.allowTakeOff(plane);
// Assert 
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 2 - Test to see if the planes list length decreases in a scenario with multiple different planes
console.log('Test 2 - Test to see if the planes list length decreases in a scenario with multiple different planes');
// Arrange 
airport = new Airport();
let plane1 = new Plane();
let plane2 = new Plane();
let plane3 = new Plane();
expectedOutput = 2;
// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.allowTakeOff(plane2);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 3 - Test to confirm that a plane has taken off is no longer at the airport
console.log('Test to confirm that a plane has taken off is no longer at the airport');
// Arrange 
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
plane3 = new Plane();
expectedOutput = false;
// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.allowTakeOff(plane2);
actualOutput = airport.checkIfLanded(plane2);
// Assert
result = assertEquals(actualOutput, expectedOutput);
console.log(result);