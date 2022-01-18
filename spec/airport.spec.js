import { assertEquals, printBorder } from "./test-framework.js";

import { Airport } from '../src/airport.js';

const airportInitialisesWithNameTest = () => {
    // Check that airport constructor correctly creates an airport given name

    // 1. Setup
    const input = "myAirport";
    const expectedOutput = "myAirport";

    // 2. Execute
    const myAirport = new Airport(input);
    const actualOutput = myAirport.name;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Airport constructor correctly creates airport given a name: ${result}`)
}

export { airportInitialisesWithNameTest };