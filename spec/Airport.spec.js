const Test = require('../test-framework/test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let airport, plane, expectedOutput, result;


/** AC - 1 */
Test.it('Instruct plane to land at the airport', () => {

    
    airport = new Airport();
    plane = new Plane(777, true);

    expectedOutput = 1;

    airport.landPlane(plane);
    
    result = Test.assertEquals(expectedOutput, airport.planes.length);

    console.log(result);
    //console.log(plane.planeID);

});

/** AC - 2 */
Test.it('Check Airport Capacity', () => {
    let airportCap = 5;

    airport = new Airport("Gatwick", airportCap);

    expectedOutput = 5;

    result = Test.assertEquals(expectedOutput, airport.airportCapacity);
    airport._airportCapacity
    console.log(result);

});




