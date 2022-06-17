const { inAir, assertEquals, assertTrue } = require('../testFramework');
const plane = require('../src/planes');
const Airport = require('../src/airport');

let testName, actualResult, result, testPlane, planeID, testAirport, LandPlanes, takingOff, planeID1;

console.log('                          🛫🛫🛫🛫     Plane Test 1     🛫🛫🛫🛫');

//arrange
testName = 'Test if Plane departed and is no longer in Airport';
planeID = {id: 'PLN', destination: 'Lisbon', departure: false};
planeID1 = {id: 'LSP', destination: 'Lisbon', departure: true
};

//Act
testAirport = new Airport();
testAirport.planeLand(planeID);
testAirport.planeLand(planeID1);
LandPlanes = testAirport.planesAtAirport[0];
testPlane = new plane;
testPlane.takeOff(LandPlanes);
takingOff = testPlane;
actualResult= delete testAirport.planesAtAirport[0];
//assert
result = assertTrue(actualResult);
//report

console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
