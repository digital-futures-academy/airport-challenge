const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const airport = require("../src/airport");
const plane1 = { planeId: `plane1` }

console.log(`Testing: changeAirportCapacity`);
console.log(`------------------`);

//Test
console.log(`Test 1: changeAirportCapacity changes airportCapacity to new capacity`);

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
airport.airportCapacity = 3;
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 2: changeAirportCapacity only changes airportCapacity to a number`);

//Arrange
expected = 3;
airport.airportCapacity = 3;

//Act
airport.changeAirportCapacity("Five");
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 2: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.airportCapacity = 3;
result = undefined;
actual = undefined;

console.log(`------------------`);

//Test
console.log(`Test 3: changeAirportCapacity only changes airportCapacity to an integer`);

//Arrange
expected = 3;
airport.airportCapacity = 3;

//Act
airport.changeAirportCapacity(3.4);
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 3: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.airportCapacity = 3;
result = undefined;
actual = undefined;