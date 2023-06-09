const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const airport = require("../src/airport");
const plane1 = { planeId: `plane1` }

console.log(`Testing: isAirportFull`);
console.log(`------------------`);

//Test
console.log(`Test 1: isAirportFull returns a boolean value`);

//Arrange


//Act
actual = airport.isAirportFull()

//Assert
result = typeof actual === "boolean";

//Report
console.log(`Test 1: ${result ? "Pass" : "Fail"}`);

//Cleanup
result = undefined;
actual = undefined;

console.log(`------------------`);

//Test
console.log(`Test 2: isAirportFull returns a true is the size of listOfPlanes is equal to airportCapacity`);

//Arrange
airport.airportCapacity = 1;
airport.listOfPlanes = [plane1];
expected = true;

//Act
actual = airport.isAirportFull()

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 2: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
airport.airportCapacity = 3;
result = undefined;
actual = undefined;