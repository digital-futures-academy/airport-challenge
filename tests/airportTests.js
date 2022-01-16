const Airport = require("../src/airport");
const { assertEquals } = require(`./test-frameworks`);


//User Case 1 - Airport lands a plane

const testNumbOfPlanesIsZero = () => {
    //note: test may become redundant after refactoring

    //Identity 
    console.log(`testNumbOfPlanesIsZero \n ========== \n`);


    //Arrange
    input = new Airport();
    expected = 0;

    //Act
    actual = input.planesArray.length;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testNumbOfPlanesIsZero result: ${result}`);

};


const testOnePlaneLanded = () => {
    //note: test may become redundant after refactoring

    //Identity 
    console.log(`testOnePlaneLanded \n ========== \n`);


    //Arrange
    input = new Airport();
    expected = 1;

    //Act

    input.landPlane('plane1');
    actual = input.planesArray.length;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testOnePlaneLanded result: ${result}`);

};

const testPlaneIsOnlyString = () => {


    //Identity 
    console.log(`testPlaneIsOnlyString \n ========== \n`);


    //Arrange
    input = new Airport();
    expected = 'string';

    //Act

    input.landPlane(52);
    actual = typeof input.planesArray[0];

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneIsOnlyString result: ${result}`);

};


const testNoNullPlanes = () => {

    //Identity 
    console.log(`testNoNullPlanes \n ========== \n`);


    //Arrange
    input = new Airport();
    expected = undefined;

    //Act

    input.landPlane();
    actual = input.planesArray[0];

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testNoNullPlanes result: ${result}`);


};



//User Case 2- Default capacity

const testDefaultCapacityAtAirport = () => {

    //Identify 
    console.log(`testDefaultCapacityAtAirport \n ===========\n`);

    //Arrange
    input = new Airport();
    expected = 5;

    //Act
    actual = input.capacity;

    //Assert 
    result = assertEquals(actual, expected);

    //Report
    console.log(`testDefaultCapacityAtAirport result: ${result}`);




};

const testChangeCapacityAtAirport = () => {

    //Identify 
    console.log(`testChangeCapacityAtAirport \n ===========\n`);

    //Arrange
    input = new Airport(100);
    expected = 100;

    //Act
    actual = input.capacity;

    //Assert 
    result = assertEquals(actual, expected);

    //Report
    console.log(`testChangeCapacityAtAirport result: ${result}`);




};









/*
//User case 3 - Stops plane from landing
const testNoMoreThanOnePlane = () => {
    //Identity

    console.log(`testNoMoreThanOnePlane \n ===================\n`);
    //Arrange
    input = new Airport().landPlane('plane1');
    expected = `Airport has reached capacity!`


    //Act



    //Assert


    //Report

};
*/













//allAirportTests = { testNumbOfPlanesIsZero };

module.exports = {
    testNumbOfPlanesIsZero,
    testOnePlaneLanded,
    testPlaneIsOnlyString,
    testNoNullPlanes,
    testDefaultCapacityAtAirport,
    testChangeCapacityAtAirport
};


