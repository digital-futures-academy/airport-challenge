import Airport from '../src/airport.js';
import { assertEquals, assertFalse, assertThrows, assertTrue } from '../test_framework.js';

console.log('------------------------------');
console.log('Running tests for airport.js');
let passCount = 0, failCount = 0;

// Test 1
{
	console.log('------------------------------');
	console.log('Test 1. (land() test). Empty airport, valid plane. => 1')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = {};
	airport = new Airport({ getWeather: () => {}});
	expected = 1;

	//2. Act
	airport.land(plane, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 2
{
	console.log('------------------------------');
	console.log('Test 2. (land() test). Empty airport, invalid plane. => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = {};
	airport = new Airport({ getWeather: () => {}});
	expected = Error();

	//2. Act
	actual = airport.land(plane, false);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 3
{
	console.log('------------------------------');
	console.log('Test 3. (changeCapacity() test). Change to 15 => 15')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	expected = 15;

	//2. Act
	airport.changeCapacity(15);
	actual = airport.airportCapacity;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 4
{
	console.log('------------------------------');
	console.log('Test 4. (changeCapacity() test). Change to -20 => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	expected = Error();

	//2. Act
	actual = airport.changeCapacity(-20);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 5
{
	console.log('------------------------------');
	console.log('Test 5. (changeCapacity() test). Change to "Twenty" => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	expected = Error();

	//2. Act
	actual = airport.changeCapacity('Twenty');

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 6
{
	console.log('------------------------------');
	console.log('Test 6. (changeCapacity(), getCapacity() test). Increase to -20 => Capacity remains 10')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	expected = 10;

	//2. Act
	airport.changeCapacity(-20);
	actual = airport.airportCapacity;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 7
{
	console.log('------------------------------');
	console.log('Test 7. (changeCapacity(), getCapacity() test). Increase to "Twenty" => Capacity remains 10')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	expected = 10;

	//2. Act
	airport.changeCapacity('Twenty');
	actual = airport.airportCapacity;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 8
{
	console.log('------------------------------');
	console.log('Test 8. (takeOff() test). At airport, valid plane => 1')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	let plane1 = { flightNum: 'XA-FCV' };
	let plane2 = { flightNum: 'TB-CWY' };
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane1, true);
	airport.land(plane2, true);
	expected = 1;

	//2. Act
	airport.takeOff(plane2, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 9
{
	console.log('------------------------------');
	console.log('Test 9. (takeOff() test). At airport, invalid plane => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = 'invalidPlane';
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);	// Faking plane instanceof Plane to add to the airport.
	expected = Error();

	//2. Act
	actual = airport.takeOff(plane, false);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 10
{
	console.log('------------------------------');
	console.log('Test 10. (isAtAirport() test). At airport => true')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);
	expected = true;

	//2. Act
	actual = airport.isAtAirport(plane);

	//3. Assert
	result = assertTrue(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 11
{
	console.log('------------------------------');
	console.log('Test 11. (isAtAirport() test). Not at airport => false')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	expected = false;

	//2. Act
	actual = airport.isAtAirport(plane);

	//3. Assert
	result = assertFalse(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 12
{
	console.log('------------------------------');
	console.log('Test 12. (land(), isAtAirport() test). At airport, landing => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);
	expected = Error();

	//2. Act
	actual = airport.land(plane, true);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 13
{
	console.log('------------------------------');
	console.log('Test 13. (land(), isAtAirport() test). At airport, landing => 1')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);
	expected = 1;

	//2. Act
	airport.land(plane, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 14
{
	console.log('------------------------------');
	console.log('Test 14. (takeOff(), isAtAirport() test). Not at airport, taking off => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane ={ flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	expected = Error();

	//2. Act
	actual = airport.takeOff(plane, true);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 15
{
	console.log('------------------------------');
	console.log('Test 15. (takeOff(), isAtAirport() test). Not at airport, taking off => 1')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };		// At airport.
	let plane2 = { flightNum: 'XB-LSW' }	// Not at airport.
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);
	expected = 1;

	//2. Act
	airport.takeOff(plane2, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 16
{
	console.log('------------------------------');
	console.log('Test 16. (isFull() test). 10 planes at airport => true')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	for (let i=0; i<10; i++) airport.land({}, true);
	expected = true;

	//2. Act
	actual = airport.isFull();

	//3. Assert
	result = assertTrue(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 17
{
	console.log('------------------------------');
	console.log('Test 17. (isFull() test). 7 planes at airport => false')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	for (let i=0; i<7; i++) airport.land({}, true);
	expected = false;

	//2. Act
	actual = airport.isFull();

	//3. Assert
	result = assertFalse(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 18
{
	console.log('------------------------------');
	console.log('Test 18. (isFull(), land() test). Airport full, landing => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	for (let i=0; i<10; i++) airport.land({}, true);
	expected = Error();

	//2. Act
	actual = airport.land({}, true);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 19
{
	console.log('------------------------------');
	console.log('Test 19. (isFull(), land() test). Airport full, landing => 10')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {}});
	for (let i=0; i<10; i++) airport.land({}, true);
	expected = 10;

	//2. Act
	airport.land({}, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 20
{
	console.log('------------------------------');
	console.log('Test 20. (takeOff() test). Sunny, taking off => 0')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {return 'Sunny'}});
	airport.land(plane, true);
	expected = 0;

	//2. Act
	airport.takeOff(plane, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 21
{
	console.log('------------------------------');
	console.log('Test 21. (takeOff() test). Stormy, taking off => 1')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);
	airport.weather = { getWeather: () => {return 'Stormy'}};
	expected = 1;

	//2. Act
	airport.takeOff(plane, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 22
{
	console.log('------------------------------');
	console.log('Test 22. (takeOff() test). Stormy, taking off => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	plane = { flightNum: 'XA-FCV' };
	airport = new Airport({ getWeather: () => {}});
	airport.land(plane, true);
	airport.weather = { getWeather: () => {return 'Stormy'}};
	expected = Error();

	//2. Act
	actual = airport.takeOff(plane, true);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 23
{
	console.log('------------------------------');
	console.log('Test 23. (land() test). Sunny, landing => 1')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {return 'Sunny'}});
	expected = 1;

	//2. Act
	airport.land({}, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 24
{
	console.log('------------------------------');
	console.log('Test 24. (land() test). Stormy, landing => 0')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {return 'Stormy'}});
	expected = 0;

	//2. Act
	airport.land({}, true);
	actual = airport.planes.length;

	//3. Assert
	result = assertEquals(expected, actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

// Test 25
{
	console.log('------------------------------');
	console.log('Test 25. (land() test). Stormy, landing => Throws Error')

	let input, expected, actual, result, airport, plane, weather, srandom;
	
	//1. Arrange
	airport = new Airport({ getWeather: () => {return 'Stormy'}});
	expected = Error();

	//2. Act
	actual = airport.land({}, true);

	//3. Assert
	result = assertThrows(actual);
	
	if (result) {console.log("Test Passed."); passCount += 1;}
	else {console.log(`Test Failed. Expected ${expected} but received ${actual}.`); failCount += 1;}
	console.log('Output: ' + result);
}

console.log('------------------------------');
console.log(`Passed: ${passCount}. Failed: ${failCount}. Total: ${passCount+failCount}`);
console.log('------------------------------');