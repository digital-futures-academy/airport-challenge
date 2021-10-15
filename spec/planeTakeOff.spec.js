const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- PLANE TAKE OFF TESTS ---');

let expectedOutput, result;

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