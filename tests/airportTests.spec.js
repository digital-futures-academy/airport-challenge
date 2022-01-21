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

class MockWeather {

    constructor(weather = 'Stormy') {
        this.weather = weather;
    }

    getForecast() {
        return this.weather;
    }

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
    console.log(`testNumbOfPlanesIsZero result: ${result} \n`);

};

const testOnePlaneLanded = () => {


    //Identity 
    console.log(`testOnePlaneLanded \n ========== \n`);


    //Arrange
    const input = new Airport();
    const expected = 1;
    const testPlane = new MockPlane();
    const testWeather = new MockWeather('Sunny');

    //Act
    input.landPlane(testPlane, testWeather);
    actual = input.planesArray.length;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testOnePlaneLanded result: ${result} \n`);

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
    console.log(`testDefaultCapacityAtAirport result: ${result} \n`);




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
    console.log(`testChangeCapacityAtAirport result: ${result} \n`);




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
    const testWeather = new MockWeather('Sunny');
    //Act
    input.landPlane(testPlane, testWeather);
    const extraPlane = input.landPlane(testPlane2, testWeather);
    actual = extraPlane instanceof Error

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testPreventLanding result: ${result} \n`);
};



const testPlaneMustBeAnObject = () => {

    //Identity 
    console.log(`testPlaneMustBeAnObject \n ===========\n`);

    //Arrange
    const input = new Airport();
    const testPlane = 'NonObject Plane';
    const expected = true;
    const testWeather = new MockWeather('Sunny');

    //Act
    const testLanding = input.landPlane(testPlane, testWeather);
    const actual = testLanding instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneMustBeAnObject result : ${result} \n`);
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
    const testWeather = new MockWeather('Sunny');
    //Act
    input.landPlane(testPlane, testWeather);
    input.landPlane(testPlane2, testWeather);
    input.takeOffPlane(testPlane, testWeather);
    const actual = input.planesArray[0];

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testTakeOffRemovesPlaneFromArray result : ${result} \n`);


}

const testTakeOffUsesObjectPlanesOnly = () => {

    //Identity
    console.log(`testTakeOffUsesObjectPlanesOnly \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testPlaneName = testPlane.getName();
    const expected = true;
    const testWeather = new MockWeather('Sunny');

    //Act
    input.landPlane(testPlane, testWeather);
    const takingOffTestPlane = input.takeOffPlane(testPlaneName, testWeather);
    const actual = takingOffTestPlane instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testTakeOffUsesObjectPlanesOnly result : ${result} \n`);


};

//User Case 5 - Don't let plane land or take-off twice

const testIfPlaneAlreadyAtAirportDontLandAgain = () => {

    //Identity
    console.log(`testIfPlaneAlreadyAtAirportDontLandAgain \n ========== \n`)
    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const expected = true;
    const testWeather = new MockWeather('Sunny');
    //Act
    input.landPlane(testPlane, testWeather);
    const landSamePlane = input.landPlane(testPlane, testWeather);
    const actual = landSamePlane instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testIfPlaneAlreadyAtAirportDontLandAgain result : ${result} \n`);
}

const testPlaneLandedSomewhereElseThenCantLand = () => {

    //Identity
    console.log(`testPlaneLandedSomewhereElseThenCantLand \n ========== \n`)
    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane('Test Plane', true);
    const expected = true;
    const testWeather = new MockWeather('Sunny');
    //Act
    const alreadyLandedPlane = input.landPlane(testPlane, testWeather);
    const actual = alreadyLandedPlane instanceof Error;
    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testPlaneLandedSomewhereElseThenCantLand result : ${result} \n`);

};


const testCantRemovePlaneNotAtAirport = () => {

    //Identity
    console.log(`testCantRemovePlaneNotAtAirport \n ========== \n`);
    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const expected = true;
    const testWeather = new MockWeather('Sunny');
    //Act
    const takeOffPlaneNotInList = input.takeOffPlane(testPlane, testWeather);
    const actual = takeOffPlaneNotInList instanceof Error;

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`testCantRemovePlaneNotAtAirport result : ${result} \n`);

}



//Extended User case prevent plane from landing when stormy

const testNoLandingWhenStormy = () => {

    //Identity
    console.log(`testNoTakeOffWhenStormy \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testWeather = new MockWeather('Stormy');
    const expected = true;

    //Act
    const landingInStorm = input.landPlane(testPlane, testWeather);
    const actual = landingInStorm instanceof Error;

    //Assert
    const result = assertEquals(actual, expected)

    //Report
    console.log(`testNoLandingWhenStormy result : ${result} \n`);

};


const testTakeOffWhenStormy = () => {

    //Identity
    console.log(`testTakeOffWhenStormy \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testWeather = new MockWeather('Sunny');
    const testStormy = new MockWeather('Stormy');
    const expected = true;

    //Act
    input.landPlane(testPlane, testWeather);
    const testStormyRemove = input.takeOffPlane(testPlane, testStormy);
    const actual = testStormyRemove instanceof Error;

    //Assert
    const result = assertEquals(actual, expected)

    //Report
    console.log(`testTakeOffWhenStormy result : ${result} \n`);

};


const testLandingWeatherMustBeObject = () => {
    //Identity
    console.log(`testLandingWeatherMustBeObject \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testWeather = 'NonObject Weather'
    const expected = true;

    //Act
    const landingInStorm = input.landPlane(testPlane, testWeather);
    const actual = landingInStorm instanceof Error;

    //Assert
    const result = assertEquals(actual, expected)

    //Report
    console.log(`testLandingWeatherMustBeObject result : ${result} \n`);


};


const testTakeOffWeatherMustBeObject = () => {

    //Identity
    console.log(`testTakeOffWeatherMustBeObject \n ========== \n`);

    //Arrange
    const input = new Airport();
    const testPlane = new MockPlane();
    const testWeather = new MockWeather('Sunny');
    const testStormy = 'NonObject Weather';
    const expected = true;

    //Act
    input.landPlane(testPlane, testWeather);
    const testStormyRemove = input.takeOffPlane(testPlane, testStormy);
    const actual = testStormyRemove instanceof Error;

    //Assert
    const result = assertEquals(actual, expected)

    //Report
    console.log(`testTakeOffWeatherMustBeObject result : ${result} \n`);

};






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
    testCantRemovePlaneNotAtAirport,
    testNoLandingWhenStormy,
    testTakeOffWhenStormy,
    testLandingWeatherMustBeObject,
    testTakeOffWeatherMustBeObject
};

module.exports = airportTests;


