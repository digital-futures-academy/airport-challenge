import { assertEquals, printBorder } from "./test-framework.js";

import { Airport } from '../src/airport.js';
import { Plane } from '../src/plane.js';

// const { airport } = require('../src/airport.js');
// const { plane } = require('../src/plane.js');

const planeInitialisesWithNameTest = () => {
    // Check that plane constructor correctly creates a plane given plane name

    // 1. Setup
    const input = "myPlane";
    const expectedOutput = "myPlane";

    // 2. Execute
    const myPlane = new Plane("myPlane");
    const actualOutput = myPlane.name;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Plane constructor correctly creates plane given a name: ${result}`)

}
export { planeInitialisesWithNameTest };