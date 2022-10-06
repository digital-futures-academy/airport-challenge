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
airport = new Airport(['LDN001', 'BEJ002', 'WSH003'], 5, "stormy");
plane1 = new Plane('LDN001');
plane2 = new Plane('BEJ002');
plane3 = new Plane('WSH003');
expected = 3;

//Act
airport.takeOffPlane('LDN001')
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected)
console.log(`Test 6b: ${result}`);

//Cleanup
weather = null;
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
expected = undefined;
actual = undefined;
result = undefined;

// Test 7 - Prevent plane from landing when stormy
console.log(`=============================`)
console.log(`Test 7 - Plane cannot land when weather is stormy`)

//Arrange
airport = new Airport(['LDN001', 'BEJ002'], 5, "stormy");
plane1 = new Plane('LDN001');
plane2 = new Plane('BEJ002');
plane3 = new Plane('WSH003');
expected = 2;

//Act
airport.landPlane('WSH003')
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(actual, expected)
console.log(`Test 7: ${result}`);

//Cleanup
weather = null;
airport = null;
plane1 = null;
plane2 = null;
plane3 = null;
expected = undefined;
actual = undefined;
result = undefined;