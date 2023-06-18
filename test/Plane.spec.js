const Airport = require('../src/Airport.js');
const { assertEquals } = require('./test-framework');
const Plane = require('../src/Plane.js');


let expected, actual, result;

console.log('Plane Tests');
console.log('================================================');

console.log('Test 1');
console.log('================================================');
console.log('');

console.log('Check that the plane object return an iterative ID.');

// Arrange
plane1 = new Plane();
plane2 = new Plane();
expected = {"id": 2};

// Act
actual = plane2;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: Check that the plane object return an iterative ID: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
actual = undefined;
expected = undefined;
result = undefined;
plane1 = undefined;
plane2 = undefined;

console.log('Test 2');
console.log('================================================');
console.log('');

console.log('Check that the plane object can be added to the airportPlanes array.');

// Arrange
airport = new Airport()
plane = new Plane();
expected = [plane];

// Act
airport.landPlane(plane);
actual = airport.airportPlanes;
actual = JSON.stringify(actual);
expected = JSON.stringify(expected);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 2: Check that the plane object can be added to the airportPlanes array: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
actual = undefined;
expected = undefined;
result = undefined;
plane = undefined;
airport = undefined;