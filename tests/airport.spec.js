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

// Test 4
console.log(`Test 4 - Testing that an Airport has a default capacity set.`);

// Arrange
firstAirport = new Airport();
expected = 5;

// Act
actual = firstAirport.getCapacity();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 4: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 5
console.log(`Test 5 - Testing that an Airport capacity can be changed.`);

// Arrange
firstAirport = new Airport();
expected = 10;
input = firstAirport.changeCapacity(10);

// Act
actual = firstAirport.getCapacity();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 5: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 6
console.log(`Test 6 - Testing that an Airport capacity can be changed with an edge case.`);

// Arrange
firstAirport = new Airport();
expected = 0;
input = firstAirport.changeCapacity(0);

// Act
actual = firstAirport.getCapacity();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 6: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 7
console.log(`Test 7 - Testing that an Airport capacity can't be changed with a boundary case.`);

// Arrange
firstAirport = new Airport();
expected = `invalid capacity entered`;

// Act
actual = firstAirport.changeCapacity(-1);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 7: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 8
console.log(`Test 8 - Testing that an Airport capacity can't be changed with something that is not a valid Integer.`);

// Arrange
firstAirport = new Airport();
expected = `invalid capacity entered`;

// Act
actual = firstAirport.changeCapacity(`ten`);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 8: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;

// Test 9
console.log(`Test 9 - Testing that an Airport can't land a Plane if it is at capacity.`);

// Arrange
firstAirport = new Airport();
myPlane = new Plane(true);
firstAirport.changeCapacity(0)
expected = `Cannot land plane, Airport is at capacity`;

// Act
actual = firstAirport.landPlane(myPlane);

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 9: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
firstAirport = undefined;
myPlane = undefined;