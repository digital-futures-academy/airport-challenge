const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result, airport;

const planeArray = [
    new Plane('plane1'),
    new Plane('plane2'),
    new Plane('plane3')
];

airport = new Airport();

for (const plane of planeArray) {
    airport.landPlane(plane);
}

console.log('RUNNING TEST SUITE F: FOR WEATHER AT AIRPORT');
console.log('💻 ~file: isWeatherStormy.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('Test 1F - Checks to see if the weather at the airport is stormy');
console.log('========================================================');
console.log('');

// ARRANGE
airport.weather = 'stormy';
expected = true;

// ACT
actual = airport.isWeatherStormy();
console.log('💻 ~ file: isWeatherStormy.spec.js:23 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1F - expecting the test to return true as the weather at the airport is stormy : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
actual, expected, result = undefined;
console.log('');

console.log('Test 2F - Prevents a plane from taking off if the weather is stormy');
console.log('========================================================');
console.log('');

// ARRANGE

airport.weather = 'stormy';
const planeToTakeOff = new Plane('plane2');
expected = 3;

// ACT
airport.takeoffPlane(planeToTakeOff.getId());
actual = airport.planes.length;
console.log('💻 ~ file: isWeatherStormy.spec.js:58 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 2F - expecting the length of airport planes array to remain 3 : ${result ? 'PASS' : 'FAIL'}`);


// CLEAN UP
actual, expected, result, airport = undefined;
console.log('');
