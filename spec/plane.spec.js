import { assertEquals, printReport } from "./test-framework.js";

import { Airport } from '../src/airport.js';
import { Plane } from '../src/plane.js';

// const { airport } = require('../src/airport.js');
// const { plane } = require('../src/plane.js');

const planeInitialisesWithNameTest = () => {
    const testDescription = "Plane constructor correctly creates a plane given plane name"

    // 1. Setup
    const input = "myPlane";
    const expectedOutput = "myPlane";

    // 2. Execute
    const myPlane = new Plane(input);
    const actualOutput = myPlane.name;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

const planeInitialisesWithAirportProperty = () => {
    const testDescription = "Plane constructor correctly initialises a plane given its current airport"

    // 1. Setup
    const input = ["myPlane", "LHR"];
    const expectedOutput = "LHR";

    // 2. Execute
    const myPlane = new Plane(...input);
    const actualOutput = myPlane.airport;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

const planeInitialisesWithDefaultAirportProperty = () => {
    const testDescription = "Plane constructor correctly initialises a plane with default airport"

    // 1. Setup
    const input = ["myPlane"];
    const expectedOutput = "LGW";

    // 2. Execute
    const myPlane = new Plane(input);
    const actualOutput = myPlane.airport;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export { planeInitialisesWithNameTest, planeInitialisesWithAirportProperty, planeInitialisesWithDefaultAirportProperty };