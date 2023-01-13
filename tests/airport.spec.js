const { assertEquals } = require(`../testing-framework`);
const Airport = require(`../src/Airport`);
const Plane = require(`../src/Plane`);

let expected, actual, result, airport, plane;

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

console.log(`\n *** END TEST 1 ***`)
//Clean up
expected, actual, result = undefined;
airport, plane = null;

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

console.log(`\n *** END TEST 2 ***`)
//Clean up
expected, actual, result = undefined;
airport, plane = null;