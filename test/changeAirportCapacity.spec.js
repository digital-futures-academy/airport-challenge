const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const Airport = require("../src/airport");
const airport = new Airport()
const plane1 = { planeId: `plane1` };
console.log(`------------------`);
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
expected = "Invalid capacity";
airport.airportCapacity = 3;

//Act
try {
    airport.changeAirportCapacity("Five");
    actual = undefined;
}
catch (error) {
    actual = error.message;
}
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
expected = "Invalid capacity";
airport.airportCapacity = 3;

//Act
try {
    airport.changeAirportCapacity(3.4);
    actual = undefined;
}
catch (error) {
    actual = error.message;
}
//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 3: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.airportCapacity = 3;
result = undefined;
actual = undefined;