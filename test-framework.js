const assertEquals = (val1, val2) => { return (val1 === val2); };

const printResult = (message = 'No Message', result) => {
    let resultMsg, color;
    const resetCol = '\x1b[0m';
    result ? color = '\x1b[32m' : color = '\x1b[31m';
    result ? resultMsg = 'PASSED' : resultMsg = 'FAILED';

    console.log(color + '=============================================================================');
    console.log(resetCol + 'Testing: ' + message + '\nThe result is : ' + color + resultMsg);
    console.log(color + '=============================================================================\n\n' + resetCol);
};

//module.exports = assertEquals;


module.exports = {
    assertEquals,
    printResult
};
