const Plane = require('../src/plane');
const Airport = require('../src/airport');

describe("Plane", function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane("Plane1");
    airport = new Airport("TestAirport");
  });

  it("should be able to land ", function() {
    plane.land(airport);

    expect(airport.currentPlanes).toContain(plane);
    expect(plane.status).toEqual('landed');
    expect(plane.currentLocation).toEqual('TestAirport');
  });

  it("should be able to take off ", function() {
    // Land the plane first
    plane.land(airport);

    plane.takeOff(airport);

    expect(airport.currentPlanes).not.toContain(plane);
    expect(plane.status).toEqual('in_air');
    expect(plane.currentLocation).toBeNull();
  });

  it("should throw an error when trying to take off from an airport where the plane is not present", function() {
    const otherAirport = new Airport("OtherAirport");
    const otherPlane = new Plane("OtherPlane");
    otherAirport.landPlane(otherPlane);

    expect(function() {
      plane.takeOff(airport);
    }).toThrowError('This plane is not at this airport.');
  });
});
