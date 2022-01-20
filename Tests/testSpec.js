const assertEquals = require('./testFramework.js');
const Airport = require('../src/airport.js');
const Plane = require('../src/airport.js');

const testThatAirportIsEmpty = () => {
    //arrange
    let expectedOutput = 0;

    //act
    let airportTwo = new Airport('KEF', 2);
    let actualOutput = airportTwo.terminal.length;


    //assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that the airport is empty: ${result}`);
}

const testThatPlaneCanLand = () => {
    //arrange
    let expectedOutput = 1

    //act
    let airportTwo = new Airport('KEF', 2);
    airportTwo.land();
    let actualOutput = airportTwo.terminal.length;

    //assert
    let result = assertEquals(actualOutput, expectedOutput);
    console.log(`testing that the airport has a plane: ${result}`);
}

const testThatCapacityCanBeOverwritten = () => {
    //arrange
    expectedOutput = 5;
    input = 5;

    //act
    let airportTwo = new Airport('KEF', 2);

    airportTwo.capacityEditor(input)

    let actualOutput = airportTwo.capacity;


    //assert
    let result = assertEquals(actualOutput, expectedOutput);
    console.log(`testing that the airport has new capacity: ${result}`);

}

const testThatAirportIsFull = () => {
    //arrange
    let expectedOutput = 'Error: Airport is full';

    //act
    let airportTwo = new Airport('KEF', 2);
    airportTwo.land('plane1');
    airportTwo.land('plane2');
    airportTwo.land('plane3');
    let actualOutput = airportTwo.land();

    //assert
    let result = assertEquals(actualOutput, expectedOutput);
    console.log(`testing that the airport is full: ${result}`);

}

const testThatPlanesCanTakeOff = () => {
    //arrange
    let expectedOutput = false;
    input = 'plane1'
    //act
    let airportTwo = new Airport('KEF', 2);
    airportTwo.land('plane1');
    airportTwo.land('plane2');
    airportTwo.takeOff('plane1')
    let actualOutput = airportTwo.terminal.includes(input);


    //assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that the plane has taken off: ${result}`);

}

const testThatPlanesAreTracked = () => {
    //arrange
    let expectedOutput = 'plane is already here' || 'plane is not here'
    input = 'plane2'

    //act
    let airportTwo = new Airport('KEF', 2);
    airportTwo.land('plane1');
    airportTwo.planeTracker
    let actualOutput = airportTwo.planeTracker(input);

    //assert
    let result = assertEquals(actualOutput, expectedOutput)
    console.log(`testing that planes are tracked: ${result}`);

    console.log(airportTwo.planeTracker(input));
}


tests = {
    testThatAirportIsEmpty,
    testThatPlaneCanLand,
    testThatCapacityCanBeOverwritten,
    testThatCapacityCanBeOverwritten,
    testThatAirportIsFull,
    testThatPlanesCanTakeOff,
    testThatPlanesAreTracked,
}



module.exports = tests