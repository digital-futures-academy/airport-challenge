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
	console.log('Test 3. (changeCapacity() test). Change to 15 => 15')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	input = 15;
	expected = 15;

	//2.Act
	airport.changeCapacity(input);
	actual = airport.airportCapacity;

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 4
{
	console.log('------------------------------');
	console.log('Test 4. (changeCapacity() test). Change to -20 => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	input = -20;
	expected = new Error();

	//2.Act
	actual = airport.changeCapacity(input);

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 5
{
	console.log('------------------------------');
	console.log('Test 5. (changeCapacity() test). Change to "Twenty" => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	input = 'Twenty';
	expected = new Error();

	//2.Act
	actual = airport.changeCapacity(input);

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 6
{
	console.log('------------------------------');
	console.log('Test 6. (changeCapacity(), getCapacity() test). Increase to -20 => Capacity remains 10')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	input = -20;
	expected = 10;

	//2.Act
	airport.changeCapacity(input);
	actual = airport.getCapacity();

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 7
{
	console.log('------------------------------');
	console.log('Test 7. (changeCapacity(), getCapacity() test). Increase to "Twenty" => Capacity remains 10')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	input = 'Twenty';
	expected = 10;

	//2.Act
	airport.changeCapacity(input);
	actual = airport.getCapacity();

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 8
{
	console.log('------------------------------');
	console.log('Test 8. (takeOff() test). At airport, valid plane => 0')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	airport.land(plane);
	expected = 0;

	//2.Act
	airport.takeOff(plane);
	actual = airport.planes.length;

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 9
{
	console.log('------------------------------');
	console.log('Test 9. (takeOff() test). At airport, invalid plane => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = 'invalidPlane';
	airport = new Airport();
	airport.planes.push(plane);
	expected = new Error();

	//2.Act
	actual = airport.takeOff(plane);

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 10
{
	console.log('------------------------------');
	console.log('Test 10. (isAtAirport() test). At airport => true')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	airport.land(plane);
	expected = true;
	
	//2.Act
	actual = airport.isAtAirport(plane);

	//3. Assert
	result = testFramework.assertTrue(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 11
{
	console.log('------------------------------');
	console.log('Test 11. (isAtAirport() test). Not at airport => false')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	expected = false;
	
	//2.Act
	actual = airport.isAtAirport(plane);

	//3. Assert
	result = testFramework.assertFalse(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 12
{
	console.log('------------------------------');
	console.log('Test 12. (land(), isAtAirport() test). At airport, landing => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	airport.land(plane);
	expected = new Error();
	
	//2.Act
	actual = airport.land(plane);

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 13
{
	console.log('------------------------------');
	console.log('Test 13. (land(), isAtAirport() test). At airport, landing => 1')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	airport.land(plane);
	expected = 1;
	
	//2.Act
	airport.land(plane);
	actual = airport.planes.length;

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 14
{
	console.log('------------------------------');
	console.log('Test 14. (takeOff(), isAtAirport() test). Not at airport, taking off => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');
	airport = new Airport();
	expected = new Error();
	
	//2.Act
	actual = airport.takeOff(plane);

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 15
{
	console.log('------------------------------');
	console.log('Test 15. (takeOff(), isAtAirport() test). Not at airport, taking off => 1')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	plane = new Plane('XA-FCV');	// At airport.
	plane2 = new Plane('XB-LSW');	// Not at airport.
	airport = new Airport();
	airport.land(plane);
	expected = 1;
	
	//2.Act
	airport.takeOff(plane2);
	actual = airport.planes.length;

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 16
{
	console.log('------------------------------');
	console.log('Test 16. (isFull() test). 10 planes at airport => true')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	for (let i=0; i<10; i++) airport.land(new Plane('XA-FCV'));
	expected = true;
	
	//2.Act
	actual = airport.isFull();

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 17
{
	console.log('------------------------------');
	console.log('Test 17. (isFull() test). 7 planes at airport => false')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	for (let i=0; i<7; i++) airport.land(new Plane('XA-FCV'));
	expected = false;
	
	//2.Act
	actual = airport.isFull();

	//3. Assert
	result = testFramework.assertEquals(expected, actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 18
{
	console.log('------------------------------');
	console.log('Test 18. (isFull(), land() test). Airport full, landing => Throws Error')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	for (let i=0; i<10; i++) airport.land(new Plane('XA-FCV'));
	expected = new Error();
	
	//2.Act
	actual = airport.land(new Plane('XB-LSW'));

	//3. Assert
	result = testFramework.assertThrows(actual);
	
	if (result) console.log("Test Passed.");
	else console.log(`Test Failed. Expected ${expected} but received ${actual}.`);
	console.log('Output: ' + result);
}

// Test 19
{
	console.log('------------------------------');
	console.log('Test 19. (isFull(), land() test). Airport full, landing => 10')

	let input, expected, actual, result, airport, plane, weather;
	
	//1 Arrange
	airport = new Airport();
	for (let i=0; i<10; i++) airport.land(new Plane('XA-FCV'));
	expected = 10;
	
	//2.Act
	airport.land(new Plane('XB-LSW'));
	actual = airport.planes.length;

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