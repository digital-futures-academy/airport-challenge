const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];

const airport = new Airport();
for (const plane of planeArray) {
    airport.landPlane(plane);
}

console.log('RUNNING TEST SUITE E: FOR CHECKING IF PLANE EXISTS AT AIRPORT');
console.log('💻 ~file: checkPlaneAtAirport.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 1E - checks to see if plane exists at airport before it can take off');
console.log('========================================================');
console.log('');

// ARRANGE
const planeAtAirport = new Plane('plane3');
expected = true;


// ACT
actual = airport.checkPlaneAtAirport(planeAtAirport.getId());
console.log('💻 ~ file: airportCheckPlaneAtAirport.spec.js:38 ~ actualAtAirport:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);



// Report
console.log(`Test 1E - check to see if plane2 is at airport expected to be True : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result = undefined;
console.log('');



console.log('Test 2E - A plane cannot take off from an airport if it has not already landed ');
console.log('========================================================');
console.log('');

// ARRANGE
const planeNotAtAirport = new Plane('plane99');
expected = false;

// ACT
actual = airport.checkPlaneAtAirport(planeNotAtAirport.getId());
console.log('💻 ~ file: airportCheckPlaneAtAirport.spec.js:26 ~ actualAtAirport:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// REPORT
console.log(`Test 2E - check to see if plane99 is at airport expected to be False : ${result ? 'PASS' : 'FAIL'}`);
