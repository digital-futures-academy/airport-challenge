const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- PLANE LANDING TESTS ---');

let expectedOutput, result;

// Test 1 - Test that landing a plane adds a plane to the list of landed planes
console.log('Test 1 - Test that landing a plane adds a plane to the list of landed planes');
// Arrange
let airport = new Airport();
let plane = new Plane();
expectedOutput = 1;
// Act
airport.landPlane(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 2 - Test that landing multiple planes add multiple planes to the list
console.log('Test 2 - Test that landing multiple planes add multiple planes to the list');
// Arrange
airport = new Airport();
let plane1 = new Plane();
let plane2 = new Plane();
expectedOutput = 2;
// Act
airport.landPlane(plane1);
airport.landPlane(plane2);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);