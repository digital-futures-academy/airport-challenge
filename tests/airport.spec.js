const { assertEquals, assertTrue } = require("../testFramework");
const Airport = require("../src/airport");


//fixtures (things we need in all the tests)
let testAirport, expectedResult, actualResult, result, testName;
const testPlane = 'testPlane';


// land plane tests
testName = 'landPlane Test 1'
console.log(`=== item added to planesAtAirport array ===`);

//arrange
//create an airport for the test
testAirport = new Airport();
expectedResult = 1;

//act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);
//if the plane was added then the length should change
actualResult = testAirport.planesAtAirport.length;

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the string 'testPlane' is included in the planesAtAirport array
result = assertEquals(expectedResult, actualResult)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = 'landPlane Test 2'
console.log(`=== item can be found in planesAtAirport array ===`);

//arrange
//create an airport for the test
testAirport = new Airport();
//expectedResult = 1;

//act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the string 'testPlane' is included in the planesAtAirport array
result = assertTrue(testAirport.planesAtAirport.includes(testPlane));

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);