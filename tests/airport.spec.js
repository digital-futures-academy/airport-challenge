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
airport.changeAirportCapacity(0); // change capacity to 1
actual = airport.isAirportFull(); // call isAirportFull function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eight.Two - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Eight Done =======');
console.log(` `); //blank space to split up tests

// Test Nine - if the airport is not full then the plane should land
console.log('======= Test Nine =======');
console.log(`if the Airport is not full, the Plane should land`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = 1; // expected value of test

// Act
airport.landPlane(plane); // if the airport is not full the plane should land nad give a string confirmation
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Nine - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Nine Done =======');
console.log(` `); //blank space to split up tests

// Test Ten - if the airport is full the plane shouldn't land
console.log('======= Test Ten =======');
console.log(`if the Airport is full, the Plane should not land`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
airport.changeAirportCapacity(0); // change capacity of the airport
expected = 0; // expected value of test

// Act
airport.landPlane(plane); // try to land a plane
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Ten - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Ten Done =======');
console.log(` `); //blank space to split up tests

// Test Eleven - takeoffPlane should take plane off of groundedPlanes
console.log('======= Test Eleven =======');
console.log(`groundedPlane length decreases by 1 when takeoffPlane() is called`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new plane for the test
expected = 0;

// Act
airport.landPlane(plane); // land plane at airport
airport.takeoffPlane(plane); // takeoff plane from airport
actual = airport.groundedPlanes.length; // find the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Eleven - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Eleven Done =======');
console.log(` `); //blank space to split up tests

// Test Twelve - takeoff specific plane from groundedPlanes
console.log('======= Test Twelve =======');
console.log(`takeoffPlane() will take off specific plane from groundedPlanes`); // stating the test being carried out

// Arrange
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing'); // create new planes for the test
expected = JSON.stringify(["Concord","Airbus"]); // expected array

// Act
airport.landPlane(new Plane(`Concord`)); 
airport.landPlane(plane);
airport.landPlane(new Plane(`Airbus`)); // land multiple planes at airport
airport.takeoffPlane(plane); // takeoff plane from airport
actual = JSON.stringify(airport.groundedPlanes.map(function (plane) {
    return plane['planeID']
})); // find the array as a list of plane names

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Twelve - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Twelve Done =======');
console.log(` `); //blank space to split up tests

// Test Thirteen - create a function that will check if the Plane exists in groundedPlanes
console.log('======= Test Thirteen =======');
console.log(`planeExists() will check if the Plane exists in groundedPlanes`); // stating the test being carried out

// Plane Exists in groundedPlanes
// Arrange
console.log(` `); //blank space to split up tests
console.log(`=== Test Thirteen.One - Plane Exists (aka true) ===`)
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing');
expected = true; // should show that the plane exists in array

// Act
airport.landPlane(plane); // land plane
actual = airport.planeExists(plane); // call planeExists function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Thirteen.One - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;

// Plane does now exist in groundedPlanes
// Arrange
console.log(` `); //blank space to split up tests
console.log(`=== Test Eight.Two - Plane does not exist (aka false) ===`)
airport = new Airport(); // create new airport for the test
plane = new Plane('Boeing');// create new plane for the test
expected = false; // should show that the plane does not exist in array

// Act
actual = airport.planeExists(plane); // call planeExists function

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`Test Thirteen.Two - ${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test Thirteen Done =======');
console.log(` `); //blank space to split up tests
