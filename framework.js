const assertEquals = (expectedOutput, actualOutput) =>
  expectedOutput === actualOutput;
const assertLessThan = (expectedOutput, actualOutput) =>
  expectedOutput < actualOutput;
const assertTrue = (actualOutput) => actualOutput === true;
const assertFalse = (actualOutput) => actualOutput === false;
const assertNotEquals = (expectedOutput, actualOutput) =>
  expectedOutput !== actualOutput;

// = is an assignment operator
// == is an equality operator (on value only)
// === is an equality operator on value AND type

// console.log(1 == "1");      // Output => true
// console.log(1 === "1");     // Output => false
// console.log(1 == true);     // Output => true
// console.log(1 === true);    // Output => false

// console.log(1 != "1");  // Output => false
// console.log(1 !== "1"); // Output => true

// !=
// !==
module.exports = {
  assertEquals,
  assertTrue,
  assertFalse,
};
