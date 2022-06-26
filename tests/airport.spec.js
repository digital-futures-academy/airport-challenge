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

//act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the string 'testPlane' is included in the planesAtAirport array
result = assertTrue(testAirport.planesAtAirport.includes(testPlane));

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = 'landPlane Test 3'
console.log(`=== landPlane returns string that confirms the plane landed ===`);

//arrange
//create an airport for the test
testAirport = new Airport();
//expectedResult = 1;

//act
//call the method under test with the testPlane
actualResult = testAirport.landPlane(testPlane);

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the string 'testPlane' is included in the planesAtAirport array
result = assertTrue(actualResult.includes(testPlane));

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//capacity setting tests

testName = 'Capacity Setting Test 1'
console.log(`=== new airport have default capacity set to 5 ===`);

//arrange
//create an airport for the test
testAirport = new Airport();
expectedResult = 5;

//act
//get the capacity of the testAirport
actualResult = testAirport.getCapacity();

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the actual capacity is 5
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = 'Capacity Setting Test 2'
console.log(`=== setCapacity changes airport's capacity value ===`);

//arrange
//create an airport for the test
testAirport = new Airport();
expectedResult = 10;

//act
//set capacity to expectedResult
testAirport.setCapacity(expectedResult);
//get the capacity of the testAirport
actualResult = testAirport.getCapacity();

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the actual capacity is 5
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = 'Capacity Setting Test 3'
console.log(`=== value passed to constructor is used as airports capacity ===`);

//arrange
//create an airport for the test
//testAirport = new Airport();
expectedResult = 100;

//act
//create a new airport that receives its capacity on construction
testAirport = new Airport(expectedResult);
//
actualResult = testAirport.getCapacity();

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the actual capacity is 5
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);