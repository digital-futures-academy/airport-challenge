const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

let expected, actual, result;

console.log('Plane Take Off Tests');
console.log('----------------------------------');

// Setup by adding plane initially to make airport list array have length of 1. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1. 

//arrange

expected = 0;
plane = new Plane('A1');
airport = new Airport();

//act

airport.instructToLand(plane);
airport.instructToTakeOff2(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Array size is 0 after plane has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Setup by adding planes initially to make airport list array have length of 2. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1 resulting in length 1. 

//arrange

expected = 1;
plane1 = new Plane('A1');
plane2 = new Plane('B2');
airport = new Airport();

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2);

airport.instructToTakeOff2(plane2);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Array size is 1 after plane has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Setup by adding planes initially to make airport list array have length of 2. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1 resulting in length 1. Going to remove specific plane by planeID

//arrange

expected = 1;
plane1 = new Plane('A1');
plane2 = new Plane('B2');

airport = new Airport();

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2);

airport.getListOfPlanesAtAirport.forEach(planesInArray);

function planesInArray(landedPlane) {
    if (landedPlane.getPlaneID() === 'A1') {
        airport.instructToTakeOff2(landedPlane);
    }
}

actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 3 - Array size is 1 after plane 'A1' has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Setup by adding planes initially to make airport list array have length of 2. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1 resulting in length 1. Going to remove specific plane by planeID and compare expected array list to actual

//arrange

expected = 1;
plane1 = new Plane("A1");
plane2 = new Plane("B2");

airport = new Airport();

expectedArray = [plane2]
expected = JSON.stringify(expectedArray);

airport.instructToLand(plane1);
airport.instructToLand(plane2);

//act

airport.getListOfPlanesAtAirport.forEach(planesInArray2);

function planesInArray2(landedPlane) {

    if (landedPlane.getPlaneID() === 'A1') {
        airport.instructToTakeOff2(landedPlane);
    }
}

actualArray = airport.getListOfPlanesAtAirport
actual = JSON.stringify(actualArray);

//assert

result = assertEquals(actual, expected);
console.log(`Test 4 - Correct plane is removed (A1) and remaining plane (B2) is correct too (using IDs) ${result ? `PASS` : `FAIL`}`);

//cleanup

expectedArray = undefined;
actualArray = undefined;
plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Setup by adding planes initially to make airport list array have length of 2. Going to remove specific plane by planeID that is not in array and compare expected array list to actual

//arrange

expected = 1;
plane1 = new Plane("A1");
plane2 = new Plane("B2");

airport = new Airport();

expectedArray = [plane1, plane2]
expected = JSON.stringify(expectedArray);

airport.instructToLand(plane1);
airport.instructToLand(plane2);

//act

airport.getListOfPlanesAtAirport.forEach(planesInArray3);

function planesInArray3(landedPlane) {

    if (landedPlane.getPlaneID() === 'C3') {
        airport.instructToTakeOff2(landedPlane);
    }
}

actualArray = airport.getListOfPlanesAtAirport
actual = JSON.stringify(actualArray);

//assert

result = assertEquals(actual, expected);
console.log(`Test 5 - No plane is removed because plane with ID C3 does not exist in airport list and expected/actual arrays match ${result ? `PASS` : `FAIL`}`);

//cleanup

expectedArray = undefined;
actualArray = undefined;
plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;