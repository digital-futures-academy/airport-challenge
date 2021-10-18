const test = require(`./test-framework.js`);
const Airport = require(`../src/airport.js`);
const Plane = require(`../src/plane.js`);

test.it(`Make sure a plane has landed at the airport`, () => {
    let airport, plane, expectedOutput;
    // TO ARRANGE:
    airport = new Airport();
    plane = new Plane();
    expectedOutput = true;
    //ACT:
    airport.landPlane(plane);
    // ASSERT:
    test.assertEquals(airport.planes.includes(plane), expectedOutput);
});
test.it(`Check that length of planes in airport grows by one when one plane lands`, () => {
    let airport, plane, expectedOutput;
    airport = new Airport();
    plane = new Plane();
    expectedOutput = 1;
    airport.landPlane(plane);
    test.assertEquals(airport.planes.length, expectedOutput);
});
test.it(`Check that there is a default airport capacity`, () => {
    let airport, expectedOutput;
    airport = new Airport();
    expectedOutput = 2;
    test.assertEquals(airport.defaultCapacity, expectedOutput);
});
test.it(`Check you can override the default airport capacity`, () => {
    let airport, expectedOutput;
    airport = new Airport(5);
    expectedOutput = 5;
    test.assertEquals(airport.defaultCapacity, expectedOutput);
});
test.it(`Check airport is full to prevent landing`, () => {
    let airport, plane, expectedOutput;
    airport = new Airport();

    plane1 = new Plane();
    plane2 = new Plane();

    airport.landPlane(plane1);
    airport.landPlane(plane2);

    expectedOutput = true;
    test.assertEquals(airport.isFull(), expectedOutput);
});
test.it(`Check that a plane is no longer at the airport`, () => {
    let airport, expectedOutput;
    airport = new Airport();
    plane = new Plane();

    expectedOutput = false;

    airport.landPlane(plane);
    airport.takeoffPlane(plane);

    test.assertEquals(airport.isPlaneAtAirport(plane), expectedOutput);
});