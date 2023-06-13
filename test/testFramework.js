const checkSame = (actualOutput, expectedOutput) => actualOutput === expectedOutput;

const checkNaN = actualOutput => isNaN(actualOutput);

module.exports = {
    checkSame,
    checkNaN,
}
