const { Airport } = require("../src/airport");
{
    const { test } = require("./testSuit");

    let airport = new Airport();
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
{
    const { test } = require("./testSuit");
    let airport = new Airport();
    const standardPlane = { make: "cessna 172" };
    airport.planesOnGround = [standardPlane, standardPlane, standardPlane];
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(true); // questionable testing syntax, would be better without needing bind. Can't currently see a way out of this though.
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(true);
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(true);
    test(airport.takeOff.bind(airport)).with(standardPlane).equals(false);
    test.showSummary()

}