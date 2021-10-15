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


test.it("Criteria 3 - prevent a plane from landing when the airport is full.", () => {
    planes = ['EasyJet', 'JumboJet', 'Airbus'];
    airport = new Airport(planes, 3);

    airport.landPlane('PassengerJet');
    let expectedOutput = 3;
    let actualOutput = airport.planes.length;

    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 4 - instruct the airport to let a plane take off and confirm it is no longer at the airport.", () => {
    planes = ['EasyJet', 'JumboJet', 'Airbus', 'PassengerJet'];
    airport = new Airport(planes);

    airport.takeOff(planes[1]);

    let expectedOutput = false;
    let actualOutput = airport.isPlaneAtAirport(planes[1]);
    test.assertEquals(actualOutput, expectedOutput);
});
