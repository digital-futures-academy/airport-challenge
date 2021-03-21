

class Test {
    constructor (outputval, expectedval){
        this.outputval = outputval;
        this.expectedval = expectedval;
    }

    testFunction() {
        if (this.outputval === this.expectedval) {
            return true;
        } else {
            return false;
        }
    }

}
module.exports = Test;
