const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

// test that calling takeOffPlane will remove a plane and that the planesAtAirport array has decreased by 1.
console.log(chalk.cyan("User Story 4:- Test 1: test that planesAtAirport array has decreased by 1."));

let actual, expected, result, plane, plane2, plane3, airport;


// Arrange
plane = new Plane('plane1');
plane2 = new Plane('plane2');
airport = new Airport();
expected = 1;

// Act
airport.landPlane(plane);
airport.landPlane(plane2);
airport.takeOffPlane(plane.getId())
actual = airport.getPlanesLength();

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 4:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

////Cleanup
expected = undefined;
actual = undefined;
result = undefined;
plane = undefined;
plane2 = undefined;
airport = undefined;



// test that the plane that is removed from the planesAtAirport array is the item passed through takeOffPlane.
console.log(chalk.cyan("User Story 4:- Test 2: test that plane2 is removed from the planesAtAirport array using takeOffPlane object."));


// Arrange
plane = new Plane('plane1');
plane2 = new Plane('plane2');
plane3 = new Plane('plane3');
airport = new Airport();
expected = undefined;

// Act
airport.changeAirportCapacity(2);
airport.landPlane(plane);
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.takeOffPlane(plane2.getId());
actual = airport.getPlane(plane2.getId());



// Assert
result = assertEquals(expected, actual);

// Report
console.log(chalk.grey(`User Story 4:- Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);


