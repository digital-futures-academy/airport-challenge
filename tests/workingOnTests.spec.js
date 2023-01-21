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

// Test 8.1
console.log(`8.1 Plane location returns 'In flight' by default:`);

// Arrange
plane1 = new Plane('Test Plane')
expectedOutput = 'In flight';
actualOutput, result;

// Act
actualOutput = plane1.location;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane in flight: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 8.2
console.log(`8.2 planeLocation changes location if plane is in planesAtAirport when an airport is inputted:`);

// Arrange
airport1 = new Airport('TestAirport')
plane1 = new Plane('Test Plane')
airport1.planesAtAirport = ['Test Plane']
expectedOutput = 'TestAirport';
actualOutput, result;

// Act
plane1.planeLocation(airport1)
actualOutput = plane1.location;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane at airport: ${result}`);