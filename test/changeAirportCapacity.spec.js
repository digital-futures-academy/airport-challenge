const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const airport = require("../src/airport");
const plane1 = { planeId: `plane1` }

console.log(`Testing: changeAirportCapacity`);
console.log(`------------------`);

//Test
console.log(`Test 1: changeAirportCapacity changes airportCapacity`);

//Arrange
expected = 5;
airport.airportCapacity = 3;

//Act
airport.changeAirportCapacity(5);
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 1: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;