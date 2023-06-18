const Plane = require('../src/plane');
const Airport = require('../src/airport');

describe("Plane", function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane("1");
    airport = new Airport("TestAirport");
  });

  it("should be able to land at an airport", function() {
    plane.land(airport);
    expect(plane.currentLocation).toEqual("TestAirport");
    expect(plane.status).toEqual('landed');
  });

  it("should be able to take off from an airport", function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(plane.currentLocation).toBeNull();
    expect(plane.status).toEqual('in_air');
  });
});
