const assertEquals = (actualOutput, expectedOutput) => actualOutput === expectedOutput;
const assertTrue = (actualOutput) => actualOutput === true;
const assertFalse = (actualOutput) => actualOutput === false;
const assertNotEquals = (expectedOutput, actualOutput) => expectedOutput !== actualOutput;


module.exports = {
    assertEquals,
    assertTrue
}