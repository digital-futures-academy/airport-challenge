const { assertEquals } = require("../test/TestingFrameworks");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - has the plane landed at the airport?

console.log(`============================`);
console.log(`Test 1 - Land adds a plane to the airport.`);

// Arrange
airport = new Airport();
plane = { id: `plane 1` };
expected = 1;

// Act
airport.land(plane);
actual = airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: A plane has landed at the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
