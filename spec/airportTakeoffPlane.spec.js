const TestingFramework = require('./testing-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

const testingFramework = new TestingFramework;

let actual, expected, result, airport;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];

console.log('RUNNING TEST SUITE D: FOR TESTING TakeOffPlane');
console.log('💻 ~file: takeoffPlane.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1D START - takeoffPlane will remove a plane from array');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));

for (const plane of planeArray) {
    airport.landPlane(plane);
}

expected = 4;
const planeToTakeOff = planeArray[3];

// Act
airport.takeoffPlane(planeToTakeOff);
actual = airport.getLandedPlanes().length;
console.log('💻 ~ file: takeoffPlane.spec.js:38 ~ actual:', actual);
console.log('--------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1D RESULT - removes a plane from airport planes array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');

console.log('========================================================');
console.log('Test 2D START - takeoffPlane must have a valid plane id to remove from the planes array');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));
for (const plane of planeArray) {
    airport.landPlane(plane);
}
expected = 5;
let planeWithoutId = new Plane();

// ACT
airport.takeoffPlane(planeWithoutId);
actual = airport.getLandedPlanes().length;
console.log('💻 ~ file: takeoffPlane.spec.js:66 ~ actual:', actual);
console.log('----------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 2D RESULT - takeoffPlane should not remove a plane from the array: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
console.log('');

console.log('========================================================');
console.log('Test 3D START - takeoffPlane returns a confirmation of the plane id removed from the airport');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));
for (const plane of planeArray) {
    airport.landPlane(plane);
}
expected = `${planeArray[2].id} has taken off from the airport.`;
const planeToRemove = planeArray[2];

// ACT
actual = airport.takeoffPlane(planeToRemove);
console.log('💻 ~ file: takeoffPlane.spec.js:95 ~ actual:', actual);
console.log('---------------------------------------------------------');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 3D RESULT - takeoffPlane returns a confirmation of the plane id removed from the airport: ${result ? 'PASS' : 'FAIL'}`);
console.log('');
console.log('========================================================');

// clean Up
expected, actual, result, airport = undefined;
console.log('');
console.log('');
