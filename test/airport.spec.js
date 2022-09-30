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
console.log(`Test 1: ${result}`);

//Clean-up
airport = null;
plane = null;
expected = null;
actual = null;
result = null;
