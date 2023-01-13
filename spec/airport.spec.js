const testFramework = require('../test_framework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

console.log('------------------------------');
console.log('Running tests for airport.js');

// Test 1
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

// Test 2
{
	console.log('------------------------------');
	console.log('Test 2. (land() test). Empty airport, invalid plane. => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = 'invalidPlane';
	airport = new Airport();
	expected = new Error();

	//2.Act
	actual = airport.land(plane);

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 3
{
	console.log('------------------------------');
	console.log('Test 3. (increaseCapacity() test). Increase to 15 => 15')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	input = 15;
	expected = 15;

	//2.Act
	airport.increaseCapacity(input);
	actual = airport.airportCapacity;

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

//Clear
// input = undefined;
// expected = undefined;
// actual = undefined;
// result=undefined;
// airport = undefined;
// plant = undefined;
// weather = undefined;

