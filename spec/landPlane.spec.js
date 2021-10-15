const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

let input, expectedOutput, actualOutput, result;

// Test 1 - Test that landing a plane adds a plane to the list of landed planes
console.log('Test 1 - Test that landing a plane adds a plane to the list of landed planes')
// Arrange
let airport = new Airport();
let plane = new Plane();
expectedOutput = 1;
// Act
airport.landPlane(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);