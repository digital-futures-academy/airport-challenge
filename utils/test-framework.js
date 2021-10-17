
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
      console.log('\x1b[32m%s\x1b[0m', `	${str}\n`);
      testFunc();
    } catch (err) {
      console.log('\x1b[31m%s\x1b[0m', `	${str}\n`);
      console.error('\t' + err.message + '\n');
      //console.log(err.stack);
    }
  },

  xit(str) {
    console.log('\x1b[31m%s\x1b[0m', `	TEST SKIPPED: ${str}\n`);
  }

};

module.exports = test;
