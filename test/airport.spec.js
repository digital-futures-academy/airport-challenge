/* eslint-disable quotes */
'use strict';
const { assertEquals } = require('../testing-framework');

const Airport = require('../src/airport');

let control;
let expected;
let actual;
let result;
let myAirport;
let plane;

// Test 1 - has the plane landed?

console.log(`============================`);
console.log(`Test 1 - check success of landPlane`);

// Arrange
myAirport = new Airport();
control = myAirport.planeArray.length;
plane = `dfa-001`;
expected = control + 1;

// Act
myAirport.landPlane(plane);
actual = myAirport.planeArray.length;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 1.1: Plane landed: ${result}`);

// Add second plane
plane = `dfa-002`;
myAirport.landPlane(plane);
result = assertEquals(actual, expected);
console.log(`Test 1.2: Additional plane landed: ${result}`);
console.log(myAirport.planeArray);

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Is there a default capacity on new airport instances and can it be changed?

console.log(`============================`);
console.log(`Test 2.1 - check that airport capacity has a default value of 10`);

// Arrange
myAirport = new Airport();
expected = 10;

// Act
actual = myAirport.capacity;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2.1: Correct default capacity: ${result}`);

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`Test 2.2 - check that setCapacity changes the default value`);

// Arrange
myAirport = new Airport();
expected = myAirport.capacity !== 10;

// Act
myAirport.setCapacity();
actual = myAirport.capacity !== 10;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2.2: Capacity changed: ${result}`);

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
