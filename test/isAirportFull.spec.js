const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const Airport = require("../src/airport");
const airport = new Airport()
const plane1 = { planeId: `plane1` };

console.log(`------------------`);
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
console.log(`------------------`);

//Test
console.log(`Test 3: isAirportFull returns a false is the size of listOfPlanes is less then airportCapacity`);

//Arrange
airport.airportCapacity = 3;
airport.listOfPlanes = [plane1];
expected = false;

//Act
actual = airport.isAirportFull()

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 3: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
airport.airportCapacity = 3;
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 4: isAirportFull returns a true is the size of listOfPlanes is greater then airportCapacity`);

//Arrange
airport.airportCapacity = 0;
airport.listOfPlanes = [plane1];
expected = true;

//Act
actual = airport.isAirportFull()

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 4: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
airport.airportCapacity = 3;
result = undefined;
actual = undefined;