const { assertEquals,assertNotEqual } = require('../testFramework');
const Airport = require('../src/airport');

let testName, result, testAirport, expectedResult, actualResult;



console.log('                          🛫🛫🛫🛫     Airport Test 1     🛫🛫🛫🛫');

//arrange 
testName = 'Test if the capacity can be Overridden as appropriate ';
testAirport = new Airport();
expectedResult = testAirport.capacity;


//Act
actualResult = testAirport.Capacity(20);
//assert

result = assertNotEqual(actualResult, expectedResult);

//report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);