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

console.log('RUNNING TEST SUITE H: TESTS FOR CheckPlaneCanLand');
console.log('💻 ~file: airportCheckPlaneCanLand.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1H START - checks to see if capacity and weather conditions are okay to land at airport');
console.log('');

// ARRANGE
airport = new Airport(new Weather('clear'));
expected = true;

// ACT
actual = airport.checkPlaneCanLand();
console.log('💻 ~ file: airportCheckPlaneCanLand.spec.js:34 ~ actual:', actual);
console.log('-------------------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 1H RESULT - Plane should be able to land at the airport : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result, airport = undefined;
console.log('');

console.log('========================================================');
console.log('Test 2H START - checks to see if capacity prevents plane to land at full airport');
console.log('');

// ARRANGE
airport = new Airport(new Weather('clear'));
for (const plane of planeArray) {
    airport.landPlane(plane);
}

expected = false;

// ACT
actual = airport.checkPlaneCanLand();
console.log('💻 ~ file: airportCheckPlaneCanLand.spec.js:63 ~ actual:', actual);
console.log('-------------------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 2H RESULT - Plane should not be able to land at the airport : ${result ? 'PASS' : 'FAIL'}`);
actual, expected, result, airport = undefined;
console.log('');

console.log('========================================================');
console.log('Test 2H START - checks to see if weather prevents plane to land at full airport');
console.log('');

// ARRANGE
airport = new Airport(new Weather('stormy'));
expected = false;

// ACT
actual = airport.checkPlaneCanLand();
console.log('💻 ~ file: airportCheckPlaneCanLand.spec.js:86 ~ actual:', actual);
console.log('-------------------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);
passed += testingFramework.passCount(result);

// Report
console.log(`Test 2H RESULT - Plane should not be able to land at the airport due to stormy weather : ${result ? 'PASS' : 'FAIL'}`);
actual, expected, result, airport = undefined;
console.log('');

console.log('');
console.log(`Total Tests Passed 3/${passed}`);
console.log('========================================================');
console.log('');
console.log('');
