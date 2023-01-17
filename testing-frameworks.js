// frameworks for testing
const assertEquals = (expectedOutput, actualOutput) => expectedOutput === actualOutput; // checks if actual is equal to expected

const assertMoreThan = (expectedOutput, actualOutput) => expectedOutput < actualOutput; // checks if actual is more than expected
    
module.exports = {
    assertEquals,
    assertMoreThan
}; // exporting to be used in other files