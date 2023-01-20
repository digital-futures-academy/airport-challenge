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
console.log(`Test 11: if the plane is not in the airportPlanes() then it cannot takeoff`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
plane.noTakeOff();
actual = plane.noTakeOffRequired;

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
console.log(`Test 12: If the plane is already in airportPlanes then it cannot land.`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
plane.noLanding();
actual = plane.noLandingRequired;

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

