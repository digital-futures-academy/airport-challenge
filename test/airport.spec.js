const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");
const { Airport, Plane } = require("../src/airport");

let input, result, actual, expected;

//Story 1 Test - Land a plane at an airport
Test = () => {

    console.log(chalk.cyan(`User Story 1: Land a plane at the airport`))
    console.log(chalk.cyan(`User Story 1 Test 1: Add a plane object to an array within the airport.`))
    console.log(chalk.cyan(`User Story 1 Pass Criteria: The plane array should have a length of 1`))
    console.log(``);

    //Arrange
    expected = 1;
    input = new Plane();
    airport = new Airport();

    //Act
    airport.landPlane(input);
    actual = airport.planesAtAirport.length;


    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.cyan(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}

//Story 1 Test 2 - Check the added item is a plane
Test = () => {

    console.log(chalk.cyan(`User Story 1: Land a plane at the airport`))
    console.log(chalk.cyan(`User Story 1 Test 2: Add a plane object to an array within the airport and check that it is a Plane.`))
    console.log(chalk.cyan(`User Story 1 Pass Criteria: The object in the array should have an ID of Plane1`))
    console.log(``);

    //Arrange
    expected = `Plane1`;
    input = new Plane(`Plane1`);
    airport = new Airport();
    airport.landPlane(input);

    //Act
    actual = airport.planesAtAirport[0].getID;

    //Assert
    result = assertStrictEqual(expected, actual);

    console.log(chalk.cyan(`Test 2 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.cyan(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}



Test();