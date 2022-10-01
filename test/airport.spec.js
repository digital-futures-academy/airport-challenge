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
console.log(`Test 1: Plane landed: ${result}`);

// Add second plane
plane = `dfa-002`;
myAirport.landPlane(plane);
result = assertEquals(actual, expected);
console.log(`Test 1: Plane landed: ${result}`);
console.log(myAirport.planeArray);

// Clean up
myAirport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;
