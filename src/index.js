const { assertEquals } = require('../specs/testing-framework');
const airport = require('../src/airport');
const plane = require('../src/plane');

const landResult = airport.land(plane);
assertEquals(landResult, true);

console.log(plane.isAtAirport());

airport.setMax(100);
const isFullResult = airport.isFull();
assertEquals(isFullResult, false);

const takeOffResult = airport.takeOff(plane);
assertEquals(takeOffResult, true);


