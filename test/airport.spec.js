const { assertEquals } = require("./test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane")

function testLandingPlane() {
    console.log(`Test 1 - Land a plane to an empty airport using land function and expect array of planes to increase in length to 1 `);

    // Setup
    let expectedOutput, result, actualOutput;
    let airport = new Airport();
    const plane1 = { id: `F-15` };
    expectedOutput = 1;

    // Execute
    airport.land(plane1);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 1 - one plane landed at airport: ${result ? `PASS` : `FAIL`}\n`);
}

function testDefaultCapacity() {
    console.log(`Test 2 -  Airport should have a default capacity`);

    // Setup
    let airport = new Airport();
    expectedOutput = 4;

    // Execute
    actualOutput = airport.capacity;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 2-1 - airport has a default capacity of 4: ${result ? `PASS` : `FAIL`}\n`);
}

function testSetCapacity() {
    console.log(`Test 2 -  Set default airport capacity that can be overridden as appropriate`);

    // Setup
    let airport = new Airport();
    expectedOutput = 9;

    // Execute
    airport.setCapacity(9);
    actualOutput = airport.capacity;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 2-2 - airport capacity overridden to 9: ${result ? `PASS` : `FAIL`}\n`);
}

function testNoLandingWhenFull() {
    console.log(`Test 3 -  No landing when the airport is full`);

    // Setup
    let airport = new Airport();
    airport.capacity = 4
    airport.planes = [`F-15A`, `F-15B`, `F-15C`, `F-15D`]
    const planeToLand = { id: `F-14` };
    expectedOutput = airport.capacity;

    // Execute
    airport.land(planeToLand);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 3 - no landing when the airport is full: ${result ? `PASS` : `FAIL`}\n`);
}

testLandingPlane();
testDefaultCapacity();
testSetCapacity();
testNoLandingWhenFull()