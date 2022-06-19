const { assertEquals } = require('../test-frameworks');
const { Airport } = require('../src/airport');
const { Plane } = require('../src/plane');

let expectedOutput, actualOutput, result; 

console.log('----- TEST 1 -----');
//Arrange 
let testName = 'Test 1 - When no plane is input, addLandingPlane function does not add any item to the array of planes';
const testAirport = new Airport(); 
expectedOutput = []; 

//Act 
testAirport.addLandingPlane(); 
actualOutput = testAirport.planeList; 

//Assert 
result = assertEquals(actualOutput[0], expectedOutput[0]);

//Result 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 


console.log('----- TEST 2 -----');

//Arrange 
testName = 'Test 2 - When a plane is input, addLandingPlane function does add it to the array of planes';
const testAirport2 = new Airport(); 
expectedOutput.length = 1; 

// Act 
const firstPlane = new Plane('ABCD123');
testAirport2.addLandingPlane(firstPlane);
actualOutput = testAirport2.planeList; 

// Assert 
result = assertEquals(actualOutput.length, expectedOutput.length);

// Result 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 
