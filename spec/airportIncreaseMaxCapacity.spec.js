const TestingFramework = require('./testing-framework');
const Airport = require('../src/Airport');
const Weather = require('../src/Weather');

const testingFramework = new TestingFramework;

let actual, expected, result, airport;

console.log('RUNNING TEST SUITE B: FOR INCREASE MAX CAPACITY AT AIRPORT');
console.log('💻 ~file: airportIncreaseMaxCapacity.spec');
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
console.log('');

console.log('========================================================');
console.log('Test 1B START - Can increase the max capacity to 10 when given an int of 5');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));
expected = 10;
let valueOfIncrease = 5;

// Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.getMaxAirportCapacity();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:25 ~ actual:', actual);
console.log('-----------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 1B RESULT - Max Capacity at the airport should now be 10: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');

console.log('========================================================');
console.log('Test 2B START - given a string that can be parsed into an int will still add as a number');
console.log('');

// Arrange
airport = new Airport(new Weather('clear'));
expected = 10;
valueOfIncrease = '5';

//Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.getMaxAirportCapacity();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:52 ~ actual:', actual);
console.log('-----------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 2B RESULT - Can increase the max capacity to 10 when given an int of 5: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');

console.log('========================================================');
console.log('Test 3B START - given a string "hello" does not add to maxCapacity');
console.log('');


// Arrange
airport = new Airport(new Weather('clear'));
expected = 5;
valueOfIncrease = 'hello';


//Act
airport.increaseAirportCapacity(valueOfIncrease);
actual = airport.getMaxAirportCapacity();
console.log('💻 ~ file: airportIncreaseMaxCapacity.spec.js:81 ~ actual:', actual);
console.log('-----------------------------------------------------------');
console.log('');

// Assert
result = testingFramework.assertEquals(actual, expected);

// Report
console.log(`Test 3B RESULT - given a string "hello" does not add to maxCapacity: ${result ? 'PASS' : 'FAIL'}`);

// clean Up
expected, actual, result, airport = undefined;
valueOfIncrease = 0;
console.log('');
console.log('================================================================');
console.log('');
console.log('');
