const { Airport } = require(`../src/Airport.js`);
const { assertEquals } = require(`./testingFramework.js`);


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

console.log('----------------------------------');