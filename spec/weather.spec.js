import Weather from '../src/weather.js';
import { assertEquals } from '../test_framework.js';

console.log('------------------------------');
console.log('Running tests for weather.js');
let passCount = 0, failCount = 0;

// Test 1
{
	console.log('------------------------------');
	console.log('Test 1. (getWeather() test). Valid weather => "Sunny"')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	weather = new Weather();
	weather.setStatus('Sunny');
	expected = 'Sunny';

	//2. Act
	actual = weather.getWeather();

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 2
{
	console.log('------------------------------');
	console.log('Test 2. (getWeather() test). Valid weather => "Stormy"')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	weather = new Weather();
	weather.setStatus('Stormy');
	expected = 'Stormy';

	//2. Act
	actual = weather.getWeather();

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

console.log('------------------------------');
console.log(`Passed: ${passCount}. Failed: ${failCount}. Total: ${passCount+failCount}`);
console.log('------------------------------');