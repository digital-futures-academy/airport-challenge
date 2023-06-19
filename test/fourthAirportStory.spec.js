const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

// test that calling takeOffPlane will remove a plane and that the planesAtAirport array has decreased by 1.
console.log(chalk.cyan("User Story 4:- Test 1: test that planesAtAirport array has decreased by 1."));

let actual, expected, result, plane, plane2, airport;


// Arrange
plane = new Plane('plane1');
plane2 = new Plane('plane2');
airport = new Airport();
expected = 1;

// Act
airport.landPlane(plane);
airport.landPlane(plane2);
airport.takeOffPlane()
actual = airport.getPlanesLength();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 4:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);
