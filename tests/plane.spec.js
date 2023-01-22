const { assertEquals } = require(`../testing-framework.js`);
const Plane = require(`../src/Plane`);

console.log(`Plane spec - testing for Plane Class`);
console.log(`--------------------------------`);
// Test 1
console.log(`Test 1 - Testing that a Plane can land.`);

// Arrange
myPlane = new Plane(true);
expected = false;
input = myPlane.land();

// Act
actual = myPlane.checkFlying();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 1: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
myPlane = undefined;

// Test 2
console.log(`Test 2 - Testing that a Plane can takeoff.`);

// Arrange
myPlane = new Plane(false);
expected = true;
input = myPlane.takeOff();

// Act
actual = myPlane.checkFlying();

// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 1: ${result ? `Passed` : `Failed`}`);
console.log(`--------------------------------`);

// Clean
myPlane = undefined;