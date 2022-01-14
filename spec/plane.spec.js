const assertStatements = require(`./test-framework.js`);
const Plane = require("../src/plane.js");
const Airport = require("../src/airport.js");

const testNewPlane = () => {
    //Setup
    // let input = 0;
    // let expected = 0;
    let plane1 = new Plane();
    // console.log(`Testing that airport1.landedPlanes.length => ${expected}`);
    //Execute
    // let actual = airport1.landedPlanes.length;
    //Verify
    // let result = assertStatements.assertEquals(actual, expected);
    // console.log(`testingMethod \n expected = ${expected} \n actual = ${actual} \n assertEquals = ${result}`);
}

const testLandingPlane = () => {
    //Setup
    // let input = 0;
    let expected = 1;
    let plane2 = new Plane();
    airportPlane2 = new Airport();
    console.log(`Testing that airport2.landedPlanes.length => ${expected}`);
    //Execute
    plane2.land(airportPlane2);
    let actual = airportPlane2.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlane\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}


const planeSpec = {
    testNewPlane,
    testLandingPlane
}

module.exports = planeSpec;