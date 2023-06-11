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

console.log('RUNNING TESTS FOR REMOVING PLANES FROM PLANES ARRAY');
console.log('💻 ~file: airportRemovePlaneFromAirport.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 9 - removePLaneFromAirport will remove a plane from array');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();

for (const plane of planeArray) {
    airport.addPlaneToAirport(plane);
}

expected = 4;

// Act
airport.removePlaneFromAirport('plane4');
actual = airport.planes.length;
console.log('💻 ~ file: removePLaneFromAirport.spec.js:37 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 9 - removes a plane from airport planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');

console.log('Test 10 - removePLaneFromAirport must have a valid plane id to remove from the planes array');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
for (const plane of planeArray) {
    airport.addPlaneToAirport(plane);
}
expected = 5;
let planeWithoutId = '';

// ACT
airport.removePlaneFromAirport(planeWithoutId);
actual = airport.planes.length;
console.log('💻 ~ file: removePLaneFromAirport.spec.js:67 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 10 - removePLaneFromAirport must have a valid plane id to remove from the planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');

console.log('Test 11 - removePLaneFromAirport returns a confirmation of the plane id removed from the airport');
console.log('========================================================');
console.log('');

// Arrange
airport = new Airport();
for (const plane of planeArray) {
    airport.addPlaneToAirport(plane);
}
expected = `${planeArray[2].id} has taken off from the airport.`;
const planeToRemove = 'plane3';

// ACT
actual = airport.removePlaneFromAirport(planeToRemove);
console.log('💻 ~ file: removePLaneFromAirport.spec.js:67 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 11 - removePLaneFromAirport returns a confirmation of the plane id removed from the airport: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');
