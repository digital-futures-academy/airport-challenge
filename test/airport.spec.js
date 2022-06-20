const { assertEquals, assertTrue } = require("../test-framework");
const { Airport } = require("../src/airport.js");

let testName, expectedResult, actualResult, result;

//Test 1
//Arrange 
testName = 1
expectedResult = [];
const airport1 = new Airport;

//Act 
airport1.landPlane();
actualResult = airport1.planeList;

//Assert 
result = assertEquals(expectedResult[0], actualResult[0]);

console.log(`${testName}: ${result ? 'pass' : 'fail'}`);