assertEquals = (actual, expected) => actual === expected;
assertTrue = (actual) => actual === true;
assertFalse = (actual) => actual === false;

module.exports = {
    assertEquals,
    assertFalse,
    assertTrue
};