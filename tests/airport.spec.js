const { assertEquals } = require('../testing-framework');
const Airport = require(`../src/Airport.js`);
const Plane = require(`../src/Plane.js`);

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - 'airportPlanes' length increases by 1 when 'landPlane' is called on an airport with Plane
console.log(`============================`);
console.log(`Test 1 - landPlane lands a Plane at the airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Something landed at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 2 - landPlane should only land Plane instances to the airportManifest
console.log(`============================`);
console.log(`Test 2 - 'landPlane' only land 'Plane' instances to the 'airportManifest'`);

// Arrange
airport = new Airport();
plane = 'something';
expected = 0;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 2: Only Plane instances landed at airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;

console.log(`============================`);

// Test 3 - falsy values should not be added to Airport

console.log(`============================`);
console.log(`Test 3 - null values should not be added to Airport`);

// Arrange
airport = new Airport();
plane = null;
expected = 0;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 3: null values should not be added to Airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected - undefined;
actual = undefined;
result = undefined;