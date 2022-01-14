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

module.exports = {canAddToAirport}