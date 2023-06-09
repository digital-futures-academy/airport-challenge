assertStrictArrayEqual = (expectedOutcome, actualOutcome) => JSON.stringify(expectedOutcome) === JSON.stringify(actualOutcome);
assertStrictEqual = (expectedOutcome, actualOutcome) => expectedOutcome === actualOutcome;

module.exports = {
    assertStrictEqual,
    assertStrictArrayEqual
}