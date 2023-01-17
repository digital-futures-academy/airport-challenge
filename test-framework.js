const assertEquals = (expected, actual) => expected === actual;
const assertDoesNotEqual = (expected, actual) => expected !== actual;
const assertLessThan = (expected, actual) => actual < expected;
const assertMoreThan = (expected, actual) => actual > expected;
const assertTrue = (actual) => actual === true;
const assertFalse = (actual) => actual === false;

//to use assertEquals in other files when 'required'
module.exports = {
    assertEquals
}