const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result, airport, plane;

console.log('RUNNING TEST SUITE A: ADDING PLANES TO AIRPORT');
console.log('💻 ~file: airportAddingPlaneToAirport.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 1A - given a Plane to add to the Airport planes array');
console.log('========================================================');
console.log('');

// Arrange
expected = 1;
airport = new Airport();
plane = new Plane('ba273');

// Act
airport.landPlane(plane);
actual = airport.getLandedPlanes().length;
console.log('💻 ~ file: airportAddingPlaneToAirport.spec.js:19 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1A - added plane object to planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;
console.log('');



console.log('Test 2A - can only add a plane to the airport planes array if it has an id');
console.log('========================================================');
console.log('');

// Arrange
expected = 0;
airport = new Airport();
let planeWithoutId = new Plane();

// Act
airport.landPlane(planeWithoutId);
actual = airport.getLandedPlanes.length;
console.log('💻 ~ file: airportAddingPlaneToAirport.spec.js:46 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
console.log('');


// Report
console.log(`Test 2A - can only add a plane to the airport planes array if it has an id: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;
console.log('');


console.log('Test 3A - check to see if plane object added was as intended to airports planes array');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
plane = new Plane('ba277');
expected = plane;

// Act
airport.landPlane(plane);
actual = airport.getLandedPlanes()[0];
console.log('💻 ~ file: airportAddingPlaneToAirport.spec.js:19 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 3A - check to see if plane object added was as intended to airports planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport, plane = undefined;
airport.setLandedPlanes([]);
console.log('');
