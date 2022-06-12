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
testName = `Test 2 - Add a plane to airport's landed planes list where airport has already has few planes landed`;
testName = `Test 3 - Attempting to add plane to airport's landed planes list where airport is already at full capaicity`;

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


console.log("------------- END of Test 2----------------")