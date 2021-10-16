const Airport = require('../src/airport.js');
const test = require('../test-framework.js');

let airport, planes = new Array();

test.it("Criteria 1 - land a plane.", () => {
    //Setup (Arrange)
    airport = new Airport(planes);
    airport.stormyWeather = false;
    let expectedOutput = 1;

    //Execute (Act)
    airport.landPlane('EasyJet');
    let actualOutput = airport.planes.length;

    //Verify (Assert)
    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 2 - allow override of default airport capacity.", () => {
    airport = new Airport(planes, 6);

    airport.stormyWeather = false;

    airport.updateDefaultAirportCapacity(10);
    let expectedOutput = 10;
    let actualOutput = airport.defaultCapacity;

    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 3 - prevent a plane from landing when the airport is full.", () => {
    planes = ['EasyJet', 'JumboJet', 'Airbus'];
    airport = new Airport(planes, 3);

    airport.stormyWeather = false;

    airport.landPlane('PassengerJet');
    let expectedOutput = 3;
    let actualOutput = airport.planes.length;

    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 4 - instruct the airport to let a plane take off and confirm it is no longer at the airport.", () => {
    planes = ['EasyJet', 'JumboJet', 'Airbus', 'PassengerJet'];
    airport = new Airport(planes);

    airport.stormyWeather = false;

    airport.takeOff(planes[1]);

    let expectedOutput = false;
    let actualOutput = airport.isPlaneAtAirport('JumboJet');
    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 5 - prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed.", () => {
    planes = ['EasyJet', 'JumboJet', 'Airbus', 'PassengerJet'];
    airport = new Airport(planes);

    airport.stormyWeather = false;

    airport.landPlane('Airbus');
    airport.takeOff('TestPlane');

    let expectedOutput = 4;
    let actualOutput = airport.planes.length;
    test.assertEquals(actualOutput, expectedOutput);
});


test.it("Criteria 6 - prevent take-off when weather is stormy.", () => {
    planes = ['EasyJet', 'JumboJet', 'Airbus', 'PassengerJet'];
    airport = new Airport(planes);

    airport.stormyWeather = true;

    airport.takeOff('Airbus');

    let expectedOutput = 4;
    let actualOutput = airport.planes.length;
    test.assertEquals(actualOutput, expectedOutput);
});