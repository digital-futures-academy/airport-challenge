const { assertEquals } = require("../testing-framework");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Is plane landing to the Airport?

console.log(`===========================================`);
console.log(`Test 1 - palne is landing to the Airport`);

// Arrange
airport = new Airport();
plane = { id: `plane1` };
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Plane is landing to the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
