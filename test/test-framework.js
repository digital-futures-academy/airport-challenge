assertStrictArrayEqual = (expectedOutcome, actualOutcome) => JSON.stringify(expectedOutcome) === JSON.stringify(actualOutcome);
assertStrictEqual = (expectedOutcome, actualOutcome) => expectedOutcome === actualOutcome;
assertIsUndefined = (value) => value === undefined;

module.exports = {
    assertStrictEqual,
    assertStrictArrayEqual,
    assertIsUndefined
}