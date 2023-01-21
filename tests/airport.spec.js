const { assertEquals } = require('../testing-framework');
const Airport = require(`../src/Airport.js`);

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - 'airportPlanes' length increases by 1 when 'landPlane' is called on an airport with plane
console.log(`============================`);
console.log(`Test 1 - landPlane lands a plane at the airport`);

// Arrange
airport = new Airport();
plane = `something`;
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Plane landed at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);