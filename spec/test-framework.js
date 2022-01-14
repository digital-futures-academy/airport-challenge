const assertEquals = (actual, expected) => actual === expected;

//Type checks
const assertString = (varToCheck) => typeof varToCheck === "string";
const assertNumber = (varToCheck) => typeof varToCheck === "number";
const assertBool = (varToCheck) => typeof varToCheck === "boolean";
const assertArray = (varToCheck) => Array.isArray(varToCheck);

const assertStatements = {
    assertEquals,
    assertString,
    assertNumber,
    assertBool,
    assertArray
}

module.exports = assertStatements;