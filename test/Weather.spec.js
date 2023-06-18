const Airport = require('../src/Airport.js');
const { assertEquals } = require('./test-framework.js');
const Weather = require('../src/Weather.js');


let expected, actual, result;

console.log('User Story 5');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('Check that the weather object can be set using setWeather().');

// Arrange
const weather = new Weather();
expected = 'Stormy';

// Act
weather.setWeather('Stormy');
console.log(actual);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: Check that the weather object returns stormy.: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
weather = undefined;
actual = undefined;
expected = undefined;
result = undefined;

console.log('Test 2');
console.log('================================================');
console.log('');

console.log('Check that the generateWeather() function works, occasionally producing a stormy output.');

// Arrange
const weather = new Weather();
expected = 'Stormy';

// Act
weather.setWeather('Stormy');
console.log(actual);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 2: 1111111111111xsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzCheck that the generateWeather() function works, occasionally producing a stormy output.: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
weather = undefined;
actual = undefined;
expected = undefined;
result = undefined;


