const { Airport } = require("../src/airport.js");
{
    const { test } = require("./testSuit.js");
    let airport = new Airport();
    test(Number.isInteger(airport.defaultCapacity)).isTrue();
    test(airport.defaultCapacity >= 0).isTrue();
    const newDefaultCapacity = 3;
    airport.overrideDefaultCapacity(newDefaultCapacity);
    test(airport.defaultCapacity).equals(newDefaultCapacity);

    const badDefaultCapacity = -4;
    test(airport.overrideDefaultCapacity).with(badDefaultCapacity).throws(RangeError);

    const terribleDefaultCapacity = { id: "cheesecake" };
    test(airport.overrideDefaultCapacity).with(terribleDefaultCapacity).throws(TypeError);

    test(airport.overrideDefaultCapacity(0)).isUndefined() // no return value, may add a test().runs() method for running without throwing errors.

    test(airport.overrideDefaultCapacity).with([]).throws(TypeError);
    test.showSummary();

}

{
    const { test } = require("./testSuit.js");
    let airport = new Airport();
    test(Number.isInteger(airport.defaultCapacity)).isTrue();
    test(airport.defaultCapacity >= 0).isTrue();
    test(airport.capacity).equals(airport.defaultCapacity);
    const oldDefaultCapacity = airport.defaultCapacity;
    airport.setCapacity(3);
    test(airport.capacity).equals(3);
    test(airport.defaultCapacity).equals(oldDefaultCapacity);

    const badCapacity = -3;
    const terribleCapacity1 = [];
    const terribleCapacity2 = { a: [], b: [], c: "oeun" };
    test(airport.setCapacity).given(badCapacity).throws(RangeError);
    test(airport.setCapacity).with(terribleCapacity1).throws(TypeError);
    test(airport.setCapacity).with(terribleCapacity2).throws(TypeError);
    test.showSummary();
}