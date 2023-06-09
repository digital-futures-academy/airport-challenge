const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result, airport, plane;

console.log('Test1 - given a Plane to add to the Airport planes array');
console.log('========================================================');
console.log('');

// Arrange
expected = 1;
airport = new Airport();
plane = new Plane();

// Act
airport.addPlaneToAirport(plane);
actual = airport.planes.length;
console.log('💻 ~ file: airport.spec.js:19 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
console.log(actual);
console.log(expected);
result = testingFramework.assertEquals(actual, expected);
console.log(result);
// Report
console.log(`Test 1 - added plane object to planes array: ${result ? 'PASS' : 'FAIL'}`);
expected = undefined;
actual = undefined;
result = undefined;
