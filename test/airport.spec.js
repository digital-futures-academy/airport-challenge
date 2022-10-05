const { assertEquals } = require("./testing-framework");
const { assertTrue } = require("./testing-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;
let plane2;
let plane3;
let plane4;
let plane5;
let plane6;

//Test 1 - does the airport contain more planes when a plane is told to land?

console.log("===================================");
console.log(`Test 1 - if land function puts something into the airport`);

//Arrange
airport = new Airport();
plane = new Plane("ABC123");
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.getAirportPlanes().length;

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

//Test 5 - does isAirportFull return a truthy value when the airport is full

console.log("===================================");
console.log(
	`Test 5 - does the isAirportFull function return a truthy value when the capacity = size of planes array`
);

//Arrange
airport = new Airport();
plane = new Plane("ABC123");
plane2 = new Plane("CBA123");
plane3 = new Plane("ACB123");
plane4 = new Plane("123ABC");
plane5 = new Plane("321ABC");
expected = true;

//Act
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);
actual = airport.isAirportFull();

//Assert
result = assertTrue(actual);
console.log(
	`Test 5 - does the isAirportFull function return a truthy value when the capacity = size of planes array: ${result}`
);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;
plane = null;
plane2 = null;
plane3 = null;
plane4 = null;
plane5 = null;

//Test 5 - does landPlane reject a landing when isAirportFull returns true

console.log("===================================");
console.log(
	`Test 6 - does landPlane reject a landing when isAirportFull returns true`
);

//Arrange
airport = new Airport();
plane = new Plane("ABC123");
plane2 = new Plane("CBA123");
plane3 = new Plane("ACB123");
plane4 = new Plane("123ABC");
plane5 = new Plane("321ABC");
plane6 = new Plane("312ABC");
expected = `The airport is full so the 312ABC plane can not land right now.`;

//Act
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);
actual = airport.landPlane(plane6);

//Assert
result = assertEquals(actual, expected);
console.log(
	`Test 6 - does landPlane reject a landing when isAirportFull returns true: ${result}`
);

//Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;
plane = null;
plane2 = null;
plane3 = null;
plane4 = null;
plane5 = null;
plane6 = null;
