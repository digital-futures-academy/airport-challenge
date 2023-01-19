import Plane from '../src/plane.js';
import { assertEquals, assertThrows } from '../test_framework.js';

console.log('------------------------------');
console.log('Running tests for plane.js');
let passCount = 0, failCount = 0;

// Test 1
{
	console.log('------------------------------');
	console.log('Test 1. (get flightNum test). Valid name => "XA-FCV"')

	let input, expected, actual, result, airport, plane, weather;
	
	//1. Arrange
	plane = new Plane('XA-FCV');
	expected = 'XA-FCV';

	//2. Act
	actual = plane.flightNum;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 2
{
	console.log('------------------------------');
	console.log('Test 2. (constructor test). Invalid name => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1. Arrange
	expected = new Error();

	//2. Act
	actual = new Plane();

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

console.log('------------------------------');
console.log(`Passed: ${passCount}. Failed: ${failCount}. Total: ${passCount+failCount}`);
console.log('------------------------------');