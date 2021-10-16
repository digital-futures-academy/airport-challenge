const Test = {
    
    assertEquals (expectedValue, actualValue)  {
        if (expectedValue !== actualValue) {
            throw new Error(`ExpectedValue = ${expectedValue}`);
        } else {
            return expectedValue === actualValue;
        }
    },
    
    it(string, testFunction) {
        try {
            testFunction();
        } catch (err) {
            console.log(err.message);
            console.log(err.stack);
        }
    }

}

module.exports = Test;