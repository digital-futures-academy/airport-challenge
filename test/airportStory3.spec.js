const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport, Plane } = require("../src/airport");

let input, result, actual, expected;

//Story 3 Test - Prevent landing at a full airport
Test = () => {

    console.log(chalk.cyan(`User Story 3: Prevent landing at a full airport`))
    console.log(chalk.cyan(`User Story 3 Test 1: Prevent a plane being added to the airport array if it is at capacity`))
    console.log(chalk.cyan(`User Story 3 Pass Criteria: The landed planes array should remain at 2`))
    console.log(``);

    //Arrange
    expected = 2;
    airport = new Airport(2);
    for (let i = 0; i < 2; i++) {
        airport.landPlane(new Plane(`Plane` + i));
    }

    //Act
    airport.landPlane((new Plane(`Plane2`)));
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 3 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}


Test();
