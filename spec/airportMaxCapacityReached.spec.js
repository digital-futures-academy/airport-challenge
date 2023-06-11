const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');


const testingFramework = new TestingFramework;

let actual, expected, result, airport;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];

console.log('RUNNING TESTS FOR PREVENTING PLANES FROM LANDING WHEN MAX CAPACITY IS REACHED');
console.log('💻 ~file: airportMaxCapacityReached.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');


console.log('Test 7 - canLandPlane will return false if maxCapacity has been reached');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();

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

console.log('Test 8 - Plane will not be added to airports planes array if max capacity has reached');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();

for (const plane of planeArray) {
    airport.addPlaneToAirport(plane);
}
expected = 5;
const planeThatWillNotBeAdded = new Plane('plane6');

// Act
airport.addPlaneToAirport(planeThatWillNotBeAdded);
actual = airport.planes.length;
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:67 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 8 - plane will not be added to planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');
