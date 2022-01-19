const assertEquals = (value1, value2) => value1 === value2;

const printBorder = () => console.log(`===================================================================`);

const printReport = (testDescription, result) => {
    printBorder();
    console.log(`${testDescription}: ${result}`);
}

export { assertEquals, printReport };