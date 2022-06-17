const { assertEquals, assertTrue } = require('../testFramework');
const Airport = require('../src/airport');

let testName, result, testAirport, actualResult,a;

console.log('                          🛫🛫🛫🛫     Airport Test 1     🛫🛫🛫🛫');

//arrange 
testName = 'Test if a airport is full';
testAirport = new Airport();
//arrange 
testName = 'Test if a airport is full';
testAirport = new Airport();
for (let i = 0; i <= testAirport.capacity ; i++) {
    planeID = {id: 'PLN' + i,destination: 'Lisbon', departure: false};
    testAirport.planesAtAirport.push(planeID);
}

testAirport.planeLand(planeID);
//Act
actualResult = testAirport.isFull();

//assert

result = assertTrue(actualResult);

//report
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

