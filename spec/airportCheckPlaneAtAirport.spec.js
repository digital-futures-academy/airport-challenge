const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let airport;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3'),
    new Plane('plane4'),
    new Plane('plane5')
];

console.log('RUNNING TESTS FOR CHECKING IF PLANE EXISTS AT AIRPORT');
console.log('💻 ~file: checkPlaneAtAirport.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 12 - checks to see if plane exists at airport');
console.log('========================================================');
console.log('');

// ARRANGE
airport = new Airport();
for (const plane of planeArray) {
    airport.addPlaneToAirport(plane);
}

const planeAtAirport = new Plane('plane3');
const planeNotAtAirport = new Plane('plane99');
const expectedAtAirport = true;
const expectedNotAtAirport = false;

// ACT
const actualAtAirport = airport.checkPlaneAtAirport(planeAtAirport.getId());
const actualNotAtAirport = airport.checkPlaneAtAirport(planeNotAtAirport.getId());
console.log('💻 ~ file: airportCheckPlaneAtAirport.spec.js:38 - 39 ~ actualAtAirport:', actualAtAirport + ' actualNotAtAirport: ', actualNotAtAirport);
console.log('=============================================================');
console.log('');

// ASSERT
const resultAtAirport = testingFramework.assertEquals(actualAtAirport, expectedAtAirport);
const resultNotAtAirport = testingFramework.assertEquals(actualNotAtAirport, expectedNotAtAirport);

// Report
console.log(`Test 12 - check to see if plane2 is at airport expected to be True : ${resultAtAirport ? 'PASS' : 'FAIL'}`);
console.log(`Test 12 - check to see if plane99 is at airport expected to be False : ${resultNotAtAirport ? 'PASS' : 'FAIL'}`);
