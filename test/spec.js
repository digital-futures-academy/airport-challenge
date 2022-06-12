const { assertEquals } = require("../test-framework");

const { AIRPORT } = require("../src/Airport");
const { PLANE } = require("../src/Plane");



// Initial arrange
let expectedOutput, actualOutput, result;
let input = [];
let testName = ``;

// Test 1
// arrange
testName = `Test 1 - Add a plane to airport's landed planes list where airport is empty`;
console.log(testName);
let airport1 = new AIRPORT;

input = "PLANE1";
expectedOutput = 1;

// act
actualOutput = airport1.landAPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

console.log("------------- END of Test 1----------------")

// Test 2

// arrange
testName = `Test 2 - Add a plane to airport's landed planes list where airport has already has few planes landed`;
console.log(testName);
let airport2 = new AIRPORT;

airport2.listOfLandedPlanes = ["PLANE1", "PLANE2"];
input = "PLANE3";
expectedOutput = 3;

// act
actualOutput = airport2.landAPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


console.log("------------- END of Test 3----------------")



// Test 3

// arrange
testName = `Test 3 - Attempting to add plane to airport's landed planes list where airport is already at full capaicity`;
console.log(testName);
let airport3 = new AIRPORT;

airport3.listOfLandedPlanes = ["PLANE1", "PLANE2", "PLANE3", "PLANE4", "PLANE5", "PLANE6", "PLANE7", "PLANE8", "PLANE9", "PLANE10",];
input = "PLANE11";
expectedOutput = `Airport Capacity FULL, cannot instruct ${input} to land!`;

// act
actualOutput = airport3.landAPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


console.log("------------- END of Test 3----------------")




// Test 4

// arrange
testName = `Test 4 - Change Airport Capacity`;
console.log(testName);
let airport4 = new AIRPORT;

// airport3.listOfLandedPlanes = ["PLANE1", "PLANE2", "PLANE3", "PLANE4", "PLANE5", "PLANE6", "PLANE7", "PLANE8", "PLANE9", "PLANE10",];
input = 20;
expectedOutput = `Capacity changed to ${input}!`;

// act
actualOutput = airport4.changeAirportCapacity(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


console.log("------------- END of Test 4----------------")




// Test 5

// arrange
testName = `Test 5 - Take Off a plane which is currently landed in airport`;
console.log(testName);
let airport5 = new AIRPORT;
airport5.listOfLandedPlanes = ["PLANE1", "PLANE2", "PLANE3", "PLANE4", "PLANE5", "PLANE6", "PLANE7", "PLANE8", "PLANE9", "PLANE10",];
input = "PLANE5";
expectedOutput = `${input} has Taken Off! and ${input} is no longer in the airport!`;

// act
actualOutput = airport5.takeOffPlane(input);
console.log(actualOutput);

// assert
result = assertEquals(expectedOutput, actualOutput)

// Report
console.log(airport5.listOfLandedPlanes);
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


console.log("------------- END of Test 5----------------")



// // Test 6

// // arrange
// testName = `Test 6 - Take Off a plane which is NOT currently landed in airport`;
// console.log(testName);
// let airport6 = new AIRPORT;
// airport6.listOfLandedPlanes = ["PLANE1", "PLANE2", "PLANE3", "PLANE4", "PLANE5", "PLANE6", "PLANE7", "PLANE8", "PLANE9", "PLANE10",];
// input = "PLANE11";
// expectedOutput = `${input} cannot Take Off as it is not currently in landed in the airport`;

// // act
// actualOutput = airport6.takeOffPlane(input);
// console.log(actualOutput);

// // assert
// result = assertEquals(expectedOutput, actualOutput)

// // Report
// console.log(airport6.listOfLandedPlanes);
// console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


// console.log("------------- END of Test 6----------------")