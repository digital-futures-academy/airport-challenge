const test = require('../test-framework');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');
//let airport, expectedOutput, result;

//console.log('land plane to the airport() and add 1 to the planes');

test.it(`Check that length of Planes in the airport grows by one when one plain lands`, function () {

    //----------------TEST 1 --------

    let airport, expectedOutput, result;

    //ARRANGE/SETUP
    airport = new Airport();
    expectedOutput = 1;

    //ACT/EXECUTE
    result = airport.landPlane('klm');
    //console.log(result);
    //console.log(result.length);

    //ASSERT/VERIFY

    return test.assertEquals(result.length, expectedOutput);

});
