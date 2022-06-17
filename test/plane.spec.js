const { inAir, assertEquals } = require('../testFramework');
const plane = require('../src/planes');
const Airport = require('../src/airport');

let testName, actualResult, result, testPlane, planeID;

console.log('                          🛫🛫🛫🛫     Plane Test 1     🛫🛫🛫🛫');

planeID = { id: 'PLN', departure: true };

//arrange
testPlane = new plane();
testPlane.isInAir(planeID);
//Act
actualResult = testPlane.id[0].departure;
//assert
result = inAir(actualResult);
//report
console.log(result ? `PASS` : `FAIL`);
