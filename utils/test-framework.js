
const test = {
  assertEquals(val1, val2) {
    if (val1 !== val2) {
      throw new Error('The test failed!');
    } else if (val1 === val2) {
      return true;
    }
  },

  it(str, testFunc) {
    try {
      console.log(str);
      testFunc();
    } catch (err) {
      console.log(str);
      console.error(err.message);
      console.log(err.stack);
    }
  },

  xit(str) {
    console.log('TEST SKIPPED: ${str}');
  }

};

module.exports = test;
