const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

let actual, expected, result, plane, airport;

// Calling changeAirportCapacity increases airport capacity to 5
console.log(chalk.cyan('User Story 2:- Test 1: Calling changeAirportCapacity increases airport capacity to 5'));
// Arrange
plane = new Plane('plane1');
airport = new Airport();
expected = 5;

// Act
actual = airport.changeAirportCapacity(3)

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 2:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;
airport = undefined;




// Calling changeAirportCapacity with String value 3 increases airport capacity to 5
console.log(chalk.cyan('User Story 2:- Test 2: Passing in a String "3" still increases airport capacity to 5 '));
// Arrange
plane = new Plane('plane1');
airport = new Airport();
expected = 5;

// Act
actual = airport.changeAirportCapacity('3');

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 2:- Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;
