const { assertEquals, assertNull, assertTrue, assertFalse } = require("../testing-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let expected, actual, result, airport, plane;

// Test 1a - Validation - check if the length of an empty parkedPlanes array increases by 1 when landPlane() is called - returns true if so
console.log("--------------------");
console.log("Landing a plane at the airport")

//Arrange 
airport = new Airport();
plane = new Plane(1);
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.parkedPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1a: - Validation - A plane has been added to the parkedPlanes array as the array's length is now 1: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
airport = null;
plane = null;
