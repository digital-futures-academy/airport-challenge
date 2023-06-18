const Plane = require(`../src/Plane`);
const Airport = require(`../src/Airport`);
const chalk = require("chalk"); // got the idea for the chalk stuff from Michael Keenan.
const { assertEquals } = require(`./testing-framework`);

let actual, expected, result, plane, airport;


console.log(chalk.blueBright(`Airport tests`));

// Adding 1 to the Airport increases the planes in the airport by 1
console.log(chalk.cyan('User Story 1:- Test 1: Adding 1 plane to the Airport using landPlane() and expect array (planesAtAirport) has increased in length to 1'));

// Arrange
plane = new Plane();
airport = new Airport();
expected = 1;

// Act
airport.landPlane(plane);
actual = airport.getPlanesLength()

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 1:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;





// Test that an actual plane with an id of 'Fj101' is added to the array
console.log(chalk.cyan('User Story 1:- Test 2: Test that an actual plane with an id of "FJ101" is added to the array'));


// Arrange
plane = new Plane('FJ101');
plane1 = new Plane('plane1');
plane2 = new Plane('plane2');
airport = new Airport();
expected = 'FJ101';

// Act
airport.landPlane(plane);
airport.landPlane(plane1);
airport.landPlane(plane2);
const fetchPlane = airport.getPlane('FJ101');

if (fetchPlane) {
  actual = fetchPlane.getId();
} else {
  actual = undefined;
}

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 1:- Test 2  Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

console.log(chalk.red(`=====================================================================================================`))
console.log(``);

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;




