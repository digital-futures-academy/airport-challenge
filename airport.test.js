const assertEquals = require("./test-framework");
const Airport = require("../src/airport");


// Test 1
//As an air traffic controller
//So I can get passengers to a destination
//I want to instruct the airport to land a plane

const planeLanding = () => {
    //Arrange
    const testAirport = new Airport();
    const expected = 1;

    //Act
    testAirport.landPlane()
    const actual = testAirport.landPlane.length;

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`The plane has landed at the Airport: ${result}`);
};

//Test 2 
//As a system designer
//So that the software can be used for many different airports
//I would like a default airport capacity that can be overridden as appropriate
const checkCapacity = () => {
    //Arrange
    const testAirport = new Airport();
    const expected = true;

    //Act
    const actual = testAirport.isFull();

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`There is space in the Airport: ${result}`);
};


//Test 3
//As an air traffic controller
//To ensure safety
//I want to prevent landing when the airport is full.
const cannotLandAirportIsFull = () => {
    //Arrange
    const testAirport = new Airport();
    const expected = false;
    const testPlane = ['Test Plane']

    //Act
    const reachedCapacity = testAirport.reachedCapacity(testPlane)
    const actual = reachedCapacity instanceof Error;

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`The Airport is full: ${result}`);
};

//Test 4 
//As an air traffic controller
//So I can get passenger on the way to their destination
//I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
const confirmDeparture = () => {
    //Arrange
    const testAirport = new Airport();
    const expected = true;
    const testPlane1 = ['Plane 1'];

    //Act
    testAirport.landPlane('Plane 1, Plane 2');
    testAirport.confirmPlaneDeparture('Plane 1')
    const actual = testAirport.landPlane(testPlane1)

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(`This Plane: (${result}) has already departed from the Airport: ${result} `);
};


//Test 5
//As an air traffic controller
//To avoid confusion
//I want to prevent asking the airport to let planes take-off which are not at the airport,
//or land a plane that's already landed
const preventAlreadyLandedPlaneFromLanding = () => {
    //Arrange
    const testAirport = new Airport();
    const expected = false;
    const testPlane2 = ['Plane 2'];

    //Act
    const preventPlaneLanding = testAirport.preventPlaneLanding(testPlane2)
    const actual = preventPlaneLanding instanceof Error

    //Assert
    const result = assertEquals(actual, expected);

    //Report
    console.log(` This plane has already landed; ${result}`);
};








module.exports = {
    planeLanding,
    checkCapacity,
    cannotLandAirportIsFull,
    confirmDeparture,
    preventAlreadyLandedPlaneFromLanding


}