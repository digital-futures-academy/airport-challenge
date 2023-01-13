const testFramework = require('../test_framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

console.log('------------------------------');
console.log('Running tests for airport.js');

{
	console.log('------------------------------');
	console.log('Test 1. (land() test). Empty airport, valid plane. => 1')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	expected = 1;

	//2.Act
	airport.land(plane);
	actual = airport.planes.length;

	//3. Assert
	result = testFramework.assertEquals(expected, actual)
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}