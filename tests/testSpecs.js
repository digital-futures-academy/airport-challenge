const { Airport } = require('../src/airport');
const { Plane } = require('../src/plane');
const { assertEquals } = require('./testFramework');

//PART 1 

// PLANE INSTANCE TESTS 

const checkAnyPlaneNameInputNotStringIsUndefined = () => {
    //Identifier
    console.log(`\ncheckAnyPlaneNameInputNotStringIsUndefined\n================`)
    //Arrange
    const testPlane = new Plane(0);
    const expected = undefined;
    //Act
    const actual = testPlane.getPlaneName();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkAnyPlaneNameInputNotStringIsUndefined test result: ${result}\n`)
}

const checkNewPlaneLocationIsInSkyInitially = () => {
    //Identifier
    console.log(`\ncheckNewPlaneLocationIsInSkyInitially\n================`)
    //Arrange
    const testPlane = new Plane('TEST')
    const expected = 'sky';
    //Act
    const actual = testPlane.getLocation();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkNewPlaneLocationIsInSkyInitially test result: ${result}\n`)
}

const checkCanGetAPlaneName = () => {
    //Identifier
    console.log(`\ncheckNewPlaneLocationIsInSkyInitially\n================`)
    //Arrange
    const testPlane = new Plane('TEST')
    const expected = 'TEST';
    //Act
    const actual = testPlane.getPlaneName();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkNewPlaneLocationIsInSkyInitially test result: ${result}\n`)
}

// AIRPORT INSTANCE TESTS 

const checkNewAirportHasEmptyArrayOfLandedPlanes = () => {
    //Identifier
    console.log(`\ncheckNewAirportHasEmptyArrayOfLandedPlanes\n================`)
    //Arrange
    const testAirport = new Airport('JFK')
    const expected = 0
    //Act
    const landedPlanes = testAirport.getLandedPlanesList()
    const actual = landedPlanes.length;
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkNewAirportHasEmptyArrayOfLandedPlanes test result: ${result}\n`)
}

const checkAnyAirportNameInputNotStringIsUndefined = () => {
    //Identifier
    console.log(`\ncheckAnyAirportNameInputNotStringIsUndefined\n================`)
    //Arrange
    const testAirport = new Airport(true);
    const expected = undefined;
    //Act
    const actual = testAirport.getAirportName();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkAnyAirportNameInputNotStringIsUndefined test result: ${result}\n`)
}

const checkAirportNameHasToBeThreeLetterInput = () => {
    //Identifier
    console.log(`\ncheckAirportNameHasToBeThreeLetterInput\n================`)
    //Arrange
    const testAirport = new Airport('FOUR');
    const expected = undefined;
    //Act
    const actual = testAirport.getAirportName();
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkAirportNameHasToBeThreeLetterInput test result: ${result}\n`)
}

const checkCanGetAirportName = () => {
    //Identifier
    console.log(`\ncheckCanGetAirportName\n================`)
    //Arrange
    const testAirport = new Airport('JFK')
    const expected = 'JFK';
    //Act
    const actual = testAirport.getAirportName();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkCanGetAirportName test result: ${result}\n`)
}

// AIRPORT LANDING PLANE TEST 

const checkPlaneInstructedToLandIsAtAirport = () => {
    //Identify
    console.log(`\ncheckPlaneInstructedToLandIsAtAirport\n================`)
    //Arrange
    const testPlane = new Plane('TestPlane');
    const testAirport = new Airport('TST');
    const expected = 'TestPlane'
    //Act
    testAirport.landPlane(testPlane);
    const landedPlaneList = testAirport.getLandedPlanesList()
    actual = landedPlaneList[0];
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkPlaneInstructedToLandIsAtAirport test result: ${result}\n`)
}

// Test that newly landed plane location is that of airports 

const checkLandedPlaneLocationIsSetToSpecifiedAirport = () => {
    //Identify
    console.log(`\ncheckLandedPlaneLocationIsSetToSpecifiedAirport\n================`)
    //Arrange
    const testPlane = new Plane('TestPlane');
    const testAirport = new Airport('TST');
    const expected = 'TST'
    //Act
    testAirport.landPlane(testPlane);
    const actual = testPlane.getLocation();
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkLandedPlaneLocationIsSetToSpecifiedAirport test result: ${result}\n`)
}

// console.log(testPlane.getLocation());

//PART 2 

module.exports = {
    checkAnyPlaneNameInputNotStringIsUndefined,
    checkNewPlaneLocationIsInSkyInitially,
    checkCanGetAPlaneName,
    checkNewAirportHasEmptyArrayOfLandedPlanes,
    checkAnyAirportNameInputNotStringIsUndefined,
    checkAirportNameHasToBeThreeLetterInput,
    checkCanGetAirportName,
    checkPlaneInstructedToLandIsAtAirport,
    checkLandedPlaneLocationIsSetToSpecifiedAirport
}