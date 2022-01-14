//write tests here

const { assertEquals } = require("./test-framework")
const { Airport } = require("./airport-test")

//write the first test

const testAddPlane = () => {
    // arrange
    const expected = [];

    // act
    const airport = new Airport();
    const actual = console.log(airport);

    // assert
    const result = assertEquals(actual, expected);
    // report
    console.log(`The expected result should be ${expected}: ${result}.`);
}

module.exports = { testAddPlane }