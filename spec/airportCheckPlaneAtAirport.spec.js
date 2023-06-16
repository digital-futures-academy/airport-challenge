const TestingFramework = require('./testing-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

const testingFramework = new TestingFramework;

let actual, expected, result;

let passed = 0;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];

const airport = new Airport(new Weather('clear'));
for (const plane of planeArray) {
    airport.landPlane(plane);
}

console.log('RUNNING TEST SUITE E: TESTS FOR checkPlaneAtAirport');
console.log('💻 ~file: checkPlaneAtAirport.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1E START - checks to see if plane exists at airport before it can take off');
console.log('');

// ARRANGE
const planeAtAirport = new Plane('plane3');
expected = true;

// ACT
actual = airport.checkPlaneAtAirport(planeAtAirport.getId());
console.log('💻 ~ file: airportCheckPlaneAtAirport.spec.js:39 ~ actual:', actual);
console.log('-------------------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 1E RESULT - check to see if plane3 is at airport expected to be True : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result = undefined;
console.log('');


console.log('========================================================');
console.log('Test 2E START - A plane cannot take off from an airport if it has not already landed ');
console.log('');

// ARRANGE
const planeNotAtAirport = new Plane('plane99');
expected = false;

// ACT
actual = airport.checkPlaneAtAirport(planeNotAtAirport);
console.log('💻 ~ file: airportCheckPlaneAtAirport.spec.js:65 ~ actual:', actual);
console.log('-------------------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// REPORT
console.log(`Test 2E RESULT - check to see if plane99 is at airport expected to be False : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result = undefined;
console.log('');
console.log(`Total Tests Passed 2/${passed}`);
console.log('========================================================');
console.log('');
console.log('');
