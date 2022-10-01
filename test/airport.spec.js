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
let successMsg;

// Test 1 - has the plane landed?

console.log(`============================`);
console.log(
  `Test 1 - check success of landPlane: array length should change and success message should be logged`
);

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

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 2 - Is there a default capacity on new airport instances and can it be changed?

console.log(`============================`);
console.log(
  `Test 2 - check that airport capacity has a default value of 10 and is successfully changed with setCapacity`
);

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

// Arrange
myAirport = new Airport();
expected = true;

// Act
myAirport.setCapacity(20);
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
