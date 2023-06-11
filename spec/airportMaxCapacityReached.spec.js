const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');


const testingFramework = new TestingFramework;

let actual, expected, result, airport;

console.log('RUNNING TESTS FOR PREVENTING PLANES FROM LANDING WHEN MAX CAPACITY IS REACHED');
console.log('💻 ~file: airportMaxCapacityReached.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');


console.log('Test 7 - canLandPlane will return false if maxCapacity has been reached');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];
for (const plane of planeArray) {
    airport.addPlaneToAirport(plane);
}
expected = false;

// Act
actual = airport.canLandPlane();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:35 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 7 - canLandPlane returns false: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');
