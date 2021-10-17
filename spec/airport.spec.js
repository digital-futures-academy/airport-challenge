
const Airport = require('../src/airport');
const test = require('../test-framework');

//TEST ONE
// ------------------------
test.it("Test One - Plane has landed at airport", () => {

    //setup
    let airport = new Airport();
    let plane = 'pla1';
    let expectedOutput = 1;
    let actualOutput;

    //execute
    actualOutput = airport.addPlane(plane).length;

    //verify
    test.assertEquals(actualOutput, expectedOutput);

});

//TEST TWO
// -----------------------
test.it("Test Two - Testing that airport capacity can be altered", () => {

    airport = new Airport();
    input = airport.airportSize;
    expectedOutput = 5;
    let actualOutput;

    // execute
    actualOutput = airport.setAirportSize(input, 3);

    // verify
    test.assertEquals(actualOutput, expectedOutput);

});

//TEST THREE
// --------------------------
test.it("Test three - Testing when the Airport is full", () => {

    airport = new Airport();

    expectedOutput = true;
    airport.planeList = ['plane one', 'plane two'];

    // execute
    actualOutput = airport.isFull();

    // verify
    test.assertEquals(actualOutput, expectedOutput);
})

//TEST Four
// ------------------------
test.it("Test Four - Plane has left the airport", () => {

    //setup
    let airport = new Airport();
    let plane = 'pla1';
    let expectedOutput = 0;
    let actualOutput;

    //execute
    actualOutput = airport.removePlane(plane).length;

    //verify
    test.assertEquals(actualOutput, expectedOutput);

});

test.it("Test Five - The plane is at the airport and is going to takeoff", () => {

    //setup
    let airport = new Airport();
    let landed = true;
    let expectedOutput = true;
    let actualOutput;

    //execute
    actualOutput = airport.isLanded(landed);

    //verify
    test.assertEquals(actualOutput, expectedOutput);

});

test.it("Test Six - The plane is flying and would like to land", () => {

    //setup
    let airport = new Airport();
    let flying = true;
    let expectedOutput = true;
    let actualOutput;

    //execute
    actualOutput = airport.isFlying(flying);

    //verify
    test.assertEquals(actualOutput, expectedOutput);

});

test.it("Test Six - The plane is landed at an airport", () => {

    //setup
    let airport = new Airport();
    let landed = true;
    let atAirport = true;
    let expectedOutput = true;
    let actualOutput;

    //execute
    actualOutput = airport.isAtAirport(landed, atAirport);

    //verify
    test.assertEquals(actualOutput, expectedOutput);

});