const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const airport = require("../src/airport");
const plane1 = { planeId: `plane1` };
const plane2 = { planeId: `plane2` };

console.log(`------------------`);
console.log(`Testing: isItStormy`);
console.log(`------------------`);

//Test
console.log(`Test 1: isItStormy returns boolean`);

//Arrange

//Act
actual = airport.isItStormy();

//Assert
result = typeof actual === "boolean";

//Report
console.log(`Test 1: ${result ? "Pass" : "Fail"}`);

//Cleanup
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 2: isItStormy returns true if currentWeather is "Stormy"`);

//Arrange
expected = true;
airport.currentWeather = "Stormy";

//Act
actual = airport.isItStormy();

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 2: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.currentWeather = "Sunny";
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 3: isItStormy returns false if currentWeather is not "Stormy"`);

//Arrange
expected = false;
airport.currentWeather = "Sunny";

//Act
actual = airport.isItStormy();

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 3: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.currentWeather = "Sunny";
result = undefined;
actual = undefined;