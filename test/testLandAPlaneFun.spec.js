// Acceptance Criteria
// As a function,
// I want to be able to control if plane can land or not

//**References** 
const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane");

//**Instances of airport class**
const airport1 = new Airport();
// const airport1 = new Airport([Plane.plane3], 5);

//**Instance of plane class


//initial arrange
let expectedOutput, actualOutput, result;
const planeID = new Plane();
let testName = ``;

//Test 1
//arrange
testName = `Tes1: plan can land  `;
// planeID = plane1.randomPlane();
expectedOutput = `Plan has been landed`;

//act
actualOutput = airport1.landAPlane(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);
console.log(expectedOutput);
console.log(result);

//Test 1
//arrange
testName = `Tes1: plan cannot land  `;
expectedOutput = false;
airport1.setPlaneCanLand();

//act
actualOutput = airport1.landAPlane(planeID);

//assert
result = assertEquals(expectedOutput, actualOutput);

//report
console.log(`${testName}: ${result ? `Pass` : `Fail`}`);
console.log(actualOutput);
console.log(expectedOutput);
console.log(result);