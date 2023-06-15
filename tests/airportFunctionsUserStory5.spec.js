//USER STORY 5 TESTS

// As an air traffic controller
// To avoid confusion
// I want to prevent asking the airport to let planes take-off which are not at the airport, or land a plane that's already landed

const { assertEquals } = require('./test-framework');
const Airport = require('../src/Airport');
const Plane = require('../src/Plane');

let actualOutput, expectedOutput, result, input;
const airport1 = new Airport;
const plane1 = new Plane('test flight SE-2306-a');

