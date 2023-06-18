const Plane = require('../src/plane');
const Airport = require('../src/airport');

describe("Airport", function() {
  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport("TestAirport");
    plane = new Plane("1");
  });

  it("should be able to land a plane", function() {
    airport.landPlane(plane);
    expect(airport.currentPlanes).toContain(plane);
  });

  it("should be able to let a plane take off", function() {
    airport.landPlane(plane);
    airport.takeoffPlane(plane);
    expect(airport.currentPlanes).not.toContain(plane);
  });

  it("should be able to tell when it's full", function() {
    for(let i = 0; i < airport.airportCapacity; i++) {
      airport.landPlane(new Plane(i.toString()));
    }
    expect(airport.isFull()).toBe(true);
  });
});
