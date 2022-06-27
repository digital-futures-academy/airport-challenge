const { assertEquals, assertTrue, assertFalse } = require("../testFramework");
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

//act
//call the method under test with the testPlane
actualResult = testAirport.landPlane(testPlane);

//assert
//assert that the length of the planesAtAirport array is now 1 (initially 0)
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
expectedResult = 1;

//act
//get the capacity of the testAirport
actualResult = testAirport.getCapacity();

//assert
//assert that thw length of the planesAtAirport array is now 1 (initially 0)
//assert that the actual capacity is 1
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

//airport full tests
testName = 'isAirportFull Test 1'
console.log(`=== plane not added to planesAtAirport array if planesAtAirport >= capacity===`);

//arrange
//create an airport for the test
testAirport = new Airport();
expectedResult = 1;

//act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);
//if the plane was not added then the length should not change
actualResult = testAirport.isAirportFull();

//assert
//assert that the length of the planesAtAirport array is still 1 
//assert that the string 'testPlane' is the only thing in the planesAtAirport array
result = assertTrue(actualResult)

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = 'isAirportFull Test 2'
console.log(`=== landPlane returns string that says airport is full ===`);

//arrange
//create an airport for the test
testAirport = new Airport();
testAirport.landPlane(testPlane);
expectedResult = true;

//act
//call the method under test with the testPlane
message = testAirport.landPlane(testPlane);

//assert
//assert that the string confirms airport is full.
actualResult = message.includes("full")
result = assertEquals(actualResult, expectedResult);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
