const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);


// test that planesAtAirport is not more than 2 when landPlane is called.
console.log(chalk.cyan("User Story 3:- Test 1: Calling landPlane 3 times doesn't allow us to add more than the first 2 plane objects as maximum airport capacity (2) has been reached."));

let actual, expected, result, plane, plane2, plane3, airport;


// Arrange
plane = new Plane('plane1');
plane2 = new Plane('plane2');
plane3 = new Plane('plane3');
airport = new Airport();
expected = 2;

// Act
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
actual = airport.getPlanesLength();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 3:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

