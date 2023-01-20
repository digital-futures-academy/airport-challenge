const Airport = require(`../src/Airport`);
const { assertEquals } = require(`../testing-framework.js`);
//const Plane = require(`../src/Plane`); - removed for loose coupling.

console.log(`airport runner - testing for Airport Class`);
console.log(`Test 1 - Testing that an Airport can land a Plane.`);
// Arrange
firstAirport = new Airport();
myPlane = { flying: true, land: () => this.flying = false, checkFlying: () => this.flying };
expected = false;
input = firstAirport.landPlane(myPlane);
// Act
actual = myPlane.checkFlying();
// Assert
console.log(`actual:${actual}`);
console.log(`expected:${expected}`);
result = assertEquals(actual, expected);
console.log(`Test 1 - Testing that an Airport can land a Plane: ${result ? `Passed` : `Failed`}`);