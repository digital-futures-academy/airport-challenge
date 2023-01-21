const { assertEquals } = require('./testingFrameworks.js');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane')
const Weather = require('../src/Weather')

let expectedOutput;
let input;
let actualOutput, result;
let airport1 = new Airport()
let plane1 = new Plane()
let testWeather = new Weather()

// Test 7.1
console.log(`***when planeLands is called and the weather is stormy, the length of planesAtAirport remains the same and the plane doesn't land***`);

// Arrange
currentWeather = 'stormy'
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeLands(plane1, currentWeather)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane didn't land: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 7.2
console.log(`***when planeLands is called and the weather is stormy, an error message is returned***`);

// Arrange
currentWeather = 'stormy'
airport1 = new Airport()
plane1 = new Plane()
expectedOutput = 'Unable to land';
actualOutput, result;

// Act
actualOutput = airport1.planeLands(plane1, currentWeather);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

