const assertEquals = (expectedOutput, actualOutput) =>
  expectedOutput === actualOutput;
const assertLessThan = (expectedOutput, actualOutput) =>
  expectedOutput < actualOutput;
const assertTrue = (actualOutput) => actualOutput === true;
const assertFalse = (actualOutput) => actualOutput === false;
const assertNotEquals = (expectedOutput, actualOutput) =>
  expectedOutput !== actualOutput;
module.exports = {
  assertEquals,
  assertTrue,
  assertLessThan,
  assertFalse,
  assertNotEquals,
};
