import { assertEquals, printReport } from "./test-framework.js";

import { Airport } from '../src/airport.js';

export const airportInitialisesWithNameTest = () => {
    const testDescription = "Airport constructor correctly creates an airport given name"

    // 1. Setup
    const input = "myAirport";
    const expectedOutput = "myAirport";

    // 2. Execute
    const myAirport = new Airport(input);
    const actualOutput = myAirport.name;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportInitialisesWithCapacityTest = () => {
    const testDescription = "Airport constructor correctly creates an airport given capacity"

    // 1. Setup
    const input = ["myAirport", 100];
    const expectedOutput = 100;

    // 2. Execute
    const myAirport = new Airport(...input);
    const actualOutput = myAirport.capacity;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportInitialisesWithDefaultCapacityTest = () => {
    const testDescription = "Airport constructor correctly creates an airport with default capacity"

    // 1. Setup
    const input = ["myAirport"];
    const expectedOutput = 100;

    // 2. Execute
    const myAirport = new Airport(...input);
    const actualOutput = myAirport.capacity;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportCapacityCanBeChanged = () => {
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

export const airportInitialisesWithListOfPlanes = () => {
    const testDescription = "Airport initialises with empty array of planes"

    //1. Setup
    const input = "myAirport";
    const expectedOutput = 0

    // 2. Execute
    const myAirport = new Airport(input);
    const actualOutput = myAirport.planes.length;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}
