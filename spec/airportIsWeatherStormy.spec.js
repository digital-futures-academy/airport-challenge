const TestingFramework = require('./testing-framework');
const Airport = require('../src/airport');
const Plane = require('../src/planes');

const testingFramework = new TestingFramework;

let actual, expected, result, airport, weather;

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
weather = 'stormy';
expected = true;

// ACT
airport.setWeather(weather);
actual = airport.isWeatherStormy();
console.log('💻 ~ file: isWeatherStormy.spec.js:23 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1F - expecting the test to return true as the weather at the airport is stormy : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
weather = 'clear';
airport.setWeather(weather);
actual, expected, result, weather = undefined;
console.log('');

console.log('Test 2F - Prevents a plane from taking off if the weather is stormy');
console.log('========================================================');
console.log('');

// ARRANGE
const planeToTakeOff = new Plane('plane2');
weather = 'stormy';
expected = 3;

// ACT
airport.setWeather(weather);
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
weather = 'clear';
airport.setWeather(weather);
actual, expected, result, weather = undefined;
console.log('');


console.log('Test 3F - Prevents a plane from landing if the weather is stormy');
console.log('========================================================');
console.log('');

// ARRANGE
weather = 'stormy';
expected = 3;
const planeToLand = new Plane('plane4');


// ACT
airport.setWeather(weather);
airport.landPlane(planeToLand);
actual = airport.planes.length;
console.log('💻 ~ file: isWeatherStormy.spec.js:92 ~ actual:', actual);
console.log('=============================================================');
console.log('');

// ASSERT
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 3F - expecting the length of airport planes array to remain 3 : ${result ? 'PASS' : 'FAIL'}`);

// CLEAN UP
weather = 'clear';
airport.setWeather(weather);
actual, expected, result, weather = undefined;
console.log('');
