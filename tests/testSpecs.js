const { Airport } = require('../src/airport');
const { Plane } = require('../src/plane');
const { WeatherReport } = require('../src/weather.js')
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
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    //Act
    testAirport.landPlane(testPlane, testWeatherReport);
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
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    //Act
    testAirport.landPlane(testPlane, testWeatherReport);
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

const checkLandingIsPreventedWithAirportAtFullCapacity = () => {
    //Identifier
    console.log(`\ncheckLandingIsPreventedWithAirportAtFullCapacity\n================`)
    //Arrange
    const testAirport = new Airport('TST', 2);
    const testPlane1 = new Plane('Plane1');
    const testPlane2 = new Plane('Plane2');
    const testPlane3 = new Plane('Plane3');
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    const expected = 'The airport is at full capacity. This plane cannot land here.';
    //Act
    testAirport.landPlane(testPlane1, testWeatherReport);
    testAirport.landPlane(testPlane2, testWeatherReport);
    let outputError = testAirport.landPlane(testPlane3, testWeatherReport);
    const actual = outputError.message;
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
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    const expected = false;
    //Act
    testAirport.landPlane(testPlane, testWeatherReport);
    testAirport.planeTakeOff(testPlane, testWeatherReport);
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
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    const expected = 'sky';
    //Act
    testAirport.landPlane(testPlane, testWeatherReport);
    testAirport.planeTakeOff(testPlane, testWeatherReport);
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
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    const expected = 'This plane is not currently at the airport. Take off request is invalid.';
    //Act
    let outputError = testAirport.planeTakeOff(testPlane, testWeatherReport);
    const actual = outputError.message;
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
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    const expected = 'This plane has already landed at this airport and cannot do so again.';
    //Act
    testAirport.landPlane(testPlane, testWeatherReport);
    let outputError = testAirport.landPlane(testPlane, testWeatherReport)
    const actual = outputError.message;
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport test result: ${result}\n`);
}

//// USER STORY PART 6 AND 7 

// STORMY WEATHER TESTS

const checkStormyFunctionProducesABooleanValue = () => {
    //Identifier
    console.log(`\ncheckStormyFunctionProducesABooleanValue\n================`)
    //Arrange
    const testWeatherReport = new WeatherReport;
    const expected = 'boolean';
    //Act
    const actual = typeof testWeatherReport.stormyWeather;
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkStormyFunctionProducesABooleanValue test result: ${result}\n`);
}

const checkPlaneCannotTakeOffWhenStormy = () => {
    //Identifier
    console.log(`\ncheckPlaneCannotTakeOffWhenStormy\n================`)
    //Arrange
    const testPlane = new Plane('TestPlane');
    const testAirport = new Airport('TST');
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    testAirport.landPlane(testPlane, testWeatherReport);
    testWeatherReport.stormyWeather = true;
    const expected = 'The weather is stormy and planes are not able to take off right now.';
    //Act
    let outputError = testAirport.planeTakeOff(testPlane, testWeatherReport);
    const actual = outputError.message;
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkPlaneCannotTakeOffWhenStormy test result: ${result}\n`);
}

const checkPlaneCannotLandWhenWeatherIsStormy = () => {
    //Identifier
    console.log(`\ncheckPlaneCannotLandWhenWeatherIsStormy\n================`)
    //Arrange
    const testPlane = new Plane('TestPlane');
    const testAirport = new Airport('TST');
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = true;
    const expected = 'The weather is stormy and planes are not able to land right now.';
    //Act
    let outputError = testAirport.landPlane(testPlane, testWeatherReport);
    const actual = outputError.message;
    //Assert
    const result = assertEquals(expected, actual);
    //Report
    console.log(`checkPlaneCannotLandWhenWeatherIsStormy test result: ${result}\n`);

}

//// USER STORY PART 8 

// COUNTING PLANES THAT HAVE LANDED AT AN AIRPORT TESTS

const checkCanCountNumberOfPlanesAtAirport = () => {
    //Identifier
    console.log(`\ncheckCanCountNumberOfPlanesAtAirport\n================`)
    //Arrange
    const testAirport = new Airport('TST');
    const testPlane1 = new Plane('Plane1');
    const testPlane2 = new Plane('Plane2');
    const testPlane3 = new Plane('Plane3');
    const testWeatherReport = new WeatherReport();
    testWeatherReport.stormyWeather = false;
    const expected = 3;
    //Act
    testAirport.landPlane(testPlane1, testWeatherReport);
    testAirport.landPlane(testPlane2, testWeatherReport);
    testAirport.landPlane(testPlane3, testWeatherReport);
    const actual = testAirport.getNumberOfPlanesAtAirport();
    //Assert
    const result = assertEquals(expected, actual);
    //Report 
    console.log(`checkCanCountNumberOfPlanesAtAirport test result: ${result}\n`);
}

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
    checkLandingIsPreventedWithAirportAtFullCapacity,
    checkPlaneCanTakeOffFromAirportAndIsNoLongerThere,
    checkPlaneLocationAfterTakingOffIsSky,
    checkErrorOccursWhenAskingPlaneToTakeOffThatsNotAtAirport,
    checkErrorOccursWhenAskingPlaneToLandWhenAlreadyAtAirport,
    checkStormyFunctionProducesABooleanValue,
    checkPlaneCannotTakeOffWhenStormy,
    checkPlaneCannotLandWhenWeatherIsStormy,
    checkCanCountNumberOfPlanesAtAirport,
}