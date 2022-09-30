const { assertEquals } = require("../specRunner");
const Airport = require("../src/airport");
// const Item = require("../src/plane");

let expected;
let actual;
let result;
let airport;
let plane;

// Test 1 - Does a plane land in the airport?

console.log(`===========================================`);
console.log(`Test 1 - Traffic control lands a plane`);

// Arrange
airport = new Airport();
plane = { id: `plane1` };
expected = 1;

// Act
airport.add(plane);
actual = airport.airportHangar.length;
console.log(airport.airportHangar.length)

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Plane lands in airport: ${result}`);

// Clean up
airport = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Increasing airport hangar capacity

console.log(`===========================================`);
console.log(`Test 2 - Does system designer increase hangar capacity?`);

//Arrange
airport = new Airport();
plane = { id: `plane1` };
expected = 3;

//act
airport.increaseHangarCapacity(1);
actual = airport.hangarCapacity;

//assert
result = assertEquals(actual, expected);
console.log(`Test 2: Capacity is increased: ${result}`);

//cleanup
airport = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3 - Adding planes beyond capacity

console.log(`===========================================`);
console.log(`Test 3 - Is the airport full?`);

//Arrange
airport = new Airport();
plane = { id: `plane1` };
plane2 = { id: `plane2` };
plane3 = { id: `plane3` };
expected = 2;

//act
airport.add(plane);
airport.add(plane2);
airport.add(plane3);
actual = airport.airportHangar.length;

//assert
result = assertEquals(actual, expected);
console.log(`Test 3: Capacity is not surpassed: ${result}`);

//cleanup
airport = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4 - Plane departs airport

console.log(`===========================================`);
console.log(`Test 4 - Remove a plane`);

//Arrange
airport = new Airport();
plane = { id: `plane1` };
expected = 0;

//act
airport.add(plane);
airport.remove(plane);
actual = airport.airportHangar.length;

//assert
result = assertEquals(actual, expected);
console.log(`Test 4: Plane departs airport: ${result}`);

//cleanup
airport = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5a - Departing non-existing plane
console.log("======================");
console.log("Test 5a: Non-existing plane tries to depart ");

//Arrange
airport = new Airport();
plane1 = { id: `plane1` };
plane2 = { id: `plane2` };
expected = `Plane is not in hangar`;

//act
airport.add(plane1);
actual = airport.remove(plane2);

//assert
result = assertEquals(actual, expected);
console.log(`Test 5a: Does program return "Plane is not in hangar?": ${result}`);

//cleanup
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5b - Land duplicate plane
console.log("======================");
console.log("Test 5b: Air traffic controller tries to land duplicate plane ");

//Arrange
airport = new Airport();
plane = { id: `plane` };
expected = `Plane has already landed`;

//act
airport.add(plane);
actual = airport.add(plane);

//assert
result = assertEquals(actual, expected);
console.log(`Test 5b: Does program return "Plane has already landed"?: ${result}`);

//cleanup
basket = null;
item = null;
expected = undefined;
actual = undefined;
result = undefined;