const TestingFramework = require('./testing-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

const testingFramework = new TestingFramework;

let actual, expected, result, plane, airport;

console.log('RUNNING TEST SUITE G: FOR A LANDED PLANE MUST BE AT AN AIRPORT');
console.log('💻 ~file: planeLanded.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1G START - if a plane lands at an airport it sets plane landed to true');
console.log('');

// ARRANGE
airport = new Airport();
plane = new Plane('plane1');
expected = true;

// ACT
airport.landPlane(plane);
actual = plane.getLanded();
console.log('💻 ~ file: planeLanded.spec.js:25 ~ actual:', actual);
console.log('-------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1G RESULT - landed status of plane expected to be true : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result, plane, airport = undefined;
console.log('');

console.log('========================================================');
console.log('Test 2G START - if a plane takes off it sets landed to false');
console.log('');

// ARRANGE
airport = new Airport();
plane = new Plane('plane1');
expected = false;

// ACT
airport.landPlane(plane);
airport.takeoffPlane(plane);
actual = plane.getLanded();
console.log('💻 ~ file: planeLanded.spec.js:52~ actual:', actual);
console.log('-------------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 2G RESULT - landed status of plane expected to be false : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result, plane, airport = undefined;
console.log('');
console.log('========================================================');
console.log('');
console.log('');
