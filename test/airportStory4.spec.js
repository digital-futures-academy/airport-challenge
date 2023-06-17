const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport } = require("../src/Airport");
const { Plane } = require("../src/Plane");

let input, result, actual, expected;

//Story 4 Test - Takeoff a plane and confirm it has left
Test = () => {

    console.log(chalk.cyan(`User Story 4: Takeoff a plane and confirm it has left`))
    console.log(chalk.cyan(`User Story 4 Test 1: Plane passes the takeoff check`))
    console.log(chalk.cyan(`User Story 4 Pass Criteria: canTakeoff() should return true`))
    console.log(``);

    //Arrange
    expected = true;

    airport = new Airport(2);
    airport.landPlane(new Plane(`Plane`));
    input = airport.getPlanesAtAirport()[0];

    //Act
    actual = airport.canTakeoff(input);

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 4 Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test2 = () => {

    console.log(chalk.cyan(`User Story 4: Takeoff a plane and confirm it has left`))
    console.log(chalk.cyan(`User Story 4 Test 2: Takeoff a plane`))
    console.log(chalk.cyan(`User Story 4 Pass Criteria: The landed planes array should decrease to 1`))
    console.log(``);

    //Arrange
    expected = 1;
    airport = new Airport(2);
    for (let i = 0; i < 2; i++) {
        airport.landPlane(new Plane(`Plane` + i));
    }
    input = airport.getPlanesAtAirport()[0];

    //Act
    airport.takeoffPlane(input);
    actual = airport.getPlanesAtAirport().length;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 4 Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

Test3 = () => {

    console.log(chalk.cyan(`User Story 4: Takeoff a plane and confirm it has left`))
    console.log(chalk.cyan(`User Story 4 Test 3: Takeoff a plane and confirm the plane that left`))
    console.log(chalk.cyan(`User Story 4 Pass Criteria: The plane with the correct ID should be removed`))
    console.log(``);

    //Arrange
    expected = `Airtrain`;
    plane1 = new Plane(`BrianAir`);
    plane2 = new Plane(`Airtrain`);
    input = plane1;
    airport = new Airport(2);
    airport.landPlane(plane1);
    airport.landPlane(plane2);


    //Act
    airport.takeoffPlane(input);
    actual = airport.getPlanesAtAirport()[0].getID();

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`User Story 4 Test 3 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.red(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}


Test();
Test2();
Test3();
