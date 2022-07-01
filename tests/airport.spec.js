const { assertEquals, assertTrue } = require("../testFramework");
const Airport = require("../src/airport.js");

//fixture
let testAirport, expectedResult, actualResult, result, name;
const testPlane = `testPlane`

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
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


name = `landPlane Test 2- plane can be found in planesAtAirportArray`;
console.log(`==== ${name} ====`);

//arrange
//Create an airport for the test 
testAirport = new Airport();

//Act
//call the method under test with the testPlane
testAirport.landPlane(testPlane);


//Assert that the string 'testPlane' is now included in the planes at airport array  
result = assertTrue(testAirport.planesAtAirport.includes(testPlane));

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


name = `landPlane Test 3-landPlane returns string that confirms the plane landed`;
console.log(`==== ${name} ====`);

//arrange
//Create an airport for the test 
testAirport = new Airport();

//Act
//call the method under test with the testPlane
actualResult = testAirport.landPlane(testPlane);


//Assert that the string 'testPlane' is now included in the planes at airport array  
result = assertTrue(actualResult.includes(testPlane));

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


//==== capacity setting test ====

name = `Capacity setting Test 1- new airports have default capacity set to 5 landed`;
console.log(`==== ${name} ====`);

//arrange
//Create an airport for the test 
testAirport = new Airport();
expectedResult = 5;

//Act
//get the capacity of the testAirport
actualResult = testAirport.getCapacity();


//Assert that actual capacity of the new airport is 5
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);

name = `Capacity setting Test 2- setCapacity changes airport's capacity value`;
console.log(`==== ${name} ====`);

//arrange
//Create an airport for the test 
testAirport = new Airport();
expectedResult = 10;

//Act
//Set the capcity to the expectedResult
testAirport.setCapacity(expectedResult);
//get the capacity of the testAirport
actualResult = testAirport.getCapacity();


//Assert that actual capacity of the new airport is 5
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);

name = `Capacity setting Test 3- value passed to constructor is used as airport's capacity`;
console.log(`==== ${name} ====`);

//arrange
//Create an airport for the test 
expectedResult = 100;

//Act
//Create a new aiport that recieves it capacity on construction 
testAirport = new Airport(expectedResult);
// Get the capacity of the testAirport

actualResult = testAirport.getCapacity();
//Assert
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



name = `Full capacity Test 1-if length is more than or equal to capacity do not land plane`;
console.log(`==== ${name} ====`);
//test by adding two planes to an array

//arrange
//Create an airport for the test with a capacity of 1
testAirport = new Airport();
expectedResult = 5;
testPlane1 = `testplane1`
testPlane2 = `testPlane2`
testPlane3 = `testPlane3`
testPlane4 = `testPlane4`
testPlane5 = `testPlane5`
testPlane6 = 'testPlane6'

testAirport.landPlane(testPlane1);
testAirport.landPlane(testPlane2);
testAirport.landPlane(testPlane3);
testAirport.landPlane(testPlane4);
testAirport.landPlane(testPlane5);
//Act 
// land a plane 
testAirport.landPlane(testPlane6);


//the plane must be stopped  
actualResult = testAirport.planesAtAirport.length;

//Assert that  planesAtAirport legnth is still 1 
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


name = `Full capacity Test 2-if string is returned when aiport is full `;
console.log(`==== ${name} ====`);
//test by returning a string

//arrange
//Create a full airport
//needs to loop through these objects 
testAirport = new Airport();
testPlane1 = `testplane1`
testPlane2 = `testPlane2`
testPlane3 = `testPlane3`
testPlane4 = `testPlane4`
testPlane5 = `testPlane5`
testPlane6 = `testPlane6`

testAirport.landPlane(testPlane1);
testAirport.landPlane(testPlane2);
testAirport.landPlane(testPlane3);
testAirport.landPlane(testPlane4);
testAirport.landPlane(testPlane5);
expectedResult = true;

//Act 
// call the method under test with the test airport

message = testAirport.landPlane(testPlane6);

//Assert that  planesAtAirport returns a string 
actualResult = message.includes('full');
result = assertTrue(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);


name = `Plane taking off 1-if plane is removed from array  `;
console.log(`==== ${name} ====`);
//test by returning a string

//arrange
//Create a full airport
//needs to loop through these objects 
testAirport = new Airport();
testAirport.landPlane(testPlane1);
expectedResult = 0;

//Act 
// call the method under test with the test airport

testAirport.takeOffPlane(testPlane1);

//Assert that  planesAtAirport returns a string 
actualResult = testAirport.planesAtAirport.length;
result = assertEquals(expectedResult, actualResult);

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);



name = `Plane taking off 2- returns a string `;
console.log(`==== ${name} ====`);
//test by returning a string

testAirport = new Airport();
testAirport.landPlane(testPlane1);

//Act 
// call the method under test with the test airport
//Assert that  planesAtAirport returns a string 
actualResult = testAirport.takeOffPlane(testPlane1);

result = assertTrue(actualResult.includes(`taken off`));

//report
console.log(`${name}: ${result ? `PASS` : `FAIL`}`);

