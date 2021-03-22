let testCases = 0, pass = 0, fail = 0;

const assertEquals = (val1, val2) => {
    if(val1 === val2) {
        print(true)
    } else {
        print(false)
    }
}

const print = (result) => {
    console.log(`testCase ${testCases}: ${result}`)
    testCases++
}

const passes = (recieved, expected) => {
if(recieved === expected) {
    pass++
} else {
    fail++
}
}

// const result = () => console.log(`Number of fails: ${fail}. Number of passes: ${pass}.`)

module.exports = assertEquals;
// module.exports = result;