const test = require('../test-framework');
const Airport = require('../src/airport.js');
const Plane = require('../src/plane.js');

test.it(`Check that length of Planes in the airport grows by one when one plain lands`, function () {

    //----------------TEST 1 --------

    let airport, plane, expectedOutput, result;

    //ARRANGE/SETUP
    airport = new Airport();
    plane = new Plane();
    expectedOutput = 1;

    //ACT/EXECUTE
    result = airport.landPlane(plane);
    //ASSERT/VERIFY

    return test.assertEquals(result.length, expectedOutput);

});

test.it(`Check that the plane landed is in the airport`, function () {

    //---Check the plane is in the airport --------

    let airport, expectedOutput, result;

    //ARRANGE/SETUP
    airport = new Airport();
    klm = new Plane('klm')
    expectedOutput = 'klm';

    //ACT/EXECUTE
    result = airport.landPlane(klm);
    planeName = result[0]['plane_name']

    //ASSERT/VERIFY
    return test.assertEquals(planeName, expectedOutput);

});

//----------------TEST 2 ------------

test.it(`Check the default capacity and Override airport capacity as appropriate `, function () {

    let manchester, capacity, newCapacity;

    //ARRANGE/SETUP
    manchester = new Airport();

    //ACT/EXECUTE
    liverpool = new Airport();
    newCapacity = liverpool.overrideCapacity(5);

    //ASSERT/VERIFY
    return test.assertEquals(newCapacity, 5);

});

//----------------TEST 3 ------------

test.it(`Prevent landing when the airport is full `, function () {

    let airport, expectedOutput, result;

    //ARRANGE/SETUP
    airport = new Airport();
    klm = new Plane('klm');
    boeng737 = new Plane('boeng737');
    ka = new Plane('ka');
    expectedOutput = `Airport is Full no landing`;

    //ACT/EXECUTE
    airport.landPlane(boeng737);
    airport.landPlane(klm);
    result = airport.landPlane(ka);

    //ASSERT/VERIFY
    return test.assertEquals(result, expectedOutput);
});

//----------------TEST 4 ------------


test.it(`instruct the airport to let a plane take off and confirm that it is no longer in the airport`, function () {

    let luton, expectedOutput, superjumbo;

    //ARRANGE/SETUP
    luton = new Airport();
    superjumbo = new Plane('superjumbo');

    //ACT/EXECUTE
    luton.landPlane(superjumbo);
    result1 = luton.landed(superjumbo);

    luton.takeOff(superjumbo);
    expectedOutput = 0;

    //ASSERT/VERIFY
    return test.assertEquals(luton.planes.length, expectedOutput);
});

//----------------TEST 5 ------------

test.it(`prevent asking the airport to land planes which are already at the airport`, function () {

    let expectedOutput, boeng777, stanstead, result1;

    //ARRANGE/SETUP
    stanstead = new Airport();
    boeng777 = new Plane('boeng777');

    //ACT/EXECUTE
    stanstead.landPlane(boeng777);
    result1 = stanstead.landed(boeng777);
    expectedOutput = 'Plane has Landed';

    //ASSERT/VERIFY
    return test.assertEquals(result1, expectedOutput);

});


