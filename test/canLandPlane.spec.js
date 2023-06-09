const { Airport } = require("../src/airport.js");
{
    const { test } = require("./testSuit.js");

    let airport = new Airport();
    const emptyPlane = {};
    airport.landPlane(emptyPlane);
    test(airport.planesOnGround[0]).equals(emptyPlane);
    test(airport.planesOnGround.length).equals(1);

    const planeWithCallsignAndDest = {
        callSign: "GBX66",
        destination: "LHX"
    };
    airport.landPlane(planeWithCallsignAndDest);

    test(airport.planesOnGround[0]).equals(emptyPlane);
    test(airport.planesOnGround[airport.planesOnGround.length - 1]).equals(planeWithCallsignAndDest);
    test.showSummary();
}