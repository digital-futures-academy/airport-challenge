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
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 2 - does the airport return a statement to confirm a plane has landed when it lands?

console.log("===================================");
console.log(
	`Test 2 - if the airport returns a statement to confirm a plane has landed when the land function is called`
);

//Arrange
airport = new Airport();
plane = new Plane("ABC123");
expected = `The plane ABC123 has landed`;

//Act

actual = airport.landPlane(plane);

//Assert
result = assertEquals(actual, expected);
console.log(
	`Test 2 - if the airport returns a statement to confirm a plane has landed when the land function is called: ${result}`
);

//Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 3 - does the airport have a default capacity when it's constructed?

console.log("===================================");
console.log(
	`Test 3 - if the airport has a default capacity when it's constructed`
);

//Arrange
airport = new Airport();
expected = 5;

//Act

actual = airport.getCapacity();

//Assert
result = assertEquals(actual, expected);
console.log(
	`Test 3 - if the airport has a default capacity when it's constructed: ${result}`
);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;

//Test 4 - does the airport capacity value change when constructed with another value

console.log("===================================");
console.log(
	`Test 4 - if the airport capacity changes when constructed with another value`
);

//Arrange
airport = new Airport(6);
expected = 6;

//Act

actual = airport.getCapacity();

//Assert
result = assertEquals(actual, expected);
console.log(
	`Test 4 - if the airport capacity changes when constructed with another value: ${result}`
);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;
