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
plane = new Plane('Boeing'); // creating a plane for the test
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
console.log(`falsy value items should not be added`); // stating the test being carried out

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
console.log(`airportCapacity can only be a positive number`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for test
input = -5; // try to input a value that shouldn't work
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

// Test Seven - create function that will output the capacity of the airport to the user
console.log('======= Test Seven =======');
console.log(`getAirportCapacity() shows the capacity of the airport`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
expected = 10; // expected value of test

// Act
actual = airport.getAirportCapacity(); // call getAirportCapacity function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Seven - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Seven Done =======');
console.log(` `); //blank space to split up tests

// Test Eight - create a function that compares the values of airportCapacity and groundedPlanes.length
console.log('======= Test Eight =======');
console.log(`isAirportFull() checks if groundedPlanes.length is equal to airportCapacity`); // stating the test being carried out

// Airport is not Full
// Arrange
console.log(` `); //blank space to split up tests
console.log(`=== Test Eight.One - Airport is not full ===`)
airport = new Airport(); // create new airport for the test
expected = false; // airportCapacity should be less than groundedPlanes.length

// Act
actual = airport.isAirportFull(); // call isAirportFull function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eight.One - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;

// Airport is Full
// Arrange
console.log(` `); //blank space to split up tests
console.log(`=== Test Eight.Two - Airport is Full ===`)
airport = new Airport(); // create new airport for the test
expected = true; // airportCapacity should be equal to groundedPlanes.length

// Act
plane = new Plane(); // create plane to land
airport.changeAirportCapacity(1); // change capacity to 1
airport.landPlane(plane); // land plane at airport (increase capacity by 1)
actual = airport.isAirportFull(); // call isAirportFull function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eight.Two - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Eight Done =======');
console.log(` `); //blank space to split up tests

// Test Nine - create function that will output the capacity of the airport to the user
console.log('======= Test Nine =======');
console.log(`if the Airport is not full, the plane should land`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = 1; // expected value of test

// Act
airport.landPlane(plane); // if the airport is not full the plane should land nad give a strong confirmation
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Nine - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Nine Done =======');
console.log(` `); //blank space to split up tests