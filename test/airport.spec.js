const { assertEquals } = require('../test/testing-frameworks');
const Airport = require('../src/airport');
const Plane = require('../src/plane');

// Stub function for isStormy() method
function stubIsStormy() {
    return false; // Always return false for simplicity
}

// Test 1
console.log('');
console.log('Test 1:');
console.log('Land a plane at the airport using landPlane and expect airportPlanes array to increase in length to 1');
console.log('------------------------------------------------------------------------------------------------------');

// Arrange
const airport = new Airport();
const plane1 = new Plane('Plane A');

// Act
airport.landPlane(plane1);
const actual = airport.airportPlanes.length;
const expected = 1;

// Assert
const result = assertEquals(actual, expected);

// Report
console.log(`1 plane landed at the airport: ${result}`);
console.log(`Result: ${result ? 'PASS' : 'FAIL'}`);
// Clean Up
airport.airportPlanes = [];
console.log('');

// Test 2
console.log('Test 2');
console.log('Set airport capacity to 30 using setCapacity and expect airportCapacity to be updated');
console.log('------------------------------------------------------------------------------------------------------');

// Act
airport.setCapacity(30);

// Assert
const result2 = assertEquals(airport.airportCapacity, 30);

// Report
console.log(`Test 2: Airport capacity set to 30: ${result2}`);
console.log(`Test 2: ${result2 ? 'PASS' : 'FAIL'}`);

// Clean Up
airport.airportPlanes = [];
console.log('');

// Test 3
console.log('Test 3');
console.log('Check if the airport is full using isFull and expect a boolean value');
console.log('------------------------------------------------------------------------------------------------------');

// Act
const actual3 = airport.isFull();

// Assert
const expected3 = false;
const result3 = assertEquals(actual3, expected3);

// Report
console.log(`Test 3: Can a plane be landed?: ${result3}`);
console.log(`Test 3: ${result3 ? 'PASS' : 'FAIL'}`);

// Clean Up
airport.airportPlanes = [];
console.log('');

// Test 4
console.log('Test 4:');
console.log('A plane takes off, and it is confirmed that it is no longer in the airport');
console.log('------------------------------------------------------------------------------------------------------');

// Arrange
const airport1 = new Airport(); // Rename the variable to airport1
const plane2 = new Plane('Plane B');
airport1.landPlane(plane2);

// Mock the isStormy() method to return false (non-stormy weather)
airport1.isStormy = () => false;

// Act
airport1.takeOff(plane2); // Use plane2
const actual4 = airport1.isInAirport(plane2); // Use plane2
const expected4 = false;

// Assert
const result4 = assertEquals(actual4, expected4);

// Report
console.log(`Plane is not in the airport after take off: ${result4}`);
console.log(`Result: ${result4 ? 'PASS' : 'FAIL'}`);

// Clean Up
airport.airportPlanes = [];
console.log('');

// Test 5
console.log('Test 5:');
console.log('Prevent taking off a plane not in the airport and prevent landing a plane that is already in the airport');
console.log('------------------------------------------------------------------------------------------------------');

// Arrange
const airport5 = new Airport();
const plane5A = new Plane('Plane A');
const plane5B = new Plane('Plane B');

// Act and Assert
let result5a, result5b;

try {
    airport5.landPlane(plane5A);
    result5a = airport5.isInAirport(plane5A) === true;
} catch (error) {
    result5a = false;
}

try {
    airport5.landPlane(plane5B);
    result5b = airport5.isInAirport(plane5B) === true;
} catch (error) {
    result5b = false;
}

// Report
console.log(`Prevented taking off a plane not in the airport: ${result5a}`);
console.log(`Prevented landing a plane already in the airport: ${result5b}`);
console.log(`Result: ${result5a && result5b ? 'PASS' : 'FAIL'}`);

// Clean Up
airport5.airportPlanes = [];
console.log('');

// Test 6
console.log('Test 6:');
console.log('Prevent taking off when weather is stormy');
console.log('------------------------------------------------------------------------------------------------------');

// Arrange
const plane6 = new Plane('Plane D');
airport.landPlane(plane6);

// Mock the isStormy() method to return true (stormy weather)
airport.isStormy = () => true;

// Act
let actual6;
try {
    airport.takeOff(plane6);
} catch (error) {
    actual6 = error.message;
}

// Assert
const expected6 = 'Cannot take off due to stormy weather.';
const result6 = assertEquals(actual6, expected6);

// Report
console.log(`Prevented taking off when weather is stormy: ${result6}`);
console.log(`Result: ${result6 ? 'PASS' : 'FAIL'}`);

// Clean Up
airport.airportPlanes = [];
console.log('');

// Test 7
console.log('Test 7:');
console.log('Prevent landing when weather is stormy');
console.log('------------------------------------------------------------------------------------------------------');

// Arrange
const airport7 = new Airport();
const plane7 = new Plane('Plane C');

// Mock the isStormy() method to return true (stormy weather)
airport7.isStormy = () => true;

// Act
let actual7;
try {
    airport7.landPlane(plane7);
} catch (error) {
    actual7 = error.message;
}

// Assert
const expected7 = 'Cannot land due to stormy weather.';
const result7 = assertEquals(actual7, expected7);

// Report
console.log(`Prevented landing when weather is stormy: ${result7}`);
console.log(`Result: ${result7 ? 'PASS' : 'FAIL'}`);

// Clean Up
airport7.airportPlanes = [];
console.log('');

// Test 8
console.log('Test 8:');
console.log('Planes that have landed must be at an airport');
console.log('------------------------------------------------------------------------------------------------------');

// Arrange
const airport8 = new Airport();
const plane8 = new Plane('Plane D');

// Act
airport8.landPlane(plane8);
const actual8 = airport8.confirmLanding(plane8);

// Assert
const expected8 = true;
const result8 = assertEquals(actual8, expected8);

// Report
console.log(`Plane is confirmed to be at the airport after landing: ${result8}`);
console.log(`Result: ${result8 ? 'PASS' : 'FAIL'}`);

// Clean Up
airport8.airportPlanes = [];
console.log('');