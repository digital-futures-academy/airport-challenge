const checkSame = (actualOutput, expectedOutput) => actualOutput === expectedOutput;

const checkNaN = actualOutput => isNaN(actualOutput);

const checkDifferent = (actualOutput, expectedOutput) => actualOutput !== expectedOutput;

module.exports = {
    checkSame,
    checkNaN,
    checkDifferent,
}
