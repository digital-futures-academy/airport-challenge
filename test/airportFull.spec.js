const { assertEquals } = require("../testFramework.js");
const Airport = require("../src/airport.js");
const Plane = require("../src/plane")


console.log(`====== Test 3 ======`)
//Arrange
const testName = `Test to prevent landing`;
expectedOutput = `Airport full, DO NOT LAND!`

//Act
const plane1 = new Plane(`plane1`);
const plane2 = new Plane(`plane2`);
const plane3 = new Plane(`plane3`);
const plane4 = new Plane(`plane4`);
const plane5 = new Plane(`plane5`);
const plane6 = new Plane(`plane6`);
const plane7 = new Plane(`plane7`);
const plane8 = new Plane(`plane8`);
const plane9 = new Plane(`plane9`);
const plane10 = new Plane(`plane10`);
const plane11 = new Plane(`plane11`);

//A for loop could have been used but was unable to figure out the syntax for it.

testAirport = new Airport()
actualOutput = testAirport.landPlane(plane1.name)
actualOutput = testAirport.landPlane(plane2.name)
actualOutput = testAirport.landPlane(plane3.name)
actualOutput = testAirport.landPlane(plane4.name)
actualOutput = testAirport.landPlane(plane5.name)
actualOutput = testAirport.landPlane(plane6.name)
actualOutput = testAirport.landPlane(plane7.name)
actualOutput = testAirport.landPlane(plane8.name)
actualOutput = testAirport.landPlane(plane9.name)
actualOutput = testAirport.landPlane(plane10.name)
actualOutput = testAirport.landPlane(plane11.name)
console.log(actualOutput)

//Assert
result = assertEquals(expectedOutput, actualOutput);
//Report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

