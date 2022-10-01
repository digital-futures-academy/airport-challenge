const Airport = require("../src/airport.js");
const { assertEquals } = require("../testing-framework.js");

// Test 1 - Instructing the plane to land
console.log(`============================`);
console.log(`Test 1 - add puts something into the basket`);

// Arrange
let airport = new Airport;
let plane = { id: `Plane1` };
let expected = 1;

// Act 
airport.landPlane(plane);
let actual = airport.planeList.length;

// Assert
let result = assertEquals(actual, expected);
console.log(`Test 1: Plane1 has landed at the airport => 1 is: ${result}`);