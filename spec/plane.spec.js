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
    const myPlane = new Plane(input);
    const actualOutput = myPlane.name;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Plane constructor correctly creates plane given a name: ${result}`)
}

const planeInitialisesWithAirportProperty = () => {
    // Check that plane constructor correctly initialises a plane given it's name it's name and airport

    // 1. Setup
    const input = ["myPlane", "LHR"];
    const expectedOutput = "LHR";

    // 2. Execute
    const myPlane = new Plane(...input);
    const actualOutput = myPlane.airport;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Plane constructor correctly creates named plane given airport: ${result}`);
}

const planeInitialisesWithDefaultAirportProperty = () => {
    // Check that plane constructor correctly initialises a plane given it's name but no airport, setting default as "LGW"

    // 1. Setup
    const input = ["myPlane"];
    const expectedOutput = "LGW";

    // 2. Execute
    const myPlane = new Plane(input);
    const actualOutput = myPlane.airport;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Plane constructor correctly creates named plane with default airport: ${result}`);
}

export { planeInitialisesWithNameTest, planeInitialisesWithAirportProperty, planeInitialisesWithDefaultAirportProperty };