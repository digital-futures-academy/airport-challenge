const Airport = require("../src/airport");
const { assertEquals } = require(`./test-frameworks`);
class MockPlane {
    constructor(name = 'Test Plane', landed = false) {
        this.landed = landed;
        this.name = name;
        //Needed a constructor as I wanted to use the Mock to add two planes with different names
    }
    getName() { }
    isLanded() { }
    //changeLandingStatus() { }

}


//User Case 1 - Airport lands a plane

const testNumbOfPlanesIsZero = () => {

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


    //Identity 
    console.log(`testOnePlaneLanded \n ========== \n`);


    //Arrange
    const input = new Airport();
    const expected = 1;
    const testPlane = new MockPlane();

    //Act

    input.landPlane(testPlane);
    actual = input.planesArray.length;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testOnePlaneLanded result: ${result}`);

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


//User case 3 - Stops plane from landing

const testPreventLanding = () => {
    //Identity

    console.log(`testPreventLanding \n ===================\n`);
    //Arrange
    const input = new Airport(capacity = 1);
    const expected = true;
    const testPlane = new MockPlane();
    const testPlane2 = new MockPlane('Test Plane 2');
    //Act
    input.landPlane(testPlane);
    const extraPlane = input.landPlane(testPlane2);
    actual = extraPlane instanceof Error

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testPreventLanding result: ${result}`);
};






airportTests = {
    testNumbOfPlanesIsZero,
    testOnePlaneLanded,
    testDefaultCapacityAtAirport,
    testChangeCapacityAtAirport,
    testPreventLanding
};

module.exports = airportTests;


