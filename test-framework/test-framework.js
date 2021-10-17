const test = {
    assertEquals(message, expectedOutput, actualOutput) {
        if (expectedOutput !== actualOutput) throw new Error(message);
    },

    it(str, testFunc) {
        try {
            testFunc();
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
        }
        catch (err) {
            console.log("\x1b[31m%s\x1b[0m", `\t${str}`);
            console.error(err.message);
            console.log(err.stack);
        }
    }
}


module.exports = test;
