const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport, Plane } = require("../src/airport");

let input, result, actual, expected;

//Story 7 Test - Prevent a plane landing in stormy weather
Test = () => {

    console.log(chalk.cyan(`User Story 7: Prevent a landing when its stormy`))
    console.log(chalk.cyan(`User Story 7 Test 1: Don't add a plane to the airport if the weather is stormy`))
    console.log(chalk.cyan(`User Story 7 Pass Criteria: No planes should be added to the array`))
    console.log(``);

    //Arrange
    expected = 0;
    plane = new Plane(`Plane`);
    airport = new Airport(2);
    airport.setWeather(true);


    //Act
    airport.landPlane(plane);
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 7 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test();
