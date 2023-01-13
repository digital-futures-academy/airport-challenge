const assertEquals = (expected, actual) => expected === actual;
const assertNotEquals = (expected, actual) => expected !== actual;
const assertTrue = actual => actual === true;
const assertFalse = actual => actual=== false;
const assertTypeOf = (expected, actual) => expected === typeof actual;
const assertThrows = actual => actual === new Error();
// const assertPropEqual = (expected, actual) => 

module.exports = {
    assertEquals,
	assertNotEquals,
    assertTrue,
	assertFalse,
	assertTypeOf,
	assertThrows	//, assertPropEqual,
}