const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const airport = require("../src/airport");
const plane1 = { planeId: `plane1` };
const plane2 = { planeId: `plane2` };

console.log(`------------------`);
console.log(`Testing: takeOff`);
console.log(`------------------`);

//Test
console.log(`Test 1: takeOff reduces the size of listOfPlanes`);

//Arrange
airport.listOfPlanes = [plane1];
expected = 0;

//Act
airport.takeOff(plane1);
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
console.log(`Test 2: takeOff removes the the plane from listOfPlanes`);

//Arrange
airport.listOfPlanes = [plane1, plane2];
expected = -1;

//Act
airport.takeOff(plane1);
actual = airport.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane1.planeId);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 2: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
