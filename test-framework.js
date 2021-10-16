const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) { throw new Error; }
    },

    it(str, testFunction) {
        try {
            testFunction();
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
        } catch (err) {
            console.log("\x1b[31m%s\x1b[0m", `\t${str}`);
            console.error(err.message);
            console.log(err.stack);

        }
    }
}

module.exports = test;