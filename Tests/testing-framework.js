const testEquals = (expectedOutput, expectedInput) => expectedInput === expectedOutput;
const testIncrease = (expectedOutput, expectedInput) => expectedInput > expectedOutput;
const testEqualsGreater = (expectedOutput, expectedInput) => expectedInput >= expectedOutput;
const testDecrease = (expectedOutput, expectedInput) => expectedInput < expectedOutput;

module.exports = {
    testEquals,
    testIncrease,
    testEqualsGreater,
    testDecrease
};