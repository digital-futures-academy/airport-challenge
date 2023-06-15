const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport.js');

let expected, actual, result;

console.log('Test 1');
console.log('================================================');
console.log('');

console.log('After adding a plane to the airport planes list check that the array has increased in length by 1.');

// Arrange
let airport = new Airport();
plane = { id: '0001' };
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.airportPlanes.length;

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: 1 plane added to the airport: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 

actual, expected, result, plane, Airport;

console.log('Test 2');
console.log('================================================');
console.log('');

console.log('Test that the specific plane passed to addPlane is actually added to the airportPlanes array.');

// Arrange
airport = new Airport();
plane = { id: '0001' };
expected = [{ id: '0001' }];

// Act
airport.landPlane(plane);
actual = airport.airportPlanes;
actual = JSON.stringify(airport.airportPlanes);
expected = JSON.stringify(expected);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 2: Check that the right plane is added to the airport: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up

actual, expected, result, plane, Airport;