// tests to develop the code

// initialize codes that need to be pulled in
const { assertEquals } = require(`../testing-frameworks.js`);
const Airport = require(`../src/airport.js`);
const Plane = require(`../src/plane.js`);

let expected, actual, result, airport, plane; //create empty variables for the tests

// Test One - when landPlane is called, Plane should be added to the Airports groundedPlanes increasing the length to 1
console.log(`==========================`);
console.log(`Test One - landPlane puts the Plane into the Airports groundedPlanes`); // stating the test being carried out

// Arrange
airport = new Airport(); // creating a new airport for the test
plane = new Plane(); // creating a plane for the test
expected = 1; // the expected result

// Act
airport.landPlane(plane); // lands plane to airport
actual = airport.groundedPlanes.length; // checking the length of the array

// Assert
result = assertEquals(expected, actual); // is expected and actual the same??
console.log(`${result ? `Passed` : `Failed`}`); // states if the test passed

// Clean Up
expected, actual, result = undefined; // resetting variables for a next test
airport, item = null;
console.log('======= Test One Done =======');
console.log(` `); //blank space to split up tests

