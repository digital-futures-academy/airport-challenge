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
expected = 2;

//act
airport.add(plane);
airport.add(plane);
airport.add(plane);
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