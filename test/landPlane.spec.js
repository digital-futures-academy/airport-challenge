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
console.log(`Test 2: landPlane adds the input plane to listOfPlanes`);

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
console.log(`------------------`);

//Test
console.log(`Test 3: landPlane only adds planes to listOfPlanes`);

//Arrange
expected = 0;
airport.listOfPlanes = [];

//Act
airport.landPlane("Not a plane");
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 3: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 4: landPlane won't change listOfPlanes if the airport is at capacity`);

//Arrange
expected = 0;
airport.listOfPlanes = [];
airport.airportCapacity = 0;

//Act
airport.landPlane(plane1);
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 4: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;