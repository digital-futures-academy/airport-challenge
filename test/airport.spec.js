const { assertEquals } = require("../test/TestingFrameworks");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;
let size;
let airportCapacity;

// Test 1 - test the airport has added a plane to planeList via land function.

console.log(`============================`);
console.log(`Test 1 - Land adds a plane to the airport.`);

// Arrange
airport = new Airport();
plane = { id: "plane1" };
expected = 1;

// Act
airport.land(plane);
actual = airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: A plane has landed at the airport: ${result}`);

// Clean up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 2 - test the airport can take a capacity.

console.log(`============================`);
console.log(`Test 2 - The airport has a default capacity.`);

// Arrange
airport = new Airport();
expected = true;

// Act
airport.capacity();
actual = !isNaN(airport.airportCapacity);

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: The airport has a capacity: ${result}`);

// Clean up
airport = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 3 - test the airport capacity can be changed.

console.log(`============================`);
console.log(`Test 3 - The airport has a changeable capacity.`);

// Arrange
airport = new Airport();
size = 10
expected = 10;

// Act
airport.capacity(size);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 3: The airport has a changeable capacity: ${result}`);

// Clean up
airport = null;
size = null;
expected = undefined;
actual = undefined;
result = undefined;


// Test 4 - test if the capacity is full.

console.log(`============================`);
console.log(`Test 4 - The airport capacity is full.`);

// Arrange
airport = new Airport();
airportCapacity = 1;
plane = { id: "plane1" };
airport.airportList.push(plane);
airport.airportCapacity = airportCapacity
expected = true;

// Act
airport.isCapacityFull();
actual = airport.isCapacityFull();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 4: The airport is at full capacity: ${result}`);

// Clean up
airport = null;
airportCapacity = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 5 - test that a plane doesn't land when capacity is full.

console.log(`============================`);
console.log(`Test 5 - The plane won't land if the capacity is full.`);

// Arrange
airport = new Airport();
airportCapacity = 1;
airport.airportCapacity = airportCapacity;
plane = { id: "plane1" };
airport.airportList.push(plane);
expected = 0;

// Act
airport.land(plane);
actual = airport.airportCapacity - airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 5: The airport has no extra planes when the capacity is full: ${result}`);

// Clean up
airport = null;
airportCapacity = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;


// Test 6 - test that a plane has taken off from the airport.

console.log(`============================`);
console.log(`Test 6 - A plane has taken off from the airport.`);

// Arrange
airport = new Airport();
airportCapacity = 1;
airport.airportCapacity = airportCapacity;
plane = { id: "plane1" };
airport.airportList.push(plane);
expected = 0;

// Act
airport.takeoff(plane);
actual = airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 6: A plane has taken off from the airport: ${result}`);

// Clean up
airport = null;
airportCapacity = null;
plane = null
expected = undefined;
actual = undefined;
result = undefined;
