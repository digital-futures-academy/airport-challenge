const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);

console.log('Plane At Airport Tests');

// In future could have an array of airports with different IDS and perform check on specific airports but thats outside of requirements
console.log('----------------------------------');

// Setup by adding plane initially to make airport list array. Then search for the plane by ID within the airport list. Plane exists so method will return true. 

//arrange

expected = true;
plane = new Plane('A1', true);
airport = new Airport();

//act

airport.instructToLand(plane);
actual = airport.checkPlaneAtAirport(plane);

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Plane A1 is at the airport ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Setup by adding plane initially to make airport list array - create a second plane but dont add to airport list (land). Then search for the second plane by ID within the airport list. Plane does not exist so method will return false. 

//arrange

expected = false;
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
airport = new Airport();

//act

airport.instructToLand(plane1);
actual = airport.checkPlaneAtAirport(plane2);

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Plane B2 is not at the airport so check is false ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Setup by adding 3 planes initially to make airport list array ( going to change max capacity to 3). Search for second plane to ensure method is comparing actual elements and not just returning first or last element

//arrange

expected = true;
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
plane3 = new Plane('C3', true);
airport = new Airport();

//act

airport.setAirportMaxCapacity(3);
airport.instructToLand(plane1);
airport.instructToLand(plane2);
airport.instructToLand(plane3);
actual = airport.checkPlaneAtAirport(plane2);

//assert

result = assertEquals(actual, expected);
console.log(`Test 3 - Plane B2 is at the airport so check is true ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


console.log('----------------------------------');