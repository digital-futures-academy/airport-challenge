const { assertEquals } = require('../testFramework');
const Airport = require('../src/airport');

let  testName, result, testAirport, testPlane, actualResult;

console.log('                          🛫🛫🛫🛫     Airport Test 1     🛫🛫🛫🛫');

//arrange 
testName = 'Test if the plane can land at the airport';
testPlane = { id: 'PLN', destination:'Gatwick' };

//Act
testAirport = new Airport();
testAirport.planeLand(testPlane);
actualResult = testAirport.planesAtAirport[0]?.id;

//assert
result = assertEquals(actualResult, testPlane.id);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);