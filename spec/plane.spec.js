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

/*const testLandingPlane = () => {
    //Setup
    // let input = 0;
    let expected = 1;
    let plane2 = new Plane();
    airportPlane2 = new Airport();
    console.log(`Testing that airportPlane2.landedPlanes.length => ${expected}`);
    //Execute
    plane2.land(airportPlane2);
    let actual = airportPlane2.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlane\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}

const testLandingPlaneInFullAirport = () => {
    //Setup
    // let input = 0;
    let expected = 3;
    let plane1 = new Plane();
    let plane2 = new Plane();
    let plane3 = new Plane();
    let plane4 = new Plane();
    airportPlane3 = new Airport();
    airportPlane3.maxPlaneCapcity = 3;
    console.log(`Testing that airportPlane3.landedPlanes.length => ${expected}`);
    //Execute
    plane1.land(airportPlane3);
    plane2.land(airportPlane3);
    plane3.land(airportPlane3);
    plane4.land(airportPlane3);
    let actual = airportPlane3.landedPlanes.length;
    //Verify
    let result = assertStatements.assertEquals(actual, expected);
    console.log(` testLandingPlaneInFullAirport\n  expected = ${expected}\n  actual = ${actual}\n  assertEquals = ${result}\n`);
}*/


const planeSpec = {
    testNewPlane,
    // testLandingPlane,
    // testLandingPlaneInFullAirport
}

module.exports = planeSpec;