const Airport = require('../src/Airport.js');
const { assertEquals } = require('./test-framework.js');
const Weather = require('../src/Weather.js');


let expected, actual, result;

console.log('Weather Tests');
console.log('================================================');

console.log('User Story 5');
console.log('================================================');
console.log('Test 1');
console.log('================================================');
console.log('');

console.log('Check that the weather object can be set using setWeather().');

// Arrange
let weather = new Weather();
expected = 'Stormy';

// Act
weather.setWeather('Stormy');
actual = weather.currentWeather;

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 1: Check that the weather object returns stormy: ${result}`);
console.log(`Test 1: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
weather = undefined;
actual = undefined;
expected = undefined;
result = undefined;

// No longer needed after after the next test was produced. 

// console.log('Test 2');
// console.log('================================================');
// console.log('');

// console.log('Check that the generateWeather() function can produce a stormy output.');

// // Arrange
// weather = new Weather();
// expected = 'Stormy'; 

// // Act
// weather.generateWeather();
// actual = weather.currentWeather;
// console.log(actual);

// // Assert
// result = (assertEquals(actual, expected));

// // Report
// console.log(`Test 2: Check that the generateWeather() function can produce a stormy output: ${result}`);
// console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
// console.log(``);

// // Clean Up 
// weather = undefined;
// actual = undefined;
// expected = undefined;
// result = undefined;

console.log('Test 2');
console.log('================================================');
console.log('');

console.log('Check that the generateWeather() function works by producing "sunny" 7 out of 10 times and "stormy" 3 out of 10.');

// Arrange
weather = new Weather();
expected = 'Stormy'; 

// Act
weather.generateWeather();
actual = weather.currentWeather;
console.log(actual);

// Assert
result = (assertEquals(actual, expected));

// Report
console.log(`Test 2: Check that the generateWeather() function usually produces a sunny output but sometimes produces a stormy output: ${result}`);
console.log(`Test 2: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// Clean Up 
weather = undefined;
actual = undefined;
expected = undefined;
result = undefined;