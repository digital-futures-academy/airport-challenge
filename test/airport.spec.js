const { assertEquals } = require("../test/TestingFrameworks");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;
let size;

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

// Test 2 - does the airport have a capacity?

console.log(`============================`);
console.log(`Test 2 - The airport has a default capacity.`);

// Arrange
airport = new Airport();
expected = true;

// Act
airport.capacity();
actual = airport.airportCapacity === Number;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: The airport has a capacity: ${result}`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


