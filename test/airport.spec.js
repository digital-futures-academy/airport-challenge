const chalk = require("chalk");
const { assertStrictEqual } = require("./test-framework");

let input, result, actual, expected;

//Story 1 Test - Add an item to a basket
Test = () => {

    console.log(chalk.magenta(`Story 1 Test: Add an item to a basket successfully `))
    console.log(``);

    //Arrange


    //Act

    //Assert

    console.log(chalk.magenta(`Test 1 Result: ${result ? chalk.green(`PASS`) : chalk.red(`FAIL`)}`))
    console.log(chalk.magenta(`=====================================================================================================`))
    console.log(``);

    //Cleanup
    input = undefined;
    expected = undefined;

}



Test();