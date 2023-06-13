const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport } = require("../src/Airport");
const { Plane } = require("../src/Plane");

let input, result, actual, expected;

//Story 5 Test - Prevent a plane from taking off if it hasn't landed and vice verse
Test = () => {

    console.log(chalk.cyan(`User Story 5: Prevent an unlanded plane from taking off`))
    console.log(chalk.cyan(`User Story 5 Test 1: Prevent an unlanded plane from taking off`))
    console.log(chalk.cyan(`User Story 5 Pass Criteria: The planes at the airport array shouldn't change`))
    console.log(``);
    //Arrange
    expected = 1;
    plane = new Plane(`LandedPlane`);
    plane2 = new Plane(`UnlandedPlane`);
    input = plane2;
    airport = new Airport(2);
    airport.landPlane(plane);
    airport.landPlane(plane2)

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

Test2 = () => {

    console.log(chalk.cyan(`User Story 5: Prevent a landed plane from landing again`))
    console.log(chalk.cyan(`User Story 5 Test 2: Prevent a landed plane from landing again`))
    console.log(chalk.cyan(`User Story 5 Pass Criteria: The planes at the airport array shouldn't change`))
    console.log(``);

    //Arrange
    expected = 1;
    plane = new Plane(`LandedPlane`);
    airport = new Airport(2);
    airport.landPlane(plane);

    //Act
    airport.landPlane(plane);
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 5 Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test();
Test2();
