const TestingFramework = require('./testing-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');


const testingFramework = new TestingFramework;

let actual, expected, result, airport;

let passed = 0;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];

console.log('RUNNING TEST SUITE C: TESTS FOR isAirportFull ');
console.log('💻 ~file: airportIsAirportFull.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1C START - isAirportFull will return true if maxCapacity has been reached');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));

for (const plane of planeArray) {
    airport.landPlane(plane);
}
expected = true;

// Act
actual = airport.isAirportFull();
console.log('💻 ~ file: airportIsAirportFull.spec.js:39 ~ actual:', actual);
console.log('-----------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 1C RESULT - isAirportFull returns true: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');

console.log('========================================================');
console.log('Test 2C START - Plane will not be added to airports planes array if isAirportFull is true');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));

for (const plane of planeArray) {
    airport.landPlane(plane);
}
expected = 5;
const planeThatWillNotBeAdded = new Plane('plane6');

// Act
airport.landPlane(planeThatWillNotBeAdded);
actual = airport.getLandedPlanes().length;
console.log('💻 ~ file: airportIsAirportFull.spec.js:70 ~ actual:', actual);
console.log('-----------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 2C RESULT - plane will not be added to planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');
console.log(`Total Tests Passed 2/${passed}`);
console.log('========================================================');
console.log('');
console.log('');
