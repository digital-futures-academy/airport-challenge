const { assertEquals } = require(`../test-framework`);
const Airport = require(`../src/Airport`);
const Plane = require("../src/Plane");

// TEST 9: 
console.log(`---------------------------------------------`)
console.log(`Test 9: If takeOff is true then notInAirport() should return true`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
plane.notInAirport();
actual = plane.notInThisAirport;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 9 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);