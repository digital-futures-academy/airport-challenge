const { Airport } = require('../src/airport');
const { Plane } = require('../src/plane');
const { assertEquals } = require('./testFramework');

//// USER STORY PART 1 

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
    const testAirport = new Airport('JFK');
    const expected = 0;
    //Act
    const landedPlanes = testAirport.getLandedPlanesList();
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

// AIRPORT LANDING PLANE TESTS 

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

//// USER STORY PART 2

// AIRPORT CAPACITY TESTS

const checkDefaultAirportCapacityIs5 = () => {
    //Identifier
    console.log(`\ncheckDefaultAirportCapacityIs5\n================`)
    //Arrange
    const testAirport = new Airport('LDN');
    expected = 5;
    //Act
    const actual = testAirport.airportCapacity;
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkDefaultAirportCapacityIs5 test result: ${result}\n`)
}

// Check default airport capacity can be overridden

const checkDefaultAirportCapacityCanBeOverRidden = () => {
    //Identifier
    console.log(`\ncheckDefaultAirportCapacityCanBeOverRidden\n================`)
    //Arrange
    const testAirport = new Airport('TST', 2);
    const expected = 2;
    //Act
    const actual = testAirport.airportCapacity;
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkDefaultAirportCapacityCanBeOverRidden test result: ${result}\n`);
}

//// USER STORY PART 3

// AIRPORT CAPACITY - LANDING TESTS 

const checkCanCountNumberOfPlanesAtAirport = () => {
    //Identifier
    console.log(`\ncheckCanCountNumberOfPlanesAtAirport\n================`)
    //Arrange
    const testAirport = new Airport('TST');
    const testPlane1 = new Plane('Plane1');
    const testPlane2 = new Plane('Plane2');
    const testPlane3 = new Plane('Plane3');
    const expected = 3;
    //Act
    testAirport.landPlane(testPlane1);
    testAirport.landPlane(testPlane2);
    testAirport.landPlane(testPlane3);
    const actual = testAirport.getNumberOfPlanesAtAirport();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkCanCountNumberOfPlanesAtAirport test result: ${result}\n`);
}

const checkLandingIsPreventedWithAirportAtFullCapacity = () => {
    //Identifier
    console.log(`\ncheckLandingIsPreventedWithAirportAtFullCapacity\n================`)
    //Arrange
    const testAirport = new Airport('TST', 2);
    const testPlane1 = new Plane('Plane1');
    const testPlane2 = new Plane('Plane2');
    const testPlane3 = new Plane('Plane3');
    const expected = true;
    //Act
    testAirport.landPlane(testPlane1);
    testAirport.landPlane(testPlane2);
    const requestLandingResult = testAirport.landPlane(testPlane3);
    const actual = requestLandingResult instanceof Error;
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkLandingIsPreventedWithAirportAtFullCapacity test result: ${result}\n`);
}

//// USER STORY PART 4

// PLANE TAKE OFF TESTS 

const checkPlaneCanTakeOffFromAirportAndIsNoLongerThere = () => {
    //Identifier
    console.log(`\ncheckPlaneCanTakeOffFromAirportAndIsNoLongerThere\n================`)
    //Arrange
    const testPlane = new Plane('TESTPLANE');
    const testAirport = new Airport('TST');
    const expected = false;
    //Act
    testAirport.landPlane(testPlane);
    testAirport.planeTakeOff(testPlane);
    const actual = testAirport.getLandedPlanesList().includes('TESTPLANE');
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkPlaneCanTakeOffFromAirportAndIsNoLongerThere test result: ${result}\n`);
}

const checkPlaneLocationAfterTakingOffIsSky = () => {
    //Identifier
    console.log(`\ncheckPlaneLocationAfterTakingOffIsSky\n================`)
    //Arrange
    const testPlane = new Plane('TESTPLANE');
    const testAirport = new Airport('TST');
    const expected = 'sky';
    //Act
    testAirport.landPlane(testPlane);
    testAirport.planeTakeOff(testPlane);
    const actual = testPlane.getLocation();
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkPlaneLocationAfterTakingOffIsSky test result: ${result}\n`);
}

//// USER STORY PART 5

// QUESTIONABLE PLANE TAKE OFF AND LANDING REQUESTS ERROR TESTS 

const checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport = () => {
    //Identifier
    console.log(`\ncheckErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport\n================`)
    //Arrange
    const testPlane = new Plane('TestPlane');
    const testAirport = new Airport('TST');
    const expected = true;
    //Act
    const actual = testAirport.planeTakeOff(testPlane) instanceof Error;
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport test result: ${result}\n`);
}

const checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport = () => {
    //Identifier
    console.log(`\ncheckErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport\n================`)
    //Arrange
    const testPlane = new Plane('TestPlane');
    const testAirport = new Airport('TST');
    const expected = true;
    //Act
    testAirport.landPlane(testPlane);
    const actual = testAirport.landPlane(testPlane) instanceof Error;
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport test result: ${result}\n`);
}

//// USER STORY PART 6




module.exports = {
    checkAnyPlaneNameInputNotStringIsUndefined,
    checkNewPlaneLocationIsInSkyInitially,
    checkCanGetAPlaneName,
    checkNewAirportHasEmptyArrayOfLandedPlanes,
    checkAnyAirportNameInputNotStringIsUndefined,
    checkAirportNameHasToBeThreeLetterInput,
    checkCanGetAirportName,
    checkPlaneInstructedToLandIsAtAirport,
    checkLandedPlaneLocationIsSetToSpecifiedAirport,
    checkDefaultAirportCapacityIs5,
    checkDefaultAirportCapacityCanBeOverRidden,
    checkCanCountNumberOfPlanesAtAirport,
    checkLandingIsPreventedWithAirportAtFullCapacity,
    checkPlaneCanTakeOffFromAirportAndIsNoLongerThere,
    checkPlaneLocationAfterTakingOffIsSky,
    checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport,
    checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport
}