const assertEquals = (val1, val2) => { return (val1 === val2); };

const printResult = (message = 'No Message', result) => {
    console.log('=============================================================================');
    console.log('Testing: ' + message + '\nThe result is : ' + result);
    console.log('=============================================================================\n');
};

//module.exports = assertEquals;


module.exports = {
    assertEquals,
    printResult
};
