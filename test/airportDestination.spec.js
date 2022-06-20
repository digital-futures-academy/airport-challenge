const { inAir, assertEquals, assertTrue } = require('../testFramework');
const plane = require('../src/planes');
const Airport = require('../src/airport');
const { id } = require('prelude-ls');

let testName, actualResult, result, testPlane, planeID, testAirport, LandPlanes, takingOff;

console.log('                          🛫🛫🛫🛫     Plane Test 1     🛫🛫🛫🛫');

//arrange
testName = 'Test prevents a Plane to take if are not at airport  or land a plane is already landed.';
//Act
testAirport = new Airport();

for (let i = 0; i < 5; i++) {
    planeID = { id: 'PLN' + i, destination: 'Lisbon', departure: 'London', flightStatus: false};
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