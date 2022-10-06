const { assertEquals } = require("../testing-framework");
const Plane = require("../src/plane");

let expected, actual, result, plane;

// Test 1c - Check if calling `getID()` returns the correct `planeID` value for a `Plane` object
console.log("--------------------");
console.log("Get the planeID value for a Plane object")

//Arrange 
plane = new Plane(1);
expected = 1;

//Act
actual = plane.getId();

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1c - Check if calling getID() returns the correct planeID value for a Plane object: ${result}`);

//Clean up
expected = undefined
result = undefined;
actual = undefined;
plane = null;