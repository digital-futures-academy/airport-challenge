const Airport = require(`../src/Airport`);
const { assertEquals } = require(`../testing-framework.js`);
const Plane = require(`../src/Plane`);

console.log(`airport spec - testing for Airport Class`);
console.log(`--------------------------------`);
// Test 1
console.log(`Test 1 - Testing that an Airport can land a Plane.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane(true);
expected = false;
input = firstAirport.landPlane(myPlane);

// Act
actual = myPlane.checkFlying();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 1: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 2
console.log(`Test 2 - Testing that an Airport will not land something that is not an object.`);

// Arrange
firstAirport = new Airport();
myPlane = `Plane`;
expected = `This plane cannot be landed`;

// Act
actual = firstAirport.landPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 2: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 3
console.log(`Test 3 - Testing that an Airport will not land a Plane that has already landed.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane();
expected = `This plane cannot be landed`;

// Act
actual = firstAirport.landPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 3: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;