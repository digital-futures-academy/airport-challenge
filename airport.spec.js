//File that includes all of the tests for the Airport Challenge

//Import the Airport class
const Airport = require("/Users/oonaghparker/Desktop/debug/airport-challenge/src/airport.js")

//Define matcher function- same as what Ed used in the Bobs Bagels task
const assertEquals = (actualResult, expectedResult) => actualResult === expectedResult;

let airport;
let plane;
let plane2;
let plane3;
let expected;
let actual;
let result;

//--------------------------------------
//Test 1- Land the plane

//Arrange
airport = new Airport();
plane = { id: `Plane 1` };
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.landedPlanes.length;

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Landed plane in the airport: ${result}`);

//--------------------------------------
//Test 2- Change airport capacity

//Arrange
airport = new Airport();
plane = { id: `Plane 1` };
plane2 = { id: `Plane 2` };
plane3 = { id: `Plane 3` };
expected = 3;

// Act
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
actual = airport.airportCapacity(3);

// Assert
result = assertEquals(actual, expected);
console.log(`Test 2: Change airport capacity: ${result}`);

