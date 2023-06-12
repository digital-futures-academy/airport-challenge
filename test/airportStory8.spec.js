const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport } = require("../src/Airport");
const { Plane } = require("../src/Plane");

let input, result, actual, expected;

//Story 8 Test - Confirm that each plane has an airport 
Test = () => {

    console.log(chalk.cyan(`User Story 8: Confirm that each plane has an airport `))
    console.log(chalk.cyan(`User Story 8 Test 1: Assign Landing planes an airport`))
    console.log(chalk.cyan(`User Story 8 Pass Criteria: The landed plane should have an airport`))
    console.log(``);

    //Arrange
    plane = new Plane(`Plane`);
    airport = new Airport(2);
    expected = airport;


    //Act
    airport.landPlane(plane);
    actual = plane.getAirport();

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 8 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test();
