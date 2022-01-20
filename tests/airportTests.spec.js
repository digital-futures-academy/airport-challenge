const Airport = require("../src/airport");
const { assertEquals } = require(`./test-frameworks`);

class MockPlane {
    constructor(name = 'Test Plane', landed = false) {
        this.landed = landed;
        this.name = name;
        //Needed a constructor as I wanted to use the Mock to add two planes with different names
    }
    getName() { return this.name } //Only doing this because I haven't set up Jasmine and can't use spyOn();
    isLanded() { return this.landed }

    changeLandingStatus() { this.landed = !this.landed }

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



const testPlaneMustBeAnObject = () => {

    //Identity 
    console.log(`testPlaneMustBeAnObject \n ===========\n`);

    //Arrange
    const input = new Airport();
    const testPLane = 'NonObject Plane';
    const expected = true;

    //Act
    const testLanding = input.landPlane(testPLane);
    const actual = testLanding instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneMustBeAnObject result : ${result}`);
}



//User Case 4 - Let plane takeoff

const testTakeOffRemovesPlaneFromArray = () => {

    //Identity
    console.log(`testTakeOffRemovesPlaneFromArray \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testPlane2 = new MockPlane('Test Plane 2');
    const expected = 'Test Plane 2';

    //Act
    input.landPlane(testPlane);
    input.landPlane(testPlane2);
    input.takeOffPlane(testPlane);
    const actual = input.planesArray[0];

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testTakeOffRemovesPlaneFromArray result : ${result}`);


}

const testTakeOffUsesObjectPlanesOnly = () => {

    //Identity
    console.log(`testTakeOffUsesObjectPlanesOnly \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testPlaneName = testPlane.getName();
    const expected = true;

    //Act
    input.landPlane(testPlane);
    const takingOffTestPlane = input.takeOffPlane(testPlaneName);
    const actual = takingOffTestPlane instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testTakeOffUsesObjectPlanesOnly result : ${result}`);


};

//User Case 5 - Don't let plane land or take-off twice

const testIfPlaneAlreadyAtAirportDontLandAgain = () => {

    //Identity
    console.log(`testIfPlaneAlreadyAtAirportDontLandAgain \n ========== \n`)
    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const expected = true;
    //Act
    input.landPlane(testPlane);
    const landSamePlane = input.landPlane(testPlane);
    const actual = landSamePlane instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testIfPlaneAlreadyAtAirportDontLandAgain result : ${result}`);
}

const testPlaneLandedSomewhereElseThenCantLand = () => {

    //Identity
    console.log(`testPlaneLandedSomewhereElseThenCantLand \n ========== \n`)
    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane('Test Plane', true);
    const expected = true;
    //Act
    const alreadyLandedPlane = input.landPlane(testPlane);
    const actual = alreadyLandedPlane instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneLandedSomewhereElseThenCantLand result : ${result}`);

};


const testCantRemovePlaneNotAtAirport = () => {

    //Identity
    console.log(`testCantRemovePlaneNotAtAirport \n ========== \n`);
    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const expected = true;
    //Act
    const takeOffPlaneNotInList = input.takeOffPlane(testPlane);
    const actual = takeOffPlaneNotInList instanceof Error;

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testCantRemovePlaneNotAtAirport result : ${result}`);

}



airportTests = {
    testNumbOfPlanesIsZero,
    testOnePlaneLanded,
    testDefaultCapacityAtAirport,
    testChangeCapacityAtAirport,
    testPreventLanding,
    testPlaneMustBeAnObject,
    testTakeOffRemovesPlaneFromArray,
    testTakeOffUsesObjectPlanesOnly,
    testIfPlaneAlreadyAtAirportDontLandAgain,
    testPlaneLandedSomewhereElseThenCantLand,
    testCantRemovePlaneNotAtAirport
};

module.exports = airportTests;


