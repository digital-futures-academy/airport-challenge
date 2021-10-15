const Airport = require('../src/airport.js');
const test = require('../test-framework.js');

let airport, planes = new Array();

test.it("Criteria 1 - land a plane.", () => {
    //Setup (Arrange)
    airport = new Airport(planes);
    let expectedOutput = 1;

    //Execute (Act)
    airport.landPlane('EasyJet');
    let actualOutput = airport.planes.length;

    //Verify (Assert)
    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 2 - allow override of default airport capacity.", () => {
    airport = new Airport(planes, 6);

    airport.updateDefaultAirportCapacity(10);
    let expectedOutput = 10;
    let actualOutput = airport.defaultCapacity;

    test.assertEquals(actualOutput, expectedOutput);
});