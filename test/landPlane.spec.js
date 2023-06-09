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
airport.landPlane()
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 1: ${result ? "Pass" : "Fail"}`);

//Cleanup