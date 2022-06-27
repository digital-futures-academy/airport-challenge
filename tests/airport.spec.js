const {assertEquals, assertTrue} = require("../testFramework");
const Airport = require("../src/airport.js");

//fixture
let testAirport, expectedResult, actualResult, result, name;
const testPlane = `testPlane`;

name = `landPlane Test 1-item added to planesAtAirport array`
console.log(`==== ${name} ====`);

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

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


name = `landPlane Test 2-item can be found in planesAtAirportArray`;
console.log(`==== ${name} ====`);

//arrange
//Create an airport for the test 
testAirport = new Airport();
///expectedResult = 1;

//Act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);



//Assert that the length of the plansAtAirport array is now 1 (initially 0)
result = assertTrue(testAirport.planesAtAirport.includes(testPlane));

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);




//Assert that the string 'testPlane' is now included in the planes at airport array 