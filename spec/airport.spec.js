const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals } = require("./testing-framework.js");


let actual, result, expected, airport, plane;

console.log(`=================================================`)
console.log(`User Story 1 - Test One`);
console.log(`=================================================`)
console.log(``);

console.log(`When landPlane is called airportPlaneList increases in length by 1`)

//Arrange
expected = 1;
plane = new Plane('pl1');
airport = new Airport();
// Act
airport.landPlane(plane);
actual = airport.airportPlaneList.length;
//Assert
result = assertEquals(actual, expected);
// Report
console.log(``)
console.log(`Test 1: 1 plane added to airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``)