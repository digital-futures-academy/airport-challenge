/* Something to ask about in the sessions - if I tried to make both tests on a single page, everything would try to use test2; even after changing the assertEquals to a different assert. Had an issue with this during bobs bagels as well
 */

const test2 = {
    assertEquals(val1, val2) {
        if (val1 !== val2) throw new Error('Weather is stormy')
    },

    it(str, testFunc) {
        try {
            testFunc();
            console.log('\n', str);
        }
        catch (err) {
            console.log("\x1b[41m", err.message, "\x1b[40m");
            console.log(err.stack);
        }
    },

    xit(str) {
        console.log(`\n Test skipped ${str}`);
    }
}


module.exports = test2;