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
airport = new Airport(plane);
expected = 1;

// Act
airport.landPlane();
actual = airport.getPlanesLength()

// Assert
result = assertEquals(actual, expected);

// Report
console.log(chalk.grey(`User Story 1:- Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`));

//Cleanup
expected = undefined;
actual = undefined;
result = undefined;