/* eslint-disable quotes */
'use strict';
const {
  assertEquals,
  assertTrue,
  assertFalse,
} = require('../testing-framework');

let expected;
let actual;
let result;
let myAirport;
let plane;

// Test 1 - is anything added to the basket?

console.log(`============================`);
console.log(`Test 1 - check success of landPlane`);

// Arrange
myAirport = new Airport();

plane = { id: `plane1` };
expected = 1;

// Act
myAirport.landPlane(plane);
actual = myAirport.planeArray.length;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Plane landed: ${result}`);

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
