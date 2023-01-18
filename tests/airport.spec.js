const { assertEquals } = require(`../test-framework`);
const Airport = require(`../src/Airport`);
const Plane = require("../src/Plane");

let expected;
let actual;
let result;
let airport;
let plane;
// let airportPlanes = [];

// TEST 1: 
console.log(`--------------------------------------`)
console.log(`Test 1: airportPlanes length increases to 1 when addPlane is called with an instance of plane`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.addPlane(plane);
actual = airport.airportPlanes.length;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 1 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// TEST 5: 
console.log(`---------------------------------------------`)
console.log(`Test 5: The defaultCapacity of the airport increases to 10 when increaseCapacity is called`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.increaseCapacityTo();
actual = airport.NewDefaultCapacity;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 5 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);

// // TEST 6: 
console.log(`---------------------------------------------`)
console.log(`Test 6: atDefaultCapacity() returns true if airportPlanes has reached it's defaultCapacity`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
airport.atDefaultCapacity();
actual = airport.airportFull;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 6 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);



