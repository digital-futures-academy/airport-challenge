//write tests here

const { assertEquals } = require("./test-framework")
const { Airport } = require("../src/Airport")

//write the first test

const testAddPlane = () => {
    // arrange
    const airport = new Airport;
    const expected = 1;

    // act
    airport.landPlaneToAirport("123");
    const actual = airport.plane.length;

    // assert
    const result = assertEquals(actual, expected);
    // report
    console.log(`The expected result should be ${expected}: ${result}.`);
}

const testChangeCapacity = () => {
    // arrange
    const airport = new Airport;
    const expected = 1;

    // act
    airport.changeCapacity(1); //default is 2, changing it to 1
    const actual = airport.capacity;

    // assert
    const result = assertEquals(actual, expected);

    // report 
    console.log(`The expected result should be ${expected}: ${result}.`);
}

const testUnableToAddIfFull = () => {
    // arrange
    const airport = new Airport;
    const expected = true;
    airport.landPlaneToAirport("test1");
    airport.landPlaneToAirport("test2"); // default plane property is an empty array and default capacity is 2, so we need to add 2 more planes to airport before testing

    //act

    const getResult = airport.landPlaneToAirport("test3"); //trying to add more one plane when the airport is full;
    const actual = getResult instanceof Error; //this should return true as it should throw an error

    //assert
    const result = assertEquals(actual, expected);

    //report 
    console.log(`The expected result should be ${expected}: ${result}.`);
}

const testCountPlane = () => {

    //arrange

    const airport = new Airport;
    const expected = 3;

    //act
    airport.changeCapacity(5); //first, change the capacity from 2 to 5 so we can add more planes;
    airport.landPlaneToAirport("test1");
    airport.landPlaneToAirport("test2");
    airport.landPlaneToAirport("test3"); //add 3 planes so the length of airport.length should be 3
    const actual = airport.countPlane();

    //assert
    const result = assertEquals(actual, expected);


    //report
    console.log(`The expected result should be ${expected}: ${result}.`);

}

const testTakeOffWhenHere = () => {
    //arrange
    const airport = new Airport;
    const expected = 0;

    //act

    airport.landPlaneToAirport("test123");
    airport.takeOffPlaneFromAirport("test123");
    const actual = airport.plane.length;

    //assert
    const result = assertEquals(actual, expected);

    //report
    console.log(`The expected result should be ${expected}: ${result}.`);
}

const testCannotTakeOffWhenNotHere = () => {
    //arrange
    const airport = new Airport;
    const expected = true;

    //act

    airport.landPlaneToAirport("test123");
    const testResult = airport.takeOffPlaneFromAirport("test456");
    const actual = testResult instanceof Error;

    //assert
    const result = assertEquals(actual, expected);

    //report  
    console.log(`The expected result should be ${expected}: ${result}.`);
}

const testCanTakeOffIfNotStormy = () => {
    //arrange

    const airport = new Airport
    airport.landPlaneToAirport("test123"); //land the plane first before testing
    const expected = 0; //expected length of planes array should be 0 once we take off the only plane in airport

    //act
    airport.takeOffPlaneFromAirport("test123"); //weather default is NOT stormy, so the plane shoule be able to take off
    const actual = airport.plane.length;

    //assert
    const result = assertEquals(actual, expected);
    //report 
    console.log(`The expected result should be ${expected}: ${result}.`);
}

const testCannotTakeOffIfStormy = () => {

    // arrange

    const airport = new Airport;

    airport.landPlaneToAirport("test123"); //make sure that there's a plane to take off
    const expected = true; //expecting an error as even there's plance to take off and this plane is in fact in the airport, it can't take off because of stormy weather
    airport.stormy = true; //make it stormy now

    //act
    const testResult = airport.takeOffPlaneFromAirport("123");
    const actual = testResult instanceof Error;

    //assert
    const result = assertEquals(actual, expected);
    //report
    console.log(`The expected result should be ${expected}: ${result}.`);
}

module.exports = { testAddPlane, testChangeCapacity, testUnableToAddIfFull, testCountPlane, testTakeOffWhenHere, testCannotTakeOffWhenNotHere, testCanTakeOffIfNotStormy, testCannotTakeOffIfStormy }