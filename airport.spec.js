//File that includes all of the tests for the Airport Challenge

//Import the Airport class
const Airport = require("/Users/oonaghparker/Desktop/debug/airport-challenge/src/airport.js")

//Define matcher function- same as what Ed used in the Bobs Bagels task
const assertEquals = (actualResult, expectedResult) => actualResult === expectedResult;

//--------------------------------------
//Test 1- Land the plane

//Arrange
let airport = new Airport();
plane = { id: `Plane 1` };
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Landed plane in the airport: ${result}`);

//--------------------------------------
//Test 1- Land the plane

//Arrange
let airport = new Airport();
plane = { id: `Plane 1` };
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Landed plane in the airport: ${result}`);
