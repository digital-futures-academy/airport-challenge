const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework.js`);
const { Plane } = require(`../src/Plane.js`);


console.log('Change Airport Capacity Tests');
console.log('----------------------------------');
// Change capacity of airport from default to greater amount - 2 to 3.

//arrange

airport = new Airport();
expected = 3

//act

airport.setAirportMaxCapacity(3);
actual = airport.getAirportMaxCapacity;

//assert

result = assertEquals(actual, expected);
console.log(`Test 1 - Capacity of airport is now 3 ${result ? `PASS` : `FAIL`}`);

//cleanup

airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;


// Change a specific airports capacity (based on ID) from default to greater amount - 2 to 3.

//arrange

airport1 = new Airport('London');
airport2 = new Airport('France');
airport3 = new Airport('New York');

arrayOfAirports = [airport1, airport2, airport3];

expected = 3

//act

arrayOfAirports.forEach(airportArray)

function airportArray(airportInArray) {

    if (airportInArray.getAirportID === 'France') {
        airportInArray.setAirportMaxCapacity(3)
    }
}

actual = airport2.getAirportMaxCapacity;

//assert

result = assertEquals(actual, expected);
console.log(`Test 2 - Capacity of France airport is now 3 ${result ? `PASS` : `FAIL`}`);

//cleanup

airport1 = undefined;
airport2 = undefined;
airport3 = undefined;
arrayOfAirports = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Check airport capacity can not be changed to an amount less than the number of planes already grounded at said airport. Going to increase amount to 3, land 3 planes then try change value to 2

//arrange

airport = new Airport();
plane1 = new Plane('A1', true)
plane2 = new Plane('B2', true)
plane3 = new Plane('C3', true)

expected = 3;

//act
airport.setAirportMaxCapacity(3);

airport.instructToLand(plane1);
airport.instructToLand(plane2);
airport.instructToLand(plane3);

airport.setAirportMaxCapacity(2);

actual = airport.getListOfPlanesAtAirport.length;

//assert

result = assertEquals(actual, expected);

console.log(`Test 3 - Cant change capacity to less than number of planes already grounded, therefore capacity is still 3, ignoring call to make it 2 ? ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
plane3 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Check airport capacity can not be changed to an amount less than the number of planes already grounded at said airport. Try value of -1 as input

//arrange

airport = new Airport();
plane1 = new Plane('A1', true)
plane2 = new Plane('B2', true)

expected = 2;

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2)

airport.setAirportMaxCapacity(-1);

actual = airport.getAirportMaxCapacity;

//assert

result = assertEquals(actual, expected);

console.log(`Test 4 - Try -1 as input. Capacity has to be greater than zero so capacity does not change from default of 2? ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

// Check airport capacity can not be changed to not a 'number'. Try true as input

//arrange

airport = new Airport();
plane1 = new Plane('A1', true)
plane2 = new Plane('B2', true)

expected = 2;

//act

airport.instructToLand(plane1);
airport.instructToLand(plane2)

airport.setAirportMaxCapacity(true);

actual = airport.getAirportMaxCapacity;

//assert

result = assertEquals(actual, expected);

console.log(`Test 5 - Try 'true' as input. Capacity has to be a number value so capacity does not change from default of 2? ${result ? `PASS` : `FAIL`}`);

//cleanup

plane1 = undefined;
plane2 = undefined;
airport = undefined;
expected = undefined;
actual = undefined;
result = undefined;

console.log('----------------------------------');