const { assertEquals } = require("../test/TestingFrameworks");
const Airport = require("../src/airport");

let expected;
let actual;
let result;
let airport;
let plane;
let size;
let airportCapacity;

// Test 1 - has the plane landed at the airport?

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


// Test 2 - does airport have a capacity?

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


// Test 3 - does airport have a changeable capacity?

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


// Test 4 - is the airport capacity full?

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
size = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5 - will a plane land if capacity is full?

console.log(`============================`);
console.log(`Test 5 - The plane won't land if the capacity is full.`);

// Arrange
airport = new Airport();
plane = { id: `plane1` };
expected = true;

// Act
airport.fullCapacity(plane);
actual = airport.airportCapacity === airport.airportList.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 5: The airport has no extra planes when the capacity is full: ${result}`);

// Clean up
airport = null;
size = null;
expected = undefined;
actual = undefined;
result = undefined;

