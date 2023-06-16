const Airport = require('../src/airport');
const Plane = require('../src/plane');
const { assertEquals } = require("./testing-framework.js");


let actual, result, expected, airport, plane;

plane1 = new Plane('pl1');
plane2 = new Plane(`pl2`);
airport = new Airport;
airport.airportPlaneList = [plane1, plane2];

console.log(`=================================================`);
console.log(`User Story 4 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`takeOff removes 1 from airportPlaneList length`);

//Arrange - planes and airport set above
expected = 1;

// Act
airport.takeOff(plane1);
actual = airport.airportPlaneList.length;

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 4.1: 1 plane takes off, leaving 1 left in airport: ${result}`);
console.log(`Test 4.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
airport.airportPlaneList = [plane1, plane2];
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 4 - Test 3`);
console.log(`=================================================`);
console.log(``);

console.log(`planeInAirport returns true if that plane is in airportPlaneList`);

//Arrange - planes and airport set above
expected = true;

// Act
actual = airport.planeInAirport(plane2);

//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 4.3: planeInAirport returns true if plane is in airport: ${result}`);
console.log(`Test 4.3: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
airport.airportPlaneList = [plane1];
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 4 - Test 4`);
console.log(`=================================================`);
console.log(``);

console.log(`planeInAirport returns undefined if that plane is not in airportPlaneList`);

//Arrange - plane and airport set above
expected = undefined;

console.log(airport.airportPlaneList);
// Act
actual = airport.planeInAirport(plane2);
console.log(airport.planeInAirport(plane2))
//Assert
result = assertEquals(actual, expected);

// Report
console.log(``);
console.log(`Test 4.4: planeInAirport returns undefined if plane is not in airport: ${result}`);
console.log(`Test 4.3: ${(result) ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

