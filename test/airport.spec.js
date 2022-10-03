const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../framework/testingFramework")


// Declare variables
let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Does the plane land in the airport?
console.log(`=============================`)
console.log(`Test 1 - Does a plane land in the airport?`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1: ${result}`);

//Cleanup
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;