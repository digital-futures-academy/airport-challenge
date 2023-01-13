// tests to develop the code

// initialize codes that need to be pulled in
const { assertEquals } = require(`../testing-frameworks.js`);
const Airport = require(`../src/airport.js`);
const Plane = require(`../src/plane.js`);

// initialize variables used in tests
let expected, actual, result, airport, plane, input; //create empty variables for the tests

// Test One - when landPlane is called, Plane should be added to the Airports groundedPlanes increasing the length to 1
console.log('======= Test One =======');
console.log(`landPlane puts the Plane into the Airports groundedPlanes`); // stating the test being carried out

// Arrange
airport = new Airport(); // creating a new airport for the test
plane = new Plane(); // creating a plane for the test
expected = 1; // the expected result

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test One - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test One Done =======');
console.log(` `); //blank space to split up tests

// Test Two - landPlane should only add Planes instances to groundedPlanes
console.log('======= Test Two =======');
console.log(`landPlane only adds Plane instances to groundedPlanes`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
plane = 'test'; // input is a string
expected = 0; // result should be zero as 'plane' should not be added to groundedPlanes

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Two - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Two Done =======');
console.log(` `); //blank space to split up tests

// Test Three - falsy values should not be added to groundedPlanes
console.log('======= Test Three =======');
console.log(`null value items should not be added`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
plane = null; // input is null
expected = 0; // result should be zero as null should not be added to groundedPlanes

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Three - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Three Done =======');
console.log(` `); //blank space to split up tests

// Test Four - when an Airport is created a default value of 10 is given for airportCapacity
console.log('======= Test Four =======');
console.log(`when an airport is created there should be a default capacity of 10`); // stating the test being carried out

// Arrange
airport = new Airport(); // create a new airport for the test
expected = 10; // the capacity of the airport should be set as 10 when no input is initialized

// Act
actual = airport.airportCapacity; // look for the value of the airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Four - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Four Done =======');
console.log(` `); //blank space to split up tests

// Test Five - changeAirportCapacity will change the value of airportCapacity
console.log('======= Test Five =======');
console.log(`changeAirportCapacity will change the value of airportCapacity`); // stating the test being carried out

// Arrange
airport = new Airport(); // create a new airport for the test
input = 5; // the number we are changing the capacity to
expected = 5; // we will try to change the capacity of the airport to 5

// Act
airport.changeAirportCapacity(input); // call function of change the airport capacity
actual = airport.airportCapacity; // look for the value of the airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Five - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Five Done =======');
console.log(` `); //blank space to split up tests

// Test Six - airportCapacity can only be a number
console.log('======= Test Six =======');
console.log(`airportCapacity can only be a number`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
input = null; // try to input a string to airportCapacity
expected = 10; // the airportCapacity should not change

// Act
airport.changeAirportCapacity(input); // call function to change airportCapacity
actual = airport.airportCapacity; // look for the value of airportCapacity

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Six - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Six Done =======');
console.log(` `); //blank space to split up tests