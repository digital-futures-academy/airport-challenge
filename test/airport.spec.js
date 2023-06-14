const { assertEquals } = require("./test-framework");
const Airport = require("../src/Airport");

function testLandingPlane() {
    console.log(`Test 1 - Land a plane to an empty airport and expect array of planes to increase in length to 1`);

    // Setup
    let airport = new Airport();
    const plane1 = `F-15`;
    expectedOutput = 1;

    // Execute
    airport.land(plane1);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 1 - one plane landed at airport: ${result ? `PASS` : `FAIL`}\n`);
}

function testDefaultCapacity() {
    console.log(`Test 2-1 -  Airport should have a default capacity`);

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
    console.log(`Test 2-2 - Airport should have a default capacity that can be overridden as appropriate`);

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

function testNoLandingWhenAirportFull() {
    console.log(`Test 3 - Landing a plane when the airport is full should not increase the planes numbers at the airport`);

    // Setup
    let airport = new Airport();
    airport.capacity = 4
    airport.planes = [`F-15A`, `F-15B`, `F-15C`, `F-15D`]
    const planeToLand = `F-14`;
    expectedOutput = airport.capacity;

    // Execute
    airport.land(planeToLand);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 3 - no landing when the airport is full: ${result ? `PASS` : `FAIL`}\n`);
}

function testTakingOffPlane() {
    console.log(`Test 4 - Let a plane take off and it should no longer be in the airport`);

    // Setup
    let airport = new Airport();
    airport.planes = [`F-15`, `F-14`];
    const planeTakenOff = `F-15`;
    expectedOutput = false;

    // Execute
    airport.takeOff(planeTakenOff);
    actualOutput = airport.planes.includes(planeTakenOff);

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 4 - one plane taken off and no longer in the airport: ${result ? `PASS` : `FAIL`}\n`);
}

function testOnlyTakeOffPlaneAtAirport() {
    console.log(`Test 5-1 - take-off a plane not at the airport do not change the airport planes numbers`);

    // Setup
    let airport = new Airport();
    airport.planes = [`F-15A`, `F-15B`];
    const planeTakenOff = `F-14`;
    expectedOutput = 2;

    // Execute
    airport.takeOff(planeTakenOff);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 5-1 - planes not at the airport cannot take off: ${result ? `PASS` : `FAIL`}\n`);
}

function testOnlyLandPlaneNotAtAirport() {
    console.log(`Test 5-2 - Land a plane not at the airport do not change the airport planes numbers`);

    // Setup
    let airport = new Airport();
    airport.planes = [`F-15A`, `F-15B`];
    const planeTakenOff = `F-15B`;
    expectedOutput = 2;

    // Execute
    airport.land(planeTakenOff);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 5-2 - planes already at the airport cannot land again: ${result ? `PASS` : `FAIL`}\n`);
}

function testNoTakeoffWhenStormy() {
    console.log(`Test 6 - Takeoff a plane when weather is stormy do not change the airport planes numbers`);

    // Setup
    let airport = new Airport();
    airport.planes = [`F-15A`, `F-15B`, `F-15C`, `F-15D`];
    const planeTakenOff = `F-15B`;
    airport.weather.weather = `Stormy`;
    expectedOutput = 4;

    // Execute
    airport.takeOff(planeTakenOff);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 6 - planes cannot takeoff when weather is stormy: ${result ? `PASS` : `FAIL`}\n`);
}

function testNoLandingWhenStormy() {
    console.log(`Test 7 - Land a plane when weather is stormy do not change the airport planes numbers`);

    // Setup
    let airport = new Airport();
    airport.planes = [];
    const planeLanding = `F-15B`;
    airport.weather.weather = `Stormy`;
    expectedOutput = 0;

    // Execute
    airport.land(planeLanding);
    actualOutput = airport.planes.length;

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 7 - planes cannot land when weather is stormy: ${result ? `PASS` : `FAIL`}\n`);
}

function testPlaneLandedBeAtAirport() {
    console.log(`Test 8 - Planes that have landed must be at an airport`);

    // Setup
    let planeCounter = new Airport();
    planeCounter.weather = `Sunny`;
    const planeLanding = `F-15B`;
    expectedOutput = true;

    // Execute
    planeCounter.land(planeLanding);
    actualOutput = planeCounter.planes.includes(planeLanding);

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 8 - plane landed should be at the airport: ${result ? `PASS` : `FAIL`}\n`);
}

testLandingPlane();
testDefaultCapacity();
testSetCapacity();
testNoLandingWhenAirportFull();
testTakingOffPlane();
testOnlyTakeOffPlaneAtAirport();
testOnlyLandPlaneNotAtAirport();
testNoTakeoffWhenStormy();
testNoLandingWhenStormy();
testPlaneLandedBeAtAirport();