const Airport = require('../src/Airport.js');
const Plane = require('../src/Plane.js');
const { assertEquals } = require("./testing-framework.js");


let actual, result, expected, airport, plane1;

console.log(`=================================================`);
console.log(`User Story 1 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`When landPlane is called airportPlaneList increases in length by 1`);

//Arrange
expected = 1;
plane1 = new Plane('pl1');
airport = new Airport;

// Act
airport.landPlane(plane1);
actual = airport.airportPlaneList.length;

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 1.1: 1 plane added to airport: ${result}`);
console.log(`Test 1.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

console.log(`=================================================`);
console.log(`User Story 1 - Test 2`);
console.log(`=================================================`);
console.log(``);

console.log(`Test 1.2: Confirm plane with id of 'pl1' has landed:`);
console.log(`Planes in airport:`);
console.log(airport.airportPlaneList);
console.log(``);
console.log(``);

// Clean Up
airport.airportPlaneList = [];
result = undefined;
actual = undefined;
