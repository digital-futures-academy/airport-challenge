const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework`);
const { Plane } = require(`../src/Plane.js`);


console.log('Weather Tests');
console.log('----------------------------------');

// Access the weatherSafeForAction for an airport using method call. 

//arrange

expected = true;
airport = new Airport('Sunny Airport');

//act

actual = airport.getWeatherSafeForAction();

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Weather is good by default , therefore weather is safe (true) ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Change weather to unsafe because its stormy manually . 

//arrange

expected = false;
airport = new Airport('Stormy Airport');

//act

airport.setWeatherSafeForAction(false);

actual = airport.getWeatherSafeForAction();

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Weather set to not safe (false) , therefore result is false ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Land plane when weather is safe . Airport weather is safe by default

//arrange

expected = 1;
airport = new Airport('Sunny Airport');
plane = new Plane('A1', true);
//act

airport.instructToLand(plane);
actual = airport.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 3 - Weather safe and planes allowed to land , therefore airport array equals 1 ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Try land plane when weather is unsafe . Set airport weather to unsafe

//arrange

expected = 1;
airport = new Airport('Stormy Airport');
plane = new Plane('A1', true);

//act

airport.setWeatherSafeForAction(false);
airport.instructToLand(plane);
actual = airport.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 4 - Weather unsafe and planes not allowed to land , therefore airport array equals 0 ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Try take off plane when weather is safe. Land a plane first then try take off

//arrange

expected = 0;
airport = new Airport('Sunny Airport');
plane = new Plane('A1', true);

//act

airport.instructToLand(plane);
airport.instructToTakeOff2(plane);
actual = airport.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 5 - Weather safe and planes allowed to take off, therefore airport array equals 0 ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Try take off plane when weather is unsafe. Land a plane first then try take off after weather has been set to unsafe during the time plane is at airport

//arrange

expected = 1;
airport = new Airport('Weather Changing Airport');
plane = new Plane('A1', true);

//act

airport.instructToLand(plane);
airport.setWeatherSafeForAction(false);

airport.instructToTakeOff2(plane);

actual = airport.numberOfPlanesAtAirport();

//assert

result = assertEquals(actual, expected);
console.log(`Test 6 - Weather unsafe for take off, therefore airport array equals 1 as plane wont leave ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
plane = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log('----------------------------------');