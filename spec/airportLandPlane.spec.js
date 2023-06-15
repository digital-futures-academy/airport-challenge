const TestingFramework = require('./testing-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

const testingFramework = new TestingFramework;
let passed = 0;
let actual, expected, result, airport, plane;

console.log('RUNNING TEST SUITE A: TESTS FOR landPlane');
console.log('💻 ~file: airportLandPlane.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1A START - given a Plane to add to the Airport planes array');
console.log('');

// Arrange
expected = 1;
airport = new Airport(new Weather('clear'));
plane = new Plane('ba273');

// Act
airport.landPlane(plane);
actual = airport.getLandedPlanes().length;
console.log('💻 ~ file: airportLandPlane.spec.js:26 ~ actual:', actual);
console.log('----------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 1A RESULT - added plane object to planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;
console.log('');


console.log('========================================================');
console.log('Test 2A START - can only add a plane to the airport planes array if it has an id');
console.log('');

// Arrange
expected = 0;
airport = new Airport(new Weather('clear'));
let planeWithoutId = new Plane();

// Act
airport.landPlane(planeWithoutId);
actual = airport.getLandedPlanes.length;
console.log('💻 ~ file: airportLandPlane.spec.js:54 ~ actual:', actual);
console.log('------------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 2A RESULT - should return False as Plane does not have an id: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;
console.log('');

console.log('========================================================');
console.log('Test 3A START - check to see if plane object added was as intended to airports planes array');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));
plane = new Plane('ba277');
expected = plane;

// Act
airport.landPlane(plane);
actual = airport.getLandedPlanes()[0];
console.log('💻 ~ file: airportLandPlane.spec.js:81 ~ actual:', actual);
console.log('------------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 3A RESULT- Plane added was the same passed into landPlane: ${result ? 'PASS' : 'FAIL'}`);
console.log('');
console.log(`Total Tests Passed 3/${passed}`);
console.log('========================================================');
console.log('');

// clean Up
expected, actual, result, airport, plane = undefined;
airport.setLandedPlanes([]);
console.log('');
console.log('');
