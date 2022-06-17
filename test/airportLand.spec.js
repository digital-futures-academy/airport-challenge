const { assertEquals } = require('../testFramework');
const Airport = require('../src/airport');

let result, testAirport, testPlane, actualResult;

console.log('                          🛫🛫🛫🛫     Airport Test 1     🛫🛫🛫🛫');

//arrange 
testPlane = {id: 'PLN'};

//Act
testAirport = new Airport();
testAirport.planeLand(testPlane);
actualResult = testAirport.planesAtAirport[0]?.id;
//assert
result = assertEquals(actualResult, testPlane.id);

//report
console.log(result ? `PASS` : `FAIL`);