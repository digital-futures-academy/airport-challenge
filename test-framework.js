// test-framework.js
const test = {
    assertEquals(val1, val2) {
        if (val1 !== val2) throw new Error('Test Failed - Please check code');
    },

    it(str, testFunc) {
        try {
            testFunc();
            console.log('\n', str);
        }
        catch (err) {
            console.log('\n', str);
            console.log(err.message);
            console.log(err.stack);
        }
    },

    xit(str) {
        console.log(`\tTEST SKIPPED: ${str}`)
    }
}

module.exports = test;