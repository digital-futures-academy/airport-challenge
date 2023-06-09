const { Airport } = require("../src/airport");
let airport = new Airport();
{
    const { test } = require("./testSuit");
    const examplePlane = { id: "plane1" };
    const differentPlane = { id: "plane2" };
    airport.planesOnGround = [examplePlane, { id: "ground vec 1" }];
    test(airport.takeOff(examplePlane)).isTrue();
    test(airport.planesOnGround.includes(examplePlane)).isFalse();
    test(airport.takeOff(differentPlane)).isFalse();
    test(airport.planesOnGround[0].id).equals("ground vec 1");

    test(airport.takeOff(examplePlane)).isFalse(); // this plane has already taken off

    test.showSummary();
}