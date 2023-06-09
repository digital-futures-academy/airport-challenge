const { assertEquals } = require("./test-framework");
const Airport = require("../src/airport");
const Plane = require("../src/plane")

let expectedOutput, result, actualOutput;

const plane1 = { id: `F-15` };
// const plane1 = { id: `F-15A` };

console.log(`Test 1 - Land a plane to an empty airport using land function and expect array of planes to increase in length to 1 `);

// Setup
let airport = new Airport();
//console.log(airport);
expectedOutput = 1;

// Execute
airport.land(plane1);
actualOutput = airport.planes.length;
console.log(actualOutput === expectedOutput);

// Verify
result = assertEquals(expectedOutput, actualOutput);

console.log(`Test 1 - one plane landed to airport: ${result ? `PASS` : `FAIL`}`);
console.log(``);

// // Clean up
// result = undefined;
// actualOutput = undefined;
