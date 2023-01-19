// tests to develop weather code
console.log('Weather Class Tests');

// initialise files that need to be pulled in
const { assertEquals, assertBetween } = require('../testing-frameworks.js');
const Weather = require('../src/weather.js');

// initialize variables used in tests
let expected, actual, result, weather; //create empty variables for the tests

//* Test A - getWeather generates a number between 1 and 50
console.log('======= Test A =======');
console.log('getWeather generates a random number between 1 and 50'); // stating the test being carried out

// Arrange
weather = new Weather(); // create new instance of Weather

// Act
actual = weather.getWeather();
console.log(actual);

// Assert
result = assertBetween(1, actual, 50); // is actual between 1 and 50
console.log(`Test One - ${result ? 'Passed' : 'Failed'}`); // states if the test passed

// Clean Up
expected, result, actual = undefined;
weather = null;
console.log('======= Test A Done =======');
console.log(' '); //blank space to split up tests
