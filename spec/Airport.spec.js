const Test = require('../test-framework/test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

/** AC - 1 */
Test.it('Instruct plane to land at the airport', () => {

    let airport, plane, expectedOutput, result;
    
    airport = new Airport();
    plane = new Plane(777, true);

    expectedOutput = 1;

    airport.landPlane(plane);
    
    result = Test.assertEquals(expectedOutput, airport.planes.length);

    console.log(result);
    //console.log(plane.planeID);

});

/** AC - 2 */




