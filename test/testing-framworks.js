function assertEquals(actual, expected) {
    const pass = actual === expected;
    const message = pass;

    console.log(message);
    return pass;
}

module.exports = {
    assertEquals,
};
