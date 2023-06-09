{
    const { test } = require("./testSuit");
    const { Airport } = require("../src/airport");
    let airport = new Airport();

    test(airport.capacity === undefined).isFalse();
    test(airport.planesOnGround === undefined).isFalse();
    airport.capacity = 4;
    airport.planesOnGround = [{}, {}, {}, {}];
    test(airport.canLand()).isFalse();
    airport.capacity = 0;
    test(airport.canLand()).isFalse();
    airport.capacity = 10;
    airport.planesOnGround = [{
        callSign: "G-RUT",
        dest: "LAX",
    },
    {
        callSign: "G-WTR",
        dest: "LUT",
    }];
    test(airport.canLand()).isTrue();
    test.showSummary();
}
