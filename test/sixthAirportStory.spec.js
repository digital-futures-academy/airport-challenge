const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

// test that landPlane returns false when trying to add a plane that's already in the planesAtAirport array using the "landPlane" function. .
console.log(chalk.cyan("User Story 6:- Test 1: test that landPlane returns false as 'plane3' already exists in the planesAtAirport array."));

let actual, expected, result, plane, plane2, plane3, plane4, airport;


// Arrange
plane = new Plane('plane1');
plane2 = new Plane('plane2');
plane3 = new Plane('plane3');
plane4 = new Plane('plane3');
airport = new Airport();
expected = false;

// Act
airport.changeAirportCapacity(5);
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
actual = airport.landPlane(plane4);


// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 6:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

////Cleanup
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;
plane2 = undefined;
airport = undefined;