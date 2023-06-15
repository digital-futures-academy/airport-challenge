class TestingFramework {

    assertEquals(actualOutput, expectedOutput) { return actualOutput === expectedOutput; }

    passCount(result) {
        if (result) {
            return 1;
        }
    }

}

module.exports = TestingFramework;
