const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport, Plane } = require("../src/airport");

let input, result, actual, expected;

//Story 5 Test - Prevent a plane from taking off if it hasn't landed and vice verse
Test = () => {

    console.log(chalk.cyan(`User Story 5: Prevent an unlanded plane from taking off`))
    console.log(chalk.cyan(`User Story 5 Test 1: Prevent an unlanded plane from taking off`))
    console.log(chalk.cyan(`User Story 5 Pass Criteria: The planes at the airport array shouldn't change`))
    console.log(``);

    //Arrange
    expected = 1;
    input = `Plane`;
    plane = new Plane(`Plane`);
    airport = new Airport(2);
    airport.landPlane(plane);

    //Act
    airport.takeoffPlane(input);
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 5 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test();
