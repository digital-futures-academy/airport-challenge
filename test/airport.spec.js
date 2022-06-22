const { assertEquals, assertTrue } = require("../test-framework");
const { Airport } = require("../src/airport.js");
const { Plane } = require("../src/plane.js");

let testName, expectedResult, actualResult, result;

//Test 1
//Arrange 
testName = 1;
expectedResult = [];
const airport1 = new Airport;

//Act 
airport1.landPlane();
actualResult = airport1.planeList;

//Assert 
result = assertEquals(expectedResult[0], actualResult[0]);

console.log(`${testName}: ${result ? 'pass' : 'fail'}`);



//Test 2
//Arrange 
testName = 2;
expectedResult = 1;
const airport2 = new Airport;
const plane1 = new Plane;

//Act 
airport2.landPlane(plane1);
actualResult = airport2.planeList.length;

//Assert 
result = assertEquals(expectedResult, actualResult);

console.log(`${testName}: ${result ? 'pass' : 'fail'}`);


//Test 3 (when new airport instance is created, it has a default capacity value of 50 assigned to it)
//Arrange 
testName = 3;
expectedResult = 50;
const airport3 = new Airport();

//Act 
airport3.capacity;
actualResult = airport3.capacity;

//Assert 
result = assertEquals(expectedResult, actualResult);

console.log(`${testName}: ${result ? 'pass' : 'fail'}`);