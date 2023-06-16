const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);


let plane, plane1, plane2, airport, expected, actual, result;

console.log('Land plane Tests');
console.log('----------------------------------');
// Landing a plane using instructToLand() method, increases list of planes at airport (array) by 1. 

//arrange

expected = 1;
plane = new Plane('A1', true);
airport = new Airport();

//act

airport.instructToLand(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Array size is 1 after plane has been landed ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Check plane in airport list (array element 0) is the plane expected. 

//arrange

expected = "A1";
plane = new Plane("A1", true);
airport = new Airport();

//act

airport.instructToLand(plane);
actual = airport.getListOfPlanesAtAirport[0].getPlaneID();

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Array element 0 has plane ID of A1 ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Land multiple planes and compare airport list to defined array.

//arrange

plane1 = new Plane("A1", true);
plane2 = new Plane("B2", true);
airport = new Airport();

expectedArray = [plane1, plane2]
expected = JSON.stringify(expectedArray);

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2);

actualArray = airport.getListOfPlanesAtAirport
actual = JSON.stringify(actualArray);

//assert

result = assertEquals(actual, expected);
console.log(`Test 3 - Airport plane list is as expected list ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
expectedArray = undefined;
actualArray = undefined;
actual = undefined;
result = undefined;


// Landing an in flight plane using instructToLand() method, increases list of planes at airport (array) by 1. 

//arrange

expected = 1;
plane = new Plane('A1', true);
airport = new Airport();

//act

airport.instructToLand(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
console.log(`Test 4 - Plane is in flight so can be asked to land therefore array increases by 1 ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Landing a grouded plane using instructToLand() method, does not increase list of planes at airport (array) by 1 (program should prevent request to land plane that is grouded). 

//arrange

expected = 0;
plane = new Plane('A1', false);
airport = new Airport();

//act

airport.instructToLand(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);
console.log(`Test 5 - Plane is grounded so cant be asked to land therefore array equals 0 ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;



console.log('----------------------------------');


