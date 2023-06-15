const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

let input, expected, actual, result;

console.log('Plane Take Off Tests');
console.log('----------------------------------');

// Setup by adding plane initially to make airport list array have length of 1. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1. 

//arrange

expected = 0;
plane = new Plane('A1');
airport = new Airport();


//act

airport.instructToLand(plane);
airport.instructToTakeOff(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 1 - Array size is 0 after plane has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Setup by adding planes initially to make airport list array have length of 2. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1 resulting in length 1. 

//arrange

expected = 1;
plane1 = new Plane('A1');
plane2 = new Plane('B2');

airport = new Airport();

airport.instructToLand(plane1);
airport.instructToLand(plane2);

//act

airport.instructToTakeOff(plane2);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 2 - Array size is 1 after plane has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Setup by adding planes initially to make airport list array have length of 2. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1 resulting in length 1. Going to remove specific plane by planeID

//arrange

expected = 1;
plane1 = new Plane('A1');
plane2 = new Plane('B2');

airport = new Airport();

airport.instructToLand(plane1);
airport.instructToLand(plane2);

//act

airport.getListOfPlanesAtAirport.forEach(planesInArray);

function planesInArray(landedPlane) {
    console.log(landedPlane.getPlaneID())
    if (landedPlane.getPlaneID() === 'A1') {
        airport.instructToTakeOff(landedPlane);
    }
}

actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 3 - Array size is 1 after plane 'A1' has taken off ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Setup by adding planes initially to make airport list array have length of 2. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1 resulting in length 1. Going to remove specific plane by planeID and compare expected array list to actual

//arrange

expected = 1;
plane1 = new Plane("A1");
plane2 = new Plane("B2");

expectedArray = [plane2]
expected = JSON.stringify(expectedArray);

airport.instructToLand(plane1);
airport.instructToLand(plane2);

//act

airport.getListOfPlanesAtAirport.forEach(planesInArray);

function planesInArray(landedPlane) {

    if (landedPlane.getPlaneID() === 'A1') {
        airport.instructToTakeOff(landedPlane);
    }
}

actualArray = airport.getListOfPlanesAtAirport
actual = JSON.stringify(actualArray);

//assert

result = assertEquals(actual, expected);

console.log(`Test 4 - Correct plane is remove (A1) and remaining plane (B2) is correct too (using IDs) ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;