const { assertEquals } = require("./testing-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;

//Test 1 - does the airport contain more planes when a plane is told to land?

console.log("===================================");
console.log(`Test 1 - if land function puts something into the airport`);

//Arrange
airport = new Airport();
plane = new Plane("ABC123");
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.getPlanesList().length;

//Assert
result = assertEquals(actual, expected);
console.log(
	`Test 1 - if land function puts something into the airport: ${result}`
);

//Clean up
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;
