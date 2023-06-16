const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const Airport = require("../src/airport");
const airport = new Airport()
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
console.log(`Test 3: takeOff can only be called if the plane is at the airport`);

//Arrange
airport.listOfPlanes = [plane1];
expected = "That plane is not at the airport";

//Act
try {
    airport.takeOff(plane2);
    actual = undefined;
}
catch (error) {
    actual = error.message;
}
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
console.log(`Test 4: takeOff can only take off planes`);

//Arrange
airport.listOfPlanes = [plane1, plane2];
expected = "Object is not a plane";

//Act
try {
    airport.takeOff("Not a plane");
    actual = undefined;
}
catch (error) {
    actual = error.message;
}
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