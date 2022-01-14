const Airport = require("../src/airport");
const { assertEquals } = require(`./test-frameworks`);


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
    console.log(`testNumbOfPlanesIsZero result : ${result}`);

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
    console.log(`testOnePlaneLanded result : ${result}`);

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
    console.log(`testPlaneIsOnlyString result : ${result}`);

};


const testNoNullPlanes = () => {

    //Identity 
    console.log(`testNoNullPlanes \n ========== \n`);


    //Arrange
    input = new Airport();
    expected = [];

    //Act

    input.landPlane();
    actual = input.planesArray;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testNoNullPlanes result : ${result}`);


}













//allAirportTests = { testNumbOfPlanesIsZero };

module.exports = {
    testNumbOfPlanesIsZero,
    testOnePlaneLanded,
    testPlaneIsOnlyString,
    testNoNullPlanes
};


