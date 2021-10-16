const assertEquals = require('./test-framework');
const Airport = require('../src/airport');
const Plane = require('../src/Plane');

console.log('--- TESTS INVOLVING WEATHER CONDITIONS ---');

let expectedOutput, result;

// Test 1 - Test to see if a plane can takeoff when the weather is fixed to being stormy
console.log('Test 1 - Test to see if a plane can takeoff when the weather is changed to being stormy');
// Assert
let airport = new Airport();
let plane = new Plane();
expectedOutput = 1;
// Act
airport.setSafeWeather(true);
airport.landPlane(plane);
airport.setSafeWeather(false);
airport.allowTakeOff(plane);
// Assert 
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 2 - Test to see if a plane can still takeoff if the weather is fixed to being sunny
console.log('Test 2 - Test to see if a plane can still takeoff if the weather is fixed to being sunny');
// Assert
airport = new Airport();
plane = new Plane();
expectedOutput = 0;
// Act
airport.landPlane(plane);
airport.allowTakeOff(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 3 - Test to see if a plane can land when the weather is fixed to stormy
console.log('Test 3 - Test to see if a plane can land when the weather is fixed to stormy');
// Assert 
airport = new Airport();
plane = new Plane();
expectedOutput = 0;
// Act
airport.setSafeWeather(false);
airport.landPlane(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);

// Test 4 - Test to see if a plane can still land when the weather is fixed to sunny
console.log('Test 4 - Test to see if a plane can still land when the weather is fixed to sunny');
// Arrange
airport = new Airport();
plane = new Plane();
expectedOutput = 1;
// Act
airport.setSafeWeather(true);
airport.landPlane(plane);
// Assert
result = assertEquals(airport.planes.length, expectedOutput);
console.log(result);