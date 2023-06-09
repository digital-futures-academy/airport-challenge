const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");

let input, result, actual, expected;

//Story 1 Test - Add an item to a basket
Test = () => {

    console.log(chalk.cyan(`User Story 1: Land a plane at the airport`))
    console.log(chalk.cyan(`User Story 1 Test 1: Add a plane object to an array within the airport.`))
    console.log(chalk.cyan(`User Story 1 Pass Criteria: The plane array should have a length of 1`))
    console.log(``);

    //Arrange


    //Act

    //Assert

    console.log(chalk.cyan(`Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.cyan(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}



Test();