const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");
const Weather = require("../src/weather.js")
const { assertEquals } = require("../framework/testingFramework.js")

let expected;
let actual;
let result;
let weather;


// Test 6a - Weather report returns either sunny or stormy
console.log(`=============================`)
console.log(`Test 6a - Does weather return either sunny or stormy`)

//Arrange
weather = new Weather();
expected1 = "sunny";
expected2 = "stormy";

//Act
weather.weatherGenerator();
actual = weather.weatherReport();

//Assert
result = assertEquals(actual, expected1) || assertEquals(actual, expected2);
console.log(`Test 6a: ${result}`);

//Cleanup
weather = null;
expected = undefined;
actual = undefined;
result = undefined;