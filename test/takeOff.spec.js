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

console.log(`------------------`);

//Test
console.log(`Test 3: takeOff doesn't reduce the length of listOfPlanes if the plane isn't there`);

//Arrange
airport.listOfPlanes = [plane1];
expected = 1;

//Act
airport.takeOff(plane2);
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
console.log(`Test 4: takeOff doesn't reduce the length of listOfPlanes if the input isn't a plane`);

//Arrange
airport.listOfPlanes = [plane1, plane2];
expected = 2;

//Act
airport.takeOff("Not a plane");
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 4: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 5: After a plane takes off it is no longer in listOfPlanes`);

//Arrange
airport.listOfPlanes = [plane1, plane2];
expected = false;

//Act
airport.takeOff(plane1);
actual = airport.isPlaneInAirport(plane1);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 5: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 6: Planes can't take off if the currentWeather is "Stormy"`);

//Arrange
airport.currentWeather = "Stormy";
airport.listOfPlanes = [plane1, plane2];
expected = true;

//Act
airport.takeOff(plane1);
actual = airport.isPlaneInAirport(plane1);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 6: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.currentWeather = "Sunny";
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 7: Planes can take off if the currentWeather isn't "Stormy"`);

//Arrange
airport.currentWeather = "Sunny";
airport.listOfPlanes = [plane1, plane2];
expected = false;

//Act
airport.takeOff(plane1);
actual = airport.isPlaneInAirport(plane1);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 7: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.currentWeather = "Sunny";
airport.listOfPlanes = [];
result = undefined;
actual = undefined;