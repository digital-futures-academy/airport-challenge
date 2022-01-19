const test = {
    assertEquals(val1, val2) {
        return val1 === val2;
    },

    it(str, testFunc) {
        const result = testFunc();
        console.log(`${str}: `, result);
    },

    expect(actual) {
        this.actual = actual;
        return this;
    },

    toEqual(expected) {
        return this.assertEquals(this.actual, expected);
    }

};


module.exports = test;