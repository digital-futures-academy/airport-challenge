// Matcher functions
const assertEquals = (actualResult, expectedResult) => actualResult === expectedResult;
const assertTrue = actualResult => actualResult === true;
const assertFalse = actualResult => actualResult === false;
const assertLarger = (actualResult, expectedResult) => actualResult <= expectedResult;
function assertNull(actualResult) {
    return actualResult === null;
}

module.exports = {
    assertEquals,
    assertTrue,
    assertFalse,
    assertNull,
    assertLarger
};

// ==   same value
// === same value and same type
// usually favour ===
// 2 == `2`;   // true
// 2 === `2`;  // false