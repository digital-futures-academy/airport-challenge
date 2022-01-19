//run this to execute test

const { testAddPlane, testChangeCapacity, testUnableToAddIfFull, testCountPlane, testTakeOffWhenHere, testCannotTakeOffWhenNotHere, testCanTakeOffIfNotStormy, testCannotTakeOffIfStormy } = require("./test-specs")

testAddPlane();
testChangeCapacity();
testUnableToAddIfFull();
testCountPlane();
testTakeOffWhenHere();
testCannotTakeOffWhenNotHere();
testCanTakeOffIfNotStormy();
testCannotTakeOffIfStormy();