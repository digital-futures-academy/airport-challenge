const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);


console.log('Count Tests');
console.log('----------------------------------');

// extended criteria:
// Setup by adding 3 planes initially to make airport list array(going to change max capacity to 5).Call method that returns number of planes

//arrange

expected = 3;
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
plane3 = new Plane('C3', true);
airport = new Airport();

//act

airport.setAirportMaxCapacity(5);
airport.instructToLand(plane1);
airport.instructToLand(plane2);
airport.instructToLand(plane3);
actual = airport.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - 3 planes landed so plane count equals 3 ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// extended criteria:
// Setup by adding 2 planes initially to 2 instances of airport list arrays.Call method that returns number of planes from each airport and add them. Expect 4

//arrange

expected = 4;
plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
plane3 = new Plane('C3', true);
plane4 = new Plane('D4', true);
airport1 = new Airport('Miami');
airport2 = new Airport('Rome');

//act


airport1.instructToLand(plane1);
airport2.instructToLand(plane2);
airport1.instructToLand(plane3);
airport2.instructToLand(plane4);
actual = airport1.numberOfPlanesAtAirport() + airport2.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Total number of planes across 2 airports is 4 (2 planes each) ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;
airport1 = undefined;
airport2 = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// extended criteria:
// When created an instance of plane is created, it has default 'Location' value of 'In Flight'

//arrange

expected = 'In Flight';

plane = new Plane('D4', true);

//act

actual = plane.getLocation();

//assert

result = assertEquals(actual, expected);
console.log(`Test 3 - Check 'Location' of plane is 'In Flight' during a flight/not grounded at airport ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// extended criteria:
// Land plane to check 'Location' changes to 'At Airport'

//arrange

expected = 'At Airport';

plane = new Plane('D4', true);
airport = new Airport('Madrid');

//act

airport.instructToLand(plane);
actual = plane.getLocation();

//assert

result = assertEquals(actual, expected);
console.log(`Test 4 - Check 'Location' of plane is 'At Airport' since grounded at airport ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// extended criteria:
// Land plane then take off to check that 'Location' is being updated on take off too

//arrange

expected = 'In Flight';

plane = new Plane('D4', true);
airport = new Airport('Madrid');

//act

airport.instructToLand(plane);
airport.instructToTakeOff2(plane);
actual = plane.getLocation();

//assert

result = assertEquals(actual, expected);
console.log(`Test 5 - Check 'Location' of plane is 'In Flight' since it has left the airport ${result ? `PASS` : `FAIL`}`);

//cleanup

plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// extended criteria:
// To show possibilites - going to make 5 planes and add them to an array, then count number of 'At Airport'. Expect this to be 2 as they will have been giving land command

//arrange

expected = 2;

plane1 = new Plane('A1', true);
plane2 = new Plane('B2', true);
plane3 = new Plane('C3', true);
plane4 = new Plane('D4', true);
plane5 = new Plane('E5', true);

airport = new Airport('Madrid');

planeArray = [plane1, plane2, plane3, plane4, plane5]

//act

airport.instructToLand(plane2);
airport.instructToLand(plane4);

count = 0;
planeArray.forEach(planeInArray);

function planeInArray(landedPlane) {

    if (landedPlane.getLocation() === 'At Airport') {
        count += 1
    }
}

actual = count;

//assert

result = assertEquals(actual, expected);
console.log(`Test 6 - Only two of the created planes have landed therefore count should be 2 ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
plane4 = undefined;
plane5 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


console.log('----------------------------------');