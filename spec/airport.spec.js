import { assertEquals, assertArrayOfPrimitivesEquals, assertErrorEquals, printReport } from "./test-framework.js";

import { Airport } from '../src/airport.js';
import { Plane } from "../src/plane.js";

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
    const input = ["myAirport", [], 110];
    // Have to pass empty array of planes to airport constructor due to the order of the default parameters.
    // Don't know clean way to allow input ["myAirport", 110] without checking argument types...
    const expectedOutput = 110;

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

export const airportCanBeInitialisedWithCustomListOfPlanes = () => {
    const testDescription = "Airport initialises with custom array of planes"

    //1. Setup
    const planesList = ["plane1, plane2"];
    const input = ["myAirport", planesList];
    const expectedOutput = planesList;

    // 2. Execute
    const myAirport = new Airport(...input);
    const actualOutput = myAirport.planes;

    // 3. Verify
    const result = assertArrayOfPrimitivesEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}


export const airportCannotLandPlaneWhenFull = () => {
    const testDescription = "Airport can't land a plane when it's full"

    //1. Setup
    const myAirport = new Airport("My Airport", [], 0);
    // Set airport capacity at 0 so no planes can land
    const myPlane = new Plane("Matt's plane");
    // This Airport test is tightly coupled to the Plane class...
    const expectedOutput = new Error("Cannot land plane when airport is full.");

    // 2. Execute
    const actualOutput = myAirport.landPlane(myPlane);

    // 3. Verify
    const result = assertErrorEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportCanLandPlaneWhenNotFull = () => {
    const testDescription = "Airport can land a plane when it is not full"

    //1. Setup
    const myAirport = new Airport("My Airport");
    const myPlane = new Plane("Matt's plane");

    // 2. Execute
    myAirport.landPlane(myPlane);
    const actualOutput = myAirport.planes;

    // 3. Verify
    const result = myAirport.planes.includes(myPlane);
    // QUESTION: Is it okay to use .includes rather than writing my own assertContains function?

    // Report
    printReport(testDescription, result);
}

export const airportCanLetPlaneTakeOff = () => {
    const testDescription = "Airport can let a plane take off"

    //1. Setup
    const myAirport = new Airport("My Airport");
    const myPlane = new Plane("Matt's plane");

    // 2. Execute
    myAirport.landPlane(myPlane);
    myAirport.takeOffPlane(myPlane);
    const actualOutput = myAirport.planes;

    // 3. Verify
    const result = !myAirport.planes.includes(myPlane);

    // Report
    printReport(testDescription, result);
}

export const airportCannotTakeOffPlaneNotInAirport = () => {
    const testDescription = "Airport cannot let a plane take off if it isn't in the airport"

    //1. Setup
    const myAirport = new Airport("My Airport");
    const myPlane = new Plane("Matt's plane");
    // Test doesn't work without above line. Makes me realise that since airport methods take a labelled Plane object as argument I can't do something like:
    // myAirport.landPlane(new Plane("A plane"));
    // myAirport.takeOffPlane("A plane");

    // See later tests "take off/landing returns plane"

    const expectedOutput = new Error("Cannot take off a plane which isn't in the airport.")

    // 2. Execute
    const actualOutput = myAirport.takeOffPlane(myPlane);

    // 3. Verify
    const result = assertErrorEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportCannotLandPlaneAlreadyInAirport = () => {
    const testDescription = "Airport cannot land a plane if it is already in the airport"

    //1. Setup
    const myAirport = new Airport("My Airport");
    const myPlane = new Plane("Matt's plane");
    const expectedOutput = new Error("Cannot land a plane which is already in the airport.")

    // 2. Execute
    myAirport.landPlane(myPlane);
    // try land sam plane again:
    const actualOutput = myAirport.landPlane(myPlane);

    // 3. Verify
    const result = assertErrorEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportLandPlaneReturnsPlaneObject = () => {
    const testDescription = "Airport returns plane object when landing plane"

    //1. Setup
    const myAirport = new Airport("My Airport");
    const myPlane = new Plane("Matt's plane");
    const expectedOutput = myPlane;

    // 2. Execute
    const actualOutput = myAirport.landPlane(myPlane);

    // 3. Verify
    const result = assertEquals(actualOutput, expectedOutput);


    // Report
    printReport(testDescription, result);
}
export const airportTakeOffPlaneReturnsPlaneObject = () => {
    const testDescription = "Airport returns plane object when taking off plane"

    //1. Setup
    const myAirport = new Airport("My Airport");
    const myPlane = new Plane("Matt's plane");
    // In next week's challenge I'll try use mock classes to decouple tests
    const expectedOutput = myPlane;

    // 2. Execute
    myAirport.landPlane(myPlane);
    const actualOutput = myAirport.takeOffPlane(myPlane);

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportLandPlaneChangesPlaneAirportProperty = () => {
    const testDescription = "Landing a plane changes its airport property"

    //1. Setup
    const myAirport = new Airport("LHR");
    const myPlane = new Plane("Matt's plane", "in flight"); // plane initialised in flight
    const expectedOutput = "LHR";

    // 2. Execute
    myAirport.landPlane(myPlane);
    const actualOutput = myPlane.airport;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}

export const airportTakeOffPlaneChangesPlaneAirportProperty = () => {
    const testDescription = "Taking off a plane changes its airport property"

    //1. Setup
    const myAirport = new Airport("LHR");
    const myPlane = new Plane("Matt's plane"); // plane initialised with default LGW
    const expectedOutput = "in flight";

    // 2. Execute
    myAirport.landPlane(myPlane);
    myAirport.takeOffPlane(myPlane);
    const actualOutput = myPlane.airport;

    // 3. Verify
    const result = assertEquals(expectedOutput, actualOutput);

    // Report
    printReport(testDescription, result);
}