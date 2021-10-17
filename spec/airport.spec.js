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
    //console.log(result);
    //console.log(result.length);

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
    //console.log(result);
    //console.log(planeName);

    //ASSERT/VERIFY

    return test.assertEquals(planeName, expectedOutput);

});

/*test.it(`Check that the airport can land another plane to make the total capacity 2 `, function () {

    //--Check if landing another plane change the capacity to 2 and both planes are in the airport --

    let airport, expectedOutput, klm, boeng737;

    //ARRANGE/SETUP
    airport = new Airport();
    klm = new Plane('klm');
    boeng737 = new Plane('boeng737');
    expectedOutput = 2;

    console.log(airport.planes.length, 'airport ARRAY LENGTH b4 add');

    //ACT/EXECUTE
    airport.landPlane(boeng737);
    airport.landPlane(klm);

    console.log(airport.planes.length, 'airport ARRAY LENGTH');

    //ASSERT/VERIFY

    return test.assertEquals(airport.planes.length, expectedOutput);

});
*/

//----------------TEST 2 ------------

test.it(`Check the default capacity and Override airport capacity as appropriate `, function () {

    let manchester, capacity, newCapacity;

    //ARRANGE/SETUP
    manchester = new Airport();
    capacity = manchester.capacity;
    // console.log(capacity);


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

    //console.log(airport.planes.length);

    result = airport.landPlane(ka);
    //console.log(result);

    //ASSERT/VERIFY

    return test.assertEquals(result, expectedOutput);

});

