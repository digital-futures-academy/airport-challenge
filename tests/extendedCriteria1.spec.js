//Extended Criteria User Story 1

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');
const Weather = require('../src/Weather');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a')
const weather = new Weather()

//Test 1: Weather class returns the current weather
console.log('Test 1: Weather class returns the current weather');
//Arrange
expectedOutput = undefined;
//Act
actualOutput = weather.getWeather();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;

//##################################################################

//Test 2: currentWeather can be set with the setCurrentWeather() method
console.log('Test 2: currentWeather can be set with the setCurrentWeather() method');
//Arrange
weather.setCurrentWeather('stormy');
expectedOutput = 'stormy';
//Act
actualOutput = weather.getWeather();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
weather.setCurrentWeather(undefined);

//##################################################################

//Test 3: the weather can only be set to valid weather conditions
console.log('Test 3: the weather can only be set to valid weather conditions');
//Arrange
weather.setCurrentWeather('funny');
expectedOutput = undefined;
//Act
actualOutput = weather.getWeather();
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
weather.setCurrentWeather(undefined);

//##################################################################

//Test 4: airport class receives current weather with getWeather() method
console.log('Test 4: airport class receives current weather with getWeather() method');
//Arrange
weather.setCurrentWeather('sunny');
expectedOutput = 'sunny';
//Act
actualOutput = airport1.getWeather(weather);
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
weather.setCurrentWeather(undefined);

//##################################################################

//Test 5: Plane can't takeoff when it\'s stormy
console.log('Test 5: Plane can\'t takeoff when it\'s stormy');
//Arrange
weather.setCurrentWeather('stormy');
airport1.getWeather(weather);
airport1.landedPlanes = [plane1]
expectedOutput = 1;
//Act
airport1.planeTakeOff(plane1);
actualOutput = airport1.landedPlanes.length;
//Assert
result = assertEquals(expectedOutput, actualOutput);
console.log(`-----> ${result ? 'PASS' : 'FAIL'} | Expected ${expectedOutput} : Received ${actualOutput} <----- \n`);
//Clean Up
expectedOutput, result, actualOutput, input = undefined;
weather.setCurrentWeather(undefined);

//##################################################################