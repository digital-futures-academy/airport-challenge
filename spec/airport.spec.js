const { assertEquals } = require(`../testing.framework`);
const Airport = require(`../src/airport`);
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1:  AirportPlanes length increases to 1 when addPlane is called on an empty Airport with a Plane
console.log(`============================`);
console.log(`Test 1 - addPlane lands a Plane into the Airport`);

// Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = assertEquals(expected, actual);
console.log(`Test 1: Something added to airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


