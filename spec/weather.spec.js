const Weather = require('../src/weather');
const test2 = require('../test-framework-weather');

test2.it("Weather is clear - plane checks can continue", () => {

    //setup
    weather = new Weather();
    let actualOutput;
    expectedOutput = false;

    //execute
    actualOutput = Boolean(weather.isClear());

    //verify
    test2.assertEquals(actualOutput, expectedOutput);

});