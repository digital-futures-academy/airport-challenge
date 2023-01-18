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

// TEST 2: 
console.log(`---------------------------------------------`)
console.log(`Test 2: check that the plane to land has the correct flightNumber`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
airport.landCorrectPlane();
actual = airport.landingPlane;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 2 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);


//TEST 4: 
console.log(`---------------------------------------------`)
console.log(`Test 4: The maximum length of airportPlanes is output as defaultCapacity`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = 0;

//Act
airport.getCapacity();
actual = airport.defaultCapacity;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 4 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);


// TEST 5: 
console.log(`---------------------------------------------`)
console.log(`Test 5: The defaultCapacity of the airport increases to 1 when increaseCapacity is called`);

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


// TEST 6: 
console.log(`---------------------------------------------`)
console.log(`Test 6: The defaultCapacity of the airport decreases when decreaseCapacity() is called`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = -1;

//Act
airport.decreaseCapacityTo();
actual = airport.NewDefaultCapacity;

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

// TEST 7: 
console.log(`---------------------------------------------`)
console.log(`Test 7: atDefaultCapacity() returns true if airportPlanes has reached it's defaultCapacity`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
airport.atDefaultCapacity();
actual = airport.airportFull;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 7 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);


// TEST 8: 
console.log(`---------------------------------------------`)
console.log(`Test 8: preventAirportPush() should return true if airportFull`);

//Arrange
airport = new Airport();
plane = new Plane();
expected = true;

//Act
airport.preventAirportPush();
actual = airport.noLandings;

//Assert
result = assertEquals(expected, actual);

console.log(`Test 8 Result: ${result}`);

// Clean Up
expected = null;
actual = null;
result = undefined;
airport = undefined;
plane = null;

console.log(`---------------------------------------------`);



