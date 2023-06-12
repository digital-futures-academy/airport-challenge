const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport, Plane } = require("../src/airport");

let input, result, actual, expected;

//Story 4 Test - Takeoff a plane and confirm it has left
Test = () => {

    console.log(chalk.cyan(`User Story 4: Takeoff a plane and confirm it has left`))
    console.log(chalk.cyan(`User Story 4 Test 1: Takeoff a plane`))
    console.log(chalk.cyan(`User Story 4 Pass Criteria: The landed planes array should decrease to 1`))
    console.log(``);

    //Arrange
    expected = 1;
    input = `Plane`;
    plane = new Plane(`Plane`);
    airport = new Airport(2);
    for (let i = 0; i < 2; i++) {
        airport.landPlane(plane);
    }

    //Act
    airport.takeoffPlane(input);
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 4 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.cyan(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test2 = () => {

    console.log(chalk.cyan(`User Story 4: Takeoff a plane and confirm it has left`))
    console.log(chalk.cyan(`User Story 4 Test 1: Takeoff a plane and confirm the plane that left`))
    console.log(chalk.cyan(`User Story 4 Pass Criteria: The plane with the correct ID should be removed`))
    console.log(``);

    //Arrange
    expected = `Airtrain`;
    input = `BrianAir`;
    plane1 = new Plane(`BrianAir`);
    plane2 = new Plane(`Airtrain`);
    airport = new Airport(2);
    airport.landPlane(plane1);
    airport.landPlane(plane2);


    //Act
    airport.takeoffPlane(input);
    actual = airport.getPlanesAtAirport()[0].getID();

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 4 Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.cyan(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}


Test();
Test2();
