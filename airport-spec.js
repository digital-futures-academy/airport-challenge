Airport = require('./src/airport');
const { assertEquals } = require('./testFramework');

var counter = 0;

const canAddToAirport = () => { 
    //Identifiers
    counter++;
    let airport = new Airport()
    // Arrange
    const expected = 1                  //Expect the number of planes on runway to be 1
    // Act
    airport.landing('Plane A')
    actual = airport.grounded.length                   //Attempts to land a plane at the airport
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test landing plane at airport`]
}

const canOverideCapacity = () => { 
    //Identifiers
    counter++;
    let airport = new Airport(1)            //Sets capacity to 1
    // Arrange
    const expected = 2                  //Expect the number of planes on runway to be 1
    // Act
    airport.overrideCapacity('Plane A')     //Attempt to increase the capacity
    actual = airport.capacity               //Checks capacity
    // Assert
    const result = assertEquals(actual, expected);
    // Report
    return [result, `${counter}). Test increasing capacity`]
}


module.exports = {canAddToAirport,
    canOverideCapacity}