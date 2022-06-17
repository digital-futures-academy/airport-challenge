const test = {
    assertEquals: (val1, val2) => {
        if (val1 !== val2) {
            throw new Error;
        }
    },
    assertNotEquals: (val1, val2) => {
        if (val1 === val2) {
            throw new Error;
        }
    },
    assertTrue: val1 => {
        if (val1 !== true) {
            throw new Error;
        }
    },
    assertFalse: val1 => {
        if (val1 === true) {
            throw new Error;
        }
    },
    it: (str, testFunc) => {
        try {
            testFunc()
            console.log("\x1b[32m%s\x1b[0m", `\t${str}`);
        } catch (e) {
            console.log("\x1b[31m%s\x1b[0m", `\t${str}`);
            console.log(e.stack);
        }
    }
}

module.exports = test;