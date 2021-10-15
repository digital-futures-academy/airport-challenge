const assertEquals = (val1, val2) => { return (val1 === val2); };

const printResult = (message = "No message", result) => {
    console.log("=============================");
    console.log(`Testing: ${message}`);
    console.log(`Result: ${result}`);
    console.log("=============================");
};

//module.exports = assertEquals;


module.exports = {
    assertEquals,
    printResult
};
