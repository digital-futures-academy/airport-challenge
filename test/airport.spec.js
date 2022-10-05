const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");
const { assertEquals } = require("../framework/testingFramework.js")


// Declare variables
let expected;
let actual;
let result;
let airport;
let plane;
let newCapacity;

// Test 1 - Does the plane land in the airport?
console.log(`=============================`)
console.log(`Test 1 - Does a plane land in the airport?`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1: ${result}`);

//Cleanup
airport = null;
plane = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Can default capacity be overwritten?
console.log(`=============================`)
console.log(`Test 2 - Can capacity be changed from default to 10?`)

//Arrange
airport = new Airport();
defaultCapacity = airport.capacity;
newCapacity = 10;
expected = 10;

//Act
actual = airport.setCapacity(newCapacity);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2 - Default capacity is ${defaultCapacity} which can be overwritten to ${newCapacity}: ${result}`);

//Cleanup
airport = null;
plane = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 3 - Cannot add plane when airport is full
console.log(`=============================`)
console.log(`Test 3 - Plane cannot be added when airport is full`)

//Arrange
airport = new Airport();
plane1 = new Plane();
plane2 = new Plane();
plane3 = new Plane();
airport.setCapacity(3);
expected = 'Sorry, airport is full';

//Act
airport.landPlane(plane1);
airport.landPlane(plane2);
airport.landPlane(plane3);
actual = airport.isFull(plane);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 3: ${result}`);

//Cleanup
airport = null;
plane = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 4 - Is a plane taken off from array?
console.log(`=============================`)
console.log(`Test 4 - Plane is taken off`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 0;

//Act
airport.takeOffPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 4: ${result}`);

//Cleanup
airport = null;
plane = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 5a - Prevent plane from taking off if it is not at the airport
console.log(`=============================`)
console.log(`Test 5a - Prevent plane taking off when it is not in the airport`)

//Arrange
airport = new Airport();
airport.landPlane(plane);
expected = "Error, plane is not in the airport";

//Act

actual = airport.takeOffPlane(plane);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 5a: ${result}`);

//Cleanup
airport = null;
plane = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;