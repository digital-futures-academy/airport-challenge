const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

let expected, actual, result;

console.log('Plane Take Off Tests');
console.log('----------------------------------');

// Setup by adding plane initially to make airport list array have length of 1. Plane takeoff using instructToLand() method, decreases list of planes at airport (array) by 1. 

//arrange

expected = 0;
plane = new Plane('A1', true);
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
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
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
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);

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
plane1 = new Plane("A1", true);
plane2 = new Plane("B2", true);

// have to create new planes that have 'false' as landing a plane changes inflight property
arrayPlane1 = new Plane("A1", false);
arrayPlane2 = new Plane("B2", false);

airport = new Airport();

// Required as constructor doesnt have 'Location' as its linked with inFlight property

arrayPlane2.setAtAirport(true);

expectedArray = [arrayPlane2]
expected = JSON.stringify(expectedArray);

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2);

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
arrayPlane1 = undefined;
arrayPlane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Setup by adding planes initially to make airport list array have length of 2. Going to remove specific plane by planeID that is not in array and compare expected array list to actual

//arrange

expected = 1;
plane1 = new Plane("A1", true);
plane2 = new Plane("B2", true);


// have to create new planes that have 'false' as landing a plane changes inflight property
arrayPlane1 = new Plane("A1", false);
arrayPlane2 = new Plane("B2", false);

// Required as constructor doesnt have 'setAtAirport' as its linked with inFlight property
arrayPlane1.setAtAirport(true);
arrayPlane2.setAtAirport(true);

airport = new Airport();

expectedArray = [arrayPlane1, arrayPlane2]
expected = JSON.stringify(expectedArray);

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2);

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
//console.log(actual + "   " + expected);
console.log(`Test 5 - No plane is removed because plane with ID C3 does not exist in airport list and expected/actual arrays match ${result ? `PASS` : `FAIL`}`);

//cleanup

expectedArray = undefined;
actualArray = undefined;
plane1 = undefined;
plane2 = undefined;
arrayPlane1 = undefined;
arrayPlane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Test to make sure a plane can not be asked to take off from an airport it is not at. Create 2 airports - land plane at 'London' and tell 'Paris' to instruct takeoff. Therefore London should still have array size 1

//arrange

expected = 1;
plane = new Plane('A1', true);

airport1 = new Airport('London');
airport2 = new Airport('Paris');

//act

airport1.instructToLand(plane);
airport2.instructToTakeOff2(plane);

actual = airport1.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
//console.log(expected + "    " +  actual)
console.log(`Test 6 - Airports have independent arrays so 'London' airport should still have array 1 after wrong takeoff request ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport1 = undefined;
airport2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;

//Continuation of test 6 - but to check the state of 'Paris' array just incase something has gone wrong i.e array thinks -1

//arrange

expected = 0;
plane = new Plane('A1', true);

airport1 = new Airport('London');
airport2 = new Airport('Paris');

//act

airport1.instructToLand(plane);
airport2.instructToTakeOff2(plane);

actual = airport2.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
console.log(`Test 7 - Airports have independent arrays so 'Paris' airport should still be 0 after wrong takeoff request ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport1 = undefined;
airport2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;






















console.log('----------------------------------');