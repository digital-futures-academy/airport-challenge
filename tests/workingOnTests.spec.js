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

// Test 6.3
console.log(`***When PlaneTakesOff is called and the weather is stormy, length of planesAtAirport remains the same and the plane doesn't take off***`);

// Arrange
let currentWeather = 'stormy'
airport1 = new Airport()
plane1 = new Plane()
airport1.planesAtAirport = [plane1]
expectedOutput = 1;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1, currentWeather);
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane did not take off when stormy: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 6.4
console.log(`***When PlaneTakesOff is called and the weather is stormy, an error message is returned]***`);

// Arrange
currentWeather = 'stormy'
airport1 = new Airport()
plane1 = new Plane()
airport1.planesAtAirport = [plane1]
expectedOutput = "Plane cannot take off";
actualOutput, result;

// Act
actualOutput = airport1.planeTakesOff(plane1, currentWeather);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Error message returned: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;

// Test 6.5
console.log(`***When PlaneTakesOff is called and the weather is sunny, the length of planesAtAirport decreases by 1***`);

// Arrange
currentWeather = 'sunny'
airport1 = new Airport()
plane1 = new Plane()
airport1.planesAtAirport = [plane1]
expectedOutput = 0;
actualOutput, result;

// Act
airport1.planeTakesOff(plane1, currentWeather)
actualOutput = airport1.planesAtAirport.length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`Plane took off: ${result}`);

// Clean-Up
actualOutput = undefined;
result = undefined;
input = undefined;
expectedOutput = undefined;