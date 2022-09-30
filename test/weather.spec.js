const { Weather } = require("../src/weather");
const { assertEquals } = require("../testing-framework");

let expected1, expected2, actual, result;

console.log(`Test 6a: Weather object can return sunny or stormy`)

//Arrange
let weather = new Weather();
expected1 = "sunny";
expected2 = "stormy";

//Act
weather.setWeather();
actual = weather.getWeather();

//Assert
result = assertEquals(expected1, actual) || assertEquals(expected2, actual);
console.log(`Test 6a: ${result}`);

//Clean-up
expected1 = undefined;
expected2 = undefined;
actual = undefined;
result = undefined;
weather = undefined;