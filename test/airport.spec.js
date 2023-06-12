const { assertEquals } = require("./test-framework");
const Airport = require("../src/airport");
//const Plane = require("../src/plane")

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

function testTakingOffPlane() {
    console.log(`Test 4 - Let a plane take off and no longer in the airport`);

    // Setup
    let expectedOutput, result, actualOutput;
    let airport = new Airport();
    airport.planes = [`F-15`];
    const planeTakenOff = { id: `F-15` };
    expectedOutput = false;

    // Execute
    airport.takeOff(planeTakenOff);
    actualOutput = airport.planes.includes(planeTakenOff);

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 4 - one plane taken off and no longer in the airport: ${result ? `PASS` : `FAIL`}\n`);
}

function testOnlyTakeOffPlaneAtAirport() {
    console.log(`Test 5 - Cannot let planes take-off which are not at the airport`);

    // Setup
    let expectedOutput, result, actualOutput;
    let airport = new Airport();
    airport.planes = [`F-15A`, `F-15B`];
    const planeTakenOff = `F-14`;
    expectedOutput = 2;

    // Execute
    airport.takeOff(planeTakenOff);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 5-1 - take-off a plane not at the airport do not change the airport planes numbers: ${result ? `PASS` : `FAIL`}\n`);
}

function testOnlyLandPlaneNotAtAirport() {
    console.log(`Test 5 - Cannot let planes land which are already at the airport`);

    // Setup
    let expectedOutput, result, actualOutput;
    let airport = new Airport();
    airport.planes = [`F-15A`, `F-15B`];
    const planeTakenOff = `F-15B`;
    expectedOutput = 2;

    // Execute
    airport.land(planeTakenOff);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 5-2 - land a plane already at the airport do not change the airport planes numbers: ${result ? `PASS` : `FAIL`}\n`);
}

function testNoTakeoffWhenStormy() {
    console.log(`Test 6 - Cannot let planes take-off when weather is stormy`);

    // Setup
    let expectedOutput, result, actualOutput;
    let airport = new Airport();
    airport.planes = [`F-15A`, `F-15B`, `F-15C`, `F-15D`];
    const planeTakenOff = `F-15B`;
    let weatherIsStormy = true;
    expectedOutput = 4;

    // Execute
    airport.takeOff(planeTakenOff);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 6 - take-off a plane not at the airport do not change the airport planes numbers: ${result ? `PASS` : `FAIL`}\n`);
}

testLandingPlane();
testDefaultCapacity();
testSetCapacity();
testNoLandingWhenFull();
testTakingOffPlane();
testOnlyTakeOffPlaneAtAirport();
testOnlyLandPlaneNotAtAirport();
testNoTakeoffWhenStormy();