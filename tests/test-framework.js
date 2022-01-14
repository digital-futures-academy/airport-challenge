const identify = (test) => console.log(`${test}\n${'-'.repeat(test.length)}`);

const assertEquals = (expected, actual) => expected === actual;

const assertThrows = (fn) => {
    try {
        fn();
        return false;
    } catch {
        return true;
    }
};

const report = (value) => console.log(`${value.toString().toUpperCase()}\n`);

module.exports = { identify, assertEquals, assertThrows, report };
