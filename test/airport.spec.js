const { assertEquals } = require("../test/TestingFrameworks");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let airport2;
let plane;

// Test 1 - has the plane landed at the airport?

console.log(`============================`);
console.log(`Test 1 - Land adds a plane to the airport.`);

// Arrange
airport = new Airport();
plane = { plane: 1 };
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

// Test 2 - does the airport have a addressable capacity?

console.log(`============================`);
console.log(`Test 2 - The airport has a capacity that can also be changed.`);

// Arrange
airport = new Airport();
airport2 = new Airport(5);
expected = airport != airport2;

// Act
airport.capacity(plane);
airport2.capacity(plane);
actual = airport.airportCapacity != airport2.airportCapacity;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: The airport has a changeable capacity: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
