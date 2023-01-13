const { assertEquals } = require(`../testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let expected, actual, result, airport, plane;

// ******************** USER CASE 1 ****************************

//Test 1 - `planesAtAirport` length increases when `landPlane` is called with an instance of `Item`
console.log(`\n*** START TEST 1 - \`planesAtAirport\` length increases when \`landPlane\` is called with an instance of \`Item\` ***`)

//Arrange
airport = new Airport();
plane = new Plane();
expected = 1;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 1 - \`planesAtAirport\` length increases when \`landPlane\` is called with an instance of \`Item\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 1 ***`)

//Test 2 - `landPlane` should only add `Plane` instances to the `planesAtAirport`
console.log(`\n*** START TEST 2 - \`landPlane\` should only add \`Plane\` instances to the \`planesAtAirport\``)

//Arrange
airport = new Airport();
plane = `helicopter`;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 2 - \`landPlane\` should only add \`Plane\` instances to the \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 2 ***`)

//Test 3 - Edge Case - falsy values should not be added to `planesAtAirport`
console.log(`\n*** START TEST 3 - Edge Case - falsy values should not be added to \`planesAtAirport\``)

//Arrange
airport = new Airport();
plane = null;
expected = 0;

//Act
airport.landPlane(plane);
actual = airport.planesAtAirport.length;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 3 - Edge Case - falsy values should not be added to \`planesAtAirport\`: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 3 ***`)

// ******************** USER CASE 2 ****************************

//Test 4 - Set a default airport capacity to 10
console.log(`\n*** START TEST 4 - Set a default airport capacity to 10`)

//Arrange
airport = new Airport();
expected = 10;

//Act
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 4 - Set a default airport capacity to 10: ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 4 ***`)

//Test 5 - `increaseAirportCapacity` increases `airportCapacity` by the Integer passed as parameter (2)
console.log(`\n*** START TEST 5 - \`increaseAirportCapacity\` increases \`airportCapacity\` by the Integer passed as parameter (2)`)

//Arrange
airport = new Airport();
expected = 12;

//Act
airport.increaseAirportCapacity(2);
actual = airport.airportCapacity;

//Assert
result = assertEquals(expected, actual);
console.log(`\n TEST 5 - \`increaseAirportCapacity\` increases \`airportCapacity\` by the Integer passed as parameter (2): ${result ? `Passed` : `Failed`}`);

//Clean up
expected, actual, result = undefined;
airport, plane = null;

console.log(`\n *** END TEST 5 ***`)