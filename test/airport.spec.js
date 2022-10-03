const { assertEquals } = require("../testing-framework");
const Airport = require("../src/airport.js");

let result;
let actual;
let expected;

//Test 1 - add a plane to an airport
console.log("==============================================");
console.log("Test 1: land a plane at an airport");

//Arrange
airportA = new Airport();
plane = { id: `plane1` };
expected = 1;

//Act
airportA.land("Big Red 1");
actual = airportA.airportPlanes.length;

//Assert
result = assertEquals(actual, expected);
console.log(`Test 1: A plane was added to an airport: ${result}`);

//Clean Up
airport = null;
plane = null;
expected = undefined;
actual = undefined;
result = undefined;

