const { assertEquals } = require("../test/TestingFrameworks");
const Weather = require("../src/weather");


let expected;
let actual;
let result;
let testWeather;
// Test 1 - test that weather can be stormy.

console.log(`============================`);
console.log(`Test 1 - test that weather can be stormy.`);

// Arrange
weather = new Weather();
testWeather = `stormy`
weather.actualWeather = testWeather
expected = true;

// Act
actual = weather.isStormy();

// Assert
result = assertEquals(actual, expected);
console.log(`Test 1: Weather is stormy: ${result}`);

// Clean up
weather = null;
stormyWeather = null;
expected = undefined;
actual = undefined;
result = undefined;