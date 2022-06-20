const { inAir, assertEquals, assertTrue } = require('../testFramework');
const plane = require('../src/planes');
const Airport = require('../src/airport');

let testName, actualResult, result, testPlane, planeID, testAirport, LandPlanes, takingOff, planeID1;

console.log('                          🛫🛫🛫🛫     Plane Test 1     🛫🛫🛫🛫');

//arrange
testName = 'Test if Plane departed and is no longer in Airport';

//Act
testAirport = new Airport();
for (let i = 0; i < 5; i++) {
    planeID = {id: 'PLN' + i,destination: 'Lisbon', departure: false};
    testAirport.planesAtAirport.push(planeID);
}
LandPlanes = testAirport.planesAtAirport[0];
testPlane = new plane;
testPlane.takeOff(LandPlanes);
takingOff = testPlane;
actualResult= delete testAirport.planesAtAirport[0];
//assert
result = assertTrue(actualResult);
//report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
