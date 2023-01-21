const { assertTrue } = require(`../test-framework`);
const Airport = require(`../src/Airport`);
const Plane = require("../src/Plane");

// TEST 7: 
console.log(`---------------------------------------------`);
console.log(`Test 7: If takenOff is true then notInAirport() should return true`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
plane.takeOffPlane();
actual = plane.takenOff;

//Assert
result = assertTrue(actual);

console.log(`Test 7 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// TEST 8: 
console.log(`---------------------------------------------`);
console.log(`Test 8: If takenOff is true then notInAirport() should return true`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
plane.notInAirport();
actual = plane.notInThisAirport;

//Assert
result = assertTrue(actual);

console.log(`Test 8 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// TEST 10: 
console.log(`---------------------------------------------`);
console.log(`Test 10: if the plane is not in the airportPlanes() then it cannot takeoff`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
plane.noTakeOff();
actual = plane.noTakeOffRequired;

//Assert
result = assertTrue(actual);

console.log(`Test 10 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// TEST 11: 
console.log(`---------------------------------------------`);
console.log(`Test 11: If the plane is already in airportPlanes then it cannot land.`);

//Arrange
airport = new Airport();
plane = new Plane();

//Act
plane.noLanding();
actual = plane.noLandingRequired;

//Assert
result = assertTrue(actual);

console.log(`Test 11 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

