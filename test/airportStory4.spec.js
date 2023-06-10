const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport, Plane } = require("../src/airport");

let input, result, actual, expected;

//Story 3 Test - Takeoff a plane and confirm it has left
Test = () => {

    console.log(chalk.cyan(`User Story 4: Takeoff a plane and confirm it has left`))
    console.log(chalk.cyan(`User Story 4 Test 1: Takeoff a plane`))
    console.log(chalk.cyan(`User Story 4 Pass Criteria: The landed planes array should decrease to 1`))
    console.log(``);

    //Arrange
    expected = 1;
    input = 1;
    plane = new Plane(`Plane`);
    airport = new Airport(2);
    for (let i = 0; i < 2; i++) {
        airport.landPlane(plane);
    }

    //Act
    airport.takeoffPlane(input);
    actual = airport.planesAtAirport.length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 4 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.cyan(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}


Test();
