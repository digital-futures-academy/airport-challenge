const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- FULL CAPACITY PREVENTING LANDING TESTS ---');

let expectedOutput, result;

// Test 1 - Test to check that a plane can't land if the default max capacity is reached
console.log('Test 1 - Test to check that a plane can\'t land if the default max capacity is reached');
// Arrange
let airport = new Airport(800);
let plane = new Plane();
expectedOutput = 0;
// Act
airport.setCurrentCapacity(800);
airport.landPlane(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 2 - Test to see if that after a capacity change a plane that couldn't land now can
console.log('Test 2 - Test to see if that after a capacity change a plane that couldn\'t land now can');
// Arrange
airport = new Airport(800);
plane = new Plane();
expectedOutput = 1;
// Act
airport.setCurrentCapacity(800);
airport.landPlane(plane);
airport.setCurrentCapacity(500);
airport.landPlane(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 3 - Test to see if a capacity change will prevent further planes from landing
console.log('Test 3 - Test to see if a capacity change will prevent further planes from landing');
// Arrange
airport = new Airport(800);
let plane1 = new Plane();
let plane2 = new Plane();
expectedOutput = 1;
// Act
airport.landPlane(plane1);
airport.setCurrentCapacity(800);
airport.landPlane(plane2);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);