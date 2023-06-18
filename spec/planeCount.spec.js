const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals } = require("./testing-framework.js");

let actual, result, expected, airport, plane1, plane2;

airport = new Airport;
plane1 = new Plane('pl1');
plane2 = new Plane('pl2');


console.log(`=================================================`);
console.log(`User Story 8 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`planeCount return the correct of planes in an airport`);

//Arrange
airport.airportPlaneList = [plane1, plane2];
expected = 2,

 // Act
actual = airport.planeCounter()

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 8.1: : ${result}`);
console.log(`Test 8.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);
