const Airport = require("../src/airport")
const Weather = require("../src/weather")
const { assertEquals } = require("../testing.framework")

//Test 1: To check if when weather is called, it gives a "Stormy" or "Sunny" value.
console.log(`=======================`)
console.log(`Test 1: To check if when weather is called, it gives a "Stormy" or "Sunny" value. `)

//Arrange 
let weather = new Weather();
expected1 = "Stormy";
expected2 = "Calm";
//Act 
weather.checkWeather();
actual = weather.getWeather();

//Assert
result = assertEquals(actual, expected2) || assertEquals(actual, expected1);
console.log(`Test 1: To check if when weather is called, it gives a "Stormy" or "Sunny" value: ${result}`)

//Clean up 
weather = null;
airport = null;
expected = undefined;
actual = undefined;
