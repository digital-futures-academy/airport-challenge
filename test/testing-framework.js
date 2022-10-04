const assertEquals = (actualResult, expectedResult) =>
  actualResult === expectedResult;
const assertTrue = (actualResult) => actualResult === true;
const assertFalse = (actualResult) => actualResult === false;

module.exports = {
  assertEquals,
  assertTrue,
  assertFalse,
};
