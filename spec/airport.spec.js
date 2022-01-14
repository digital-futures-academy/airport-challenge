const assertStatements = require(`./test-framework.js`);
const Airport = require("../src/airport.js");

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
    newAirport = new Airport();
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
    airport1 = new Airport();
    console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    let actual = airport1.landedPlanes.length = 0;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testNewAirportIsEmpty\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testOveridingPlaneCapacityToNewAirport = () => {
    //Setup
    let input = 3;
    let expected = 3;
    let airport2 = new Airport();
    console.log(`Testing that ${input} => ${expected}`);
    //Execute
    airport2.maxPlaneCapacity = input;
    let actual = airport2.maxPlaneCapacity;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testOveridingPlaneCapacityToNewAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}


const airportSpec = {
    testNewAirport,
    testNewAirportIsEmpty,
    testOveridingPlaneCapacityToNewAirport
}

module.exports = airportSpec;