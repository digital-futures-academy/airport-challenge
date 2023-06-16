const Airport = require('../src/airport');
const { assertEquals } = require("./testing-framework.js");

let actual, result, expected, airport


console.log(`=================================================`);
console.log(`User Story 2 - Test 1`);
console.log(`=================================================`);
console.log(``);

console.log(`When an airport is created, it should have the default capacity of 5`);

//Arrange
airport = new Airport;
expected = 5;

//Act
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 2.1: airport capacity of 5: ${result}`);
console.log(`Test 2.1: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

// Clean Up
result = undefined;
actual = undefined;


console.log(`=================================================`);
console.log(`User Story 2 - Test 2`);
console.log(`=================================================`);
console.log(``);

console.log(`modifyAirportCapacity changes airport capacity to 10`)

//Arrange
expected = 10;

//Act
airport.modifyAirportCapacity(10);
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 2.2: airport capacity is 10: ${result}`);
console.log(`Test 2.2: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);

//Clean Up
result = undefined;
actual = undefined;
airport.airportCapacity = 5


console.log(`=================================================`);
console.log(`User Story 2 - Test 3`);
console.log(`=================================================`);
console.log(``);

console.log(`modifyAirportCapacity can only change airport capacity to an integer`)

//Arrange
expected = 5

//Act
airport.modifyAirportCapacity(7.6);
actual = airport.airportCapacity;

//Assert
result = assertEquals(actual, expected);

//Report
console.log(``);
console.log(`Test 2.3: airport capacity is 5: ${result}`);
console.log(`Test 2.2: ${result ? `PASS` : `FAIL`}`);
console.log(``);
console.log(``);