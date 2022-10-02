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

console.log(`===================================================`);
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

console.log(`===================================================`);
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

// Test 3: Has airport capacity been reached? Are planes prevented from landing if it has?

console.log(`===================================================`);
console.log(
  `Test 3 - check that airport capacity has been reached; check that planes cannot land if it has, and that appropriate messages are being returned to confirm`
);

// Arrange
let plane1 = 'dfa001',
  plane2 = 'dfa002',
  plane3 = 'dfa003',
  plane4 = 'dfa004',
  plane5 = 'dfa005';

myAirport = new Airport();
myAirport.setCapacity(5);
myAirport.landPlane(plane1);
myAirport.landPlane(plane2);
myAirport.landPlane(plane3);
myAirport.landPlane(plane4);
myAirport.landPlane(plane5);
// console.log(myAirport.planeArray);
expected = 'Airport capacity has been reached.';

// Act
actual = myAirport.landPlane;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.1: Capacity reached message printed when capacity === planesArr.length: ${result}`
);

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange

// Act

// Assert

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`===================================================`);
