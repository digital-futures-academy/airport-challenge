const { assertFalse, assertEquals } = require('../test-frameworks');
const { Airport, Plane } = require('../src/airport');

console.log('---- Test 5 ----'); 

//Arrange 
let expectedOutput, actualOutput, result; 
let testName = 'Test 5 - The isAirportFull function returns false if the airport capacity is not reached'; 
let testAirport = new Airport(); 

//Act 
actualOutput = testAirport.isAirportFull();

//Assert 
result = assertFalse(actualOutput); 

//Report 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 

//Test 6
console.log('---- Test 6 ----'); 

//Arrange 
testName = 'Test 6 - New plane cannot be added if airport capacity is reached'; 
let testAirport2 = new Airport(); 

//Act  
for (let i = 0; i < 5; i++) { 
    testAirport2.addLandingPlane(new Plane(`Plane ${i + 1}`));
}

expectedOutput = 5; 

testAirport2.addLandingPlane('Plane 6');

actualOutput = testAirport2.planeList.length;

//Assert 
result = assertEquals(actualOutput, expectedOutput); 

//Report 
console.log(`${testName}: ${result ? 'PASS' : 'FAIL'}`); 