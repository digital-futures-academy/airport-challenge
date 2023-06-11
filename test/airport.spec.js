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
    console.log(actualOutput === expectedOutput);

    // Verify
    result = assertEquals(expectedOutput, actualOutput);

    console.log(`Test 1 - one plane landed at airport: ${result ? `PASS` : `FAIL`}\n`);
}

testLandingPlane();