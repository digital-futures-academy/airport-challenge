const testFramework = require('../test_framework.js');
const Weather = require('../src/weather.js');
const seedrandom = require('seedrandom');
const srandom = new seedrandom('stub');

// Top 5 seed values
// 0.10388572860170014
// 0.7055594681824928
// 0.7587790771905167
// 0.03904401179222965
// 0.6040060955540055

console.log('------------------------------');
console.log('Running tests for weather.js');

// Test 1
{
	console.log('------------------------------');
	console.log('Test 1. (getWeather() test). Valid weather => "Sunny"')

	let input, expected, actual, result, airport, plane, weather;
	
	//1. Arrange
	weather = new Weather();
	srandom();
	weather.status = (srandom() > 0.3 ? 'Sunny' : 'Stormy');
	expected = 'Sunny';

	//2.Act
	actual = weather.getWeather();

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

console.log('------------------------------');
//Clear
// input = undefined;
// expected = undefined;
// actual = undefined;
// result=undefined;
// airport = undefined;
// plant = undefined;
// weather = undefined;