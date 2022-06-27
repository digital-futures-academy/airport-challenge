const {assertEquals} = require("../testFramework");
const Airport = require("../src/airport.js");

//fixture
let testAirport, expectedResult, actualResult, result;
const testPlane = `testPlane`;

console.log("===landPlane Test 1-item added to planesAtAirport===");

//arrange
//Create an airport for the test 
testAirport = new Airport();
expectedResult = 1;

//Act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);
//if the plane was added then the legnth should change 
actualResult = testAirport.planesAtAirport.length;

//Assert that the legnth of the plansAtAirport array is now 1 (initially 0)
result = assertEquals(expectedResult,actualResult);







//Assert that the string 'testPlane' is now included in the planes at airport array 