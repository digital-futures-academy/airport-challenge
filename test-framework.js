class Test {
    constructor() {}
    it(string, input1, input2) {
        if (JSON.stringify(input1) !== JSON.stringify(input2)) {
            throw new Error
        } else {
            return JSON.stringify(input1) !== JSON.stringify(input2) && string
        }
    }
}


module.exports = Test