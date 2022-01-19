import { assertEquals, printBorder, printReport } from "./test-framework.js";

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

const airportInitialisesWithCapacityTest = () => {
    // Check that airport constructor correctly creates an airport given name

    // 1. Setup
    const input = ["myAirport", 100];
    const expectedOutput = 100;

    // 2. Execute
    const myAirport = new Airport(...input);
    const actualOutput = myAirport.capacity;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Airport constructor correctly creates airport given capacity: ${result}`)
}

const airportInitialisesWithDefaultCapacityTest = () => {
    // Check that airport constructor correctly creates an airport given name

    // 1. Setup
    const input = ["myAirport"];
    const expectedOutput = 100;

    // 2. Execute
    const myAirport = new Airport(...input);
    const actualOutput = myAirport.capacity;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printBorder();
    console.log(`Airport constructor correctly creates airport with default capacity: ${result}`)
}

const airportCapacityCanBeChanged = () => {
    const testDescription = "Airport capacity can be changed to provided value"

    //1. Setup
    const myAirport = new Airport("myAirport");
    const expectedOutput = 120;

    // 2. Execute
    myAirport.changeCapacity(120);
    const actualOutput = myAirport.capacity;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export { airportInitialisesWithNameTest, airportInitialisesWithCapacityTest, airportInitialisesWithDefaultCapacityTest, airportCapacityCanBeChanged };