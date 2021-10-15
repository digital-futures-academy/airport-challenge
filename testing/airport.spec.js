const test = require(`./test-framework.js`);
const Airport = require(`../src/airport.js`);
const Plane = require(`../src/plane.js`);

test.it(`Make sure a plane has landed at the airport`, () => {
    let airport, plane, expectedOutput;
    // TO ARRANGE:
    airport = new Airport();
    plane = new Plane();
    expectedOutput = 1;
    //ACT:
    airport.landPlane(plane)
    // ASSERT:
    result = test.assertEquals(airport.planes.length, expectedOutput);


    test.assertEquals(airport.planes.includes(plane), true);
});
