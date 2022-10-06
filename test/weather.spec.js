const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");
const Weather = require("../src/weather.js")
const { assertEquals } = require("../framework/testingFramework.js")

let expected;
let actual;
let result;
let weather;
let airport;
let plane, plane1, plane2, plane3;

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

// Test 6b - Prevent plane from taking off when stormy
console.log(`=============================`)
console.log(`Test 6b - Plane cannot be taken off when weather is stormy`)

//Arrange
weather = new Weather("stormy");
airport = new Airport([plane1, plane2, plane3]);
plane1 = new Plane();
plane2 = new Plane();
plane3 = new Plane()
expected = 3;

//Act
airport.takeOffPlane(plane1)
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected)
console.log(`Test 6b: ${result}`);

//Cleanup
weather = null;
expected = undefined;
actual = undefined;
result = undefined;