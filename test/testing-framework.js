const assertEquals = (actualOutput, expectedOutput) => actualOutput === expectedOutput;

const assertNaN = actualOutput => isNaN(actualOutput);

const compareIds = (actualOutput, expectedOutput) => {
    for (let index = 0; index < expectedOutput.length; index++) {
        if (actualOutput[index].id !== expectedOutput[index].id) {
            return false;
        }
    }
    return true;
}

const assertEqualsListOfPlanes = (actualOutput, expectedOutput) => {
    if (actualOutput.length !== expectedOutput.length) {
        return false;
    }
    return compareIds(actualOutput, expectedOutput);
}


module.exports = {
    assertEquals,
    assertNaN,
    assertEqualsListOfPlanes,
}
