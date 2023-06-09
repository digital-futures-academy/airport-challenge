const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const airport = require("../src/airport");
const plane1 = { planeId: `plane1` }

console.log(`Testing: landPlane`);
console.log(`------------------`);

//Test
console.log(`Test 1: landPlane alters listOfPlanes`);

//Arrange
expected = 1;
airport.listOfPlanes = [];

//Act
airport.landPlane(plane1);
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 1: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 2: lanePlane adds the input plain to listOfPlanes`);

//Arrange
expected = "plane1";
airport.listOfPlanes = [];

//Act
airport.landPlane(plane1);
actual = airport.listOfPlanes[0].planeId;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 2: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;