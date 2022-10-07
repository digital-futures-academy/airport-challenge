const Weather = require("../src/weather");
const { assertEquals } = require("./testing-framework");
let expected;
let actual;
let result;
let weather;

//Test 1c - does the weather set the storm to be a random boolean value when it is constructed
console.log("===================================");
console.log(
	`Test 1c - if weather class sets storm to be random boolean value & if getStormy returns that`
);

//arrange
weather = new Weather();

expected = "boolean";

//act
actual = typeof weather.getStormy();

//assert
result = assertEquals(expected, actual);
console.log(
	`Test 1c - if weather class sets storm to be random boolean value & if getStormy returns that: ${result}`
);
