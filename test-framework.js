const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) throw new Error(`ActualOutput: ${val1} and ExpectedOutput: ${val2}, were not equal.`);
    },

    it(text, testFunc) {
        try {
            testFunc();
            console.log("\x1b[32m%s\x1b[0m", `\tPassed: ${text}`);
        }
        catch (error) {
            console.log("\x1b[31m%s\x1b[0m", `\tFailed: ${text}`);
            console.error(error.message);
        }
    }
}

module.exports = test;