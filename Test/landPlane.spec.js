const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);


let input, expected, actual, result;

// Landing a plane using instructToLand() method, increases list of planes at airport (array) by 1. 

//arrange

expected = 1;
plane = new Plane('A1');
airport = new Airport();


//act

airport.instructToLand(plane);
actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 1 - Array size is 1 after plane has been landed ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Check plane in airport list (array) is the plane expected. 

//arrange

expected = "A1";
plane = new Plane("A1");
airport = new Airport();


//act

airport.instructToLand(plane);
actual = airport.getListOfPlanesAtAirport[0].getPlaneID();

//assert

result = assertEquals(actual, expected);

console.log(`Test 2 - Array element 0 has plane ID of A1 ${result ? `PASS` : `FAIL`}`);

//cleanup

input = undefined;
expected = undefined;
actual = undefined;
result = undefined;