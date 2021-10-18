const assertEquals = (val1, val2) => { return (val1 === val2); };

const printResult = (message = 'No Message', result) => {
    console.log('=============================================================================');
    let color = null;
    result ? color = '\x1b[32m' : color = '\x1b[31m';
    console.log('Testing: ' + message + '\nThe result is : ' + color + result);
    console.log('\x1b[0m', '=============================================================================\n\n');
};

//module.exports = assertEquals;


module.exports = {
    assertEquals,
    printResult
};
