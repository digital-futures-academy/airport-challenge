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

// Test 6.1
console.log(`***checkWeather returns a random value from possibleWeather (either sunny or stormy)***`);

// Arrange
expectedOutput = true;
actualOutput, result;

// Act
actualOutput = testWeather.possibleWeather.includes(testWeather.checkWeather())
console.log(testWeather.checkWeather())

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Weather outputted: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 6.2
console.log(`***checkWeather assigns the returned value to the currentWeather property***`);

// Arrange
expectedOutput = 'string';
actualOutput, result;

// Act
testWeather.checkWeather()
actualOutput = typeof (testWeather.currentWeather)
console.log(testWeather.checkWeather())

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Weather assigned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;