const { assertEquals } = require("./testing-framework");
let actual, result, expected;

const Airport = require("../src/airport");
const airport = new Airport()
const plane1 = { planeId: `plane1` };
const plane2 = { planeId: `plane2` };

console.log(`------------------`);
console.log(`Testing: isPlaneInAirport`);
console.log(`------------------`);

//Test
console.log(`Test 1: isPlaneInAirport returns boolean`);

//Arrange


//Act
actual = airport.isPlaneInAirport(plane1);

//Assert
result = typeof actual === "boolean";

//Report
console.log(`Test 1: ${result ? "Pass" : "Fail"}`);

//Cleanup
result = undefined;
actual = undefined;

console.log(`------------------`);

//Test
console.log(`Test 2: isPlaneInAirport returns true if the plane is in listOfPlanes`);

//Arrange
airport.listOfPlanes = [plane1, plane2];
expected = true;

//Act
actual = airport.isPlaneInAirport(plane1);

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
console.log(`Test 3: isPlaneInAirport returns false if the plane is not in listOfPlanes`);

//Arrange
airport.listOfPlanes = [plane2];
expected = false;

//Act
actual = airport.isPlaneInAirport(plane1);

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
console.log(`Test 4: isPlaneInAirport throws an error if not a plane`);

//Arrange
airport.listOfPlanes = [plane2];
expected = "Object is not a plane";

//Act
try {
    airport.isPlaneInAirport("Not a plane");
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