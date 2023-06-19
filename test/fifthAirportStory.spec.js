const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

// test that trying to take off a plane which does not exist in the planesAtAirport array returns false .
console.log(chalk.cyan("User Story 5:- Test 1: test that takeOffPlane returns false as 'plane3' doesn't exist in the planesAtAirport array."));

let actual, expected, result, plane, plane2, plane3, airport;


// Arrange
plane = new Plane('plane1');
plane2 = new Plane('plane2');
plane3 = new Plane('plane3');
airport = new Airport();
expected = false;

// Act
airport.landPlane(plane);
airport.landPlane(plane2);
actual = airport.takeOffPlane(plane3.getId());

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 5:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

////Cleanup
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;
plane2 = undefined;
airport = undefined;

