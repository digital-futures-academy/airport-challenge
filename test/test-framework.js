const assertEquals = (val1, val2) => val1 === val2;
const assertTrue = val1 => val1 === true;
const assertFalse = val1 => val1 === false;
const assertEither = (val1, val2, val3) => (val1 === val2 || val1 === val3);

module.exports = {
    assertEquals,
    assertTrue,
    assertFalse,
    assertEither
}

