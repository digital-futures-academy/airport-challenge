const Airport = require("../src/airport");
const Plane = require("../src/plane");
const { assertEquals } = require("../framework/testingFramework")


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
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Can default capacity be overwritten?
console.log(`=============================`)
console.log(`Test 2a - Can capacity be changed from default to 10?`)

//Arrange
airport = new Airport();
newCapacity = 10;
expected = 10;

//Act
actual = airport.setCapacity(newCapacity);

//Assert
result = assertEquals(actual, expected);
console.log(`Test 2: ${result}`);

//Cleanup
airport = null;
newCapacity = null;
expected = undefined;
actual = undefined;
result = undefined;
