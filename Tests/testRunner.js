const assertEquals = require('./testFramework.js');
const Airport = require('../src/airport.js');
const tests = require('./testSpec.js');


tests.testThatAirportIsEmpty()
tests.testThatPlaneCanLand()
tests.testThatCapacityCanBeOverwritten()
tests.testThatAirportIsFull()
tests.testThatPlanesCanTakeOff()
tests.testThatPlanesAreTracked()
tests.testThatWeatherCheckerWorks()
tests.testThatPlanesCantTakeoffInStormyWeather()

