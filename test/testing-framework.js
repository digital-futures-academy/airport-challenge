const assertEquals = (actualOutput, expectedOutput) => actualOutput === expectedOutput; // Needs to return true or false based on expected and actual outputs

const assertNaN = actualOutput => isNaN(actualOutput);

module.exports = {
    assertEquals,
    assertNaN,
}
