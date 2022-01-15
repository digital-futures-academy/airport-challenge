const assertStatements = require(`./test-framework.js`);
const Airport = require("../src/airport.js");
const Plane = require("../src/plane.js");

// const testingMethod = () => {
//     //Setup
//     let input = 0;
//     let expected = 0;
//     console.log(`Testing that ${input} => ${expected}`);
//     //Execute
//     let actual = methodToTest(input);
//     //Verify
//     let result = assertStatements.assertEquals(actual, expected);
//     console.log(`testingMethod \n expected = ${expected} \n actual = ${actual} \n assertEquals = ${result}`);

// }

const testNewAirport = () => {
    //Setup
    // let input = 0;
    // let expected = 0;
    airport1 = new Airport();
    //     console.log(`Testing that ${input} => ${expected}`);
    //Execute
    //     let actual = methodToTest(input);
    //Verify
    //     let result = assertStatements.assertEquals(actual, expected);
    //     console.log(`testingMethod \n expected = ${expected} \n actual = ${actual} \n assertEquals = ${result}`);
}

const testNewAirportIsEmpty = () => {
    //Setup
    // let input = 0;
    let expected = 0;
    let airport1 = new Airport();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    let actual = airport1.landedPlanes.length = 0;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testNewAirportIsEmpty\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testOverridingPlaneCapacityToNewAirport = () => {
    //Setup
    let input = 3;
    let expected = 3;
    let airport1 = new Airport();
    console.log(`Testing that ${input} => ${expected}`);
    //Execute
    airport1.maxPlaneCapacity = input;
    let actual = airport1.maxPlaneCapacity;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testOveridingPlaneCapacityToNewAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testLandingPlane = () => {
    //Setup
    // let input = 0;
    let expected = 1;
    let plane1 = new Plane();
    let airport1 = new Airport();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.land(plane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlane\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testLandingPlaneInFullAirport = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    airport1.maxPlaneCapacity = 3;
    let expected = airport1.maxPlaneCapacity;
    let plane1 = new Plane();
    let plane2 = new Plane();
    let plane3 = new Plane();
    let plane4 = new Plane();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.land(plane1);
    airport1.land(plane2);
    airport1.land(plane3);
    airport1.land(plane4);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlaneInFullAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testPlaneTakingOff = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let expected = 0;
    let plane1 = new Plane();
    airport1.land(plane1);
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.takeOff(plane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testPlaneTakingOff\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testPlaneTakingOffInEmptyAirport = () => {
    //Setup
    // let input = 0;
    let airport1 = new Airport();
    let expected = 0;
    let plane1 = new Plane();
    // airport1.land(plane1);
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    airport1.takeOff(plane1);
    let actual = airport1.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testPlaneTakingOffInEmptyAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}


const airportSpec = {
    testNewAirport,
    testNewAirportIsEmpty,
    testOverridingPlaneCapacityToNewAirport,
    testLandingPlane,
    testLandingPlaneInFullAirport,
    testPlaneTakingOff,
    testPlaneTakingOffInEmptyAirport
}

module.exports = airportSpec;