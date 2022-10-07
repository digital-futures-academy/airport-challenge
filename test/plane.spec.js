const Plane = require("../src/plane");
const { assertEquals } = require("./testing-framework");
let expected;
let actual;
let result;
let plane;

// Test 1b (plane) if getFlightNum returns the flightnumber of the plane
console.log("===================================");
console.log(`Test 1b - if getFlightNum returns the flight number of the plane`);
//arrange
plane = new Plane("ABC123");
expected = "ABC123";
//act
actual = plane.getFlightNum();
//assert
result = assertEquals(expected, actual);
console.log(
	`Test 1b - if getFlightNum returns the flight number of the plane: ${result}`
);
