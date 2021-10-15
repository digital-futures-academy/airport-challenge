const Test = require('../test-framework/test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

Test.it('Instruct plane to land at the airport', () => {

    let airport, plane, expectedOutput, result;
    
    airport = new Airport();
    plane = new Plane(777);

    expectedOutput = 1;

    airport.landPlane(plane);
    
    result = Test.assertEquals(airport.planes.length, expectedOutput);

    console.log(result);
    //console.log(plane.planeID);

});



