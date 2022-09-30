const { Airport } = require("../src/airport");
const { Plane } = require("../src/plane");
const { assertEquals } = require("../testing-framework");

let expected, actual, result;

console.log("Test 1a: landPlane() adds a plane to landedPlanes[]")

//Arrange
let airport = new Airport();
let plane = new Plane();
expected = 1;

//Act
airport.add(plane);
actual = airport.landedPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1a: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log("Test 1b: landPlane() adds a specific plane to landedPlanes[]")

//Arrange
airport = new Airport();
plane = new Plane();
expected = plane;

//Act
airport.add(plane);
actual = airport.landedPlanes[0];

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1b: ${result}`);

//Clean-up
airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;
