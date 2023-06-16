const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const Airport = require("../src/airport");
const airport = new Airport()
const plane1 = { planeId: `plane1` };
const plane2 = { planeId: `plane2` };

console.log(`------------------`);
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
expected = 0;
airport.listOfPlanes = [];

//Act
airport.landPlane(plane1);
actual = airport.listOfPlanes.findIndex(landedPlanes => landedPlanes.planeId === plane1.planeId);

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
expected = "Object is not a plane";
airport.listOfPlanes = [];

//Act
try {
    airport.landPlane("This is a bagel");
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
console.log(`Test 4: landPlane won't change listOfPlanes if the airport is at capacity`);

//Arrange
expected = "The airport is at capacity";
airport.listOfPlanes = [];
airport.airportCapacity = 0;

//Act
try {
    airport.landPlane(plane1);
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
airport.airportCapacity = 3;
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 5: landPlane will change listOfPlanes if the airport under capacity`);

//Arrange
expected = 1;
airport.listOfPlanes = [];
airport.airportCapacity = 1;

//Act
airport.landPlane(plane1);
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 5: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
airport.airportCapacity = 3;
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 6: landPlane won't change listOfPlanes if the airport is over capacity`);

//Arrange
expected = "The airport is at capacity";
airport.listOfPlanes = [plane1];
airport.airportCapacity = 0;

//Act
try {
    airport.landPlane(plane2);
    actual = undefined;
}
catch (error) {
    actual = error.message;
}
//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 6: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 7: The same plane can't land twice`);

//Arrange
expected = 1;
airport.listOfPlanes = [plane1];
airport.airportCapacity = 3;

//Act
airport.landPlane(plane1);
actual = airport.listOfPlanes.length;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 7: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 8: Planes can't land if the currentWeather is "Stormy"`);

//Arrange
expected = false;
airport.listOfPlanes = [plane1];
airport.currentWeather = "Stormy";

//Act
airport.landPlane(plane2);
actual = airport.isPlaneInAirport(plane2);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 8: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.currentWeather = "Sunny";
airport.listOfPlanes = [];
result = undefined;
actual = undefined;
console.log(`------------------`);

//Test
console.log(`Test 9: Planes can land if the currentWeather isn't "Stormy"`);

//Arrange
expected = true;
airport.listOfPlanes = [plane1];
airport.currentWeather = "Sunny";

//Act
airport.landPlane(plane2);
actual = airport.isPlaneInAirport(plane2);

//Assert
result = assertEquals(actual, expected);

//Report
console.log(`Test 9: ${result ? "Pass" : "Fail"}`);

//Cleanup
airport.currentWeather = "Sunny";
airport.listOfPlanes = [];
result = undefined;
actual = undefined;