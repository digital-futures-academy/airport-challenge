const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport } = require("../src/Airport");
const { Plane } = require("../src/Plane");

let input, result, actual, expected;

//Story 6 Test - Prevent a plane from taking off if it is stormy weather
Test = () => {

    console.log(chalk.cyan(`User Story 6: Prevent a takeoff when its stormy`))
    console.log(chalk.cyan(`User Story 6 Test 1: Don't remove a plane from the airport if the weather is stormy`))
    console.log(chalk.cyan(`User Story 6 Pass Criteria: No planes should be removed to the array`))
    console.log(``);

    //Arrange
    expected = 1;
    plane = new Plane(`Plane`);
    airport = new Airport(2);
    airport.setWeather(true);
    airport.landPlane(plane);

    //Act
    airport.takeoffPlane(plane)
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 6 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test();
