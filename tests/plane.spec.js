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

// TEST 11: 
console.log(`---------------------------------------------`)
console.log(`Test 11: If notInThisAirport() returns true then takeOff() should return false`) 

//Arrange
airport = new Airport();
plane = new Plane();
expected = false;

//Act
plane.notInAirport();
actual = plane.takeOff;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 11 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// TEST 12: 
console.log(`---------------------------------------------`)
console.log(`Test 12: If notInThisAirport() returns true then land should return true`);
//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
plane.notInAirport();
actual = plane.land;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 12 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

