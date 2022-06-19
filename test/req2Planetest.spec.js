const { assertEquals } = require('../test-frameworks');
const { Airport } = require('../src/airport');

let expectedOutput, actualOutput, result; 

console.log('----- TEST 3 -----');

//Arrange 
let testName = 'Test 3 - calling the getCapacity function returns the capacity at the airport';
expectedOutput = 5;
const testAirport = new Airport();

//Act 
actualOutput = testAirport.getCapacity;

//Assert 
result = assertEquals(actualOutput, expectedOutput);

//Result 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 


console.log('----- TEST 4 -----');

//Arrange 
testName = 'Test 4 - capacity value can be changed';
expectedOutput = 20; 
const testAirport2 = new Airport(); 

// Act 
testAirport2.changeAirportCapacity = 20; 
actualOutput = testAirport2.getCapacity;

// Assert 
result = assertEquals(actualOutput, expectedOutput);

// Result 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 