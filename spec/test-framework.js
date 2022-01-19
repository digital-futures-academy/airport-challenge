const assertEquals = (value1, value2) => value1 === value2;

const assertArrayOfPrimitivesEquals = (array1, array2) => {
    if (array1.length !== array2.length) return false;
    array1.sort();
    array2.sort();
    return array1.every((element, index) => element === array2[index]);
}

const assertErrorEquals = (error1, error2) => {
    return error1 instanceof Error && error2 instanceof Error && error1.message === error2.message;
}


const printBorder = () => console.log(`===================================================================`);

const printReport = (testDescription, result) => {
    printBorder();
    console.log(`${testDescription}: ${result}`);
}

export { assertEquals, assertArrayOfPrimitivesEquals, assertErrorEquals, printReport };