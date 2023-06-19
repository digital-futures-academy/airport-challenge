const Airport = require('../src/airport');


describe("Airport", function() {
  let airport;

  beforeEach(function() {
    airport = new Airport("TestAirport", 2);
  });

  it("should be able to land a plane", function() {
    const plane1 = {
      setStatus: jasmine.createSpy("setStatus"),
      setCurrentLocation: jasmine.createSpy("setCurrentLocation")
    };

    airport.landPlane(plane1);

    expect(airport.currentPlanes).toContain(plane1);
    expect(plane1.setStatus).toHaveBeenCalledWith("landed");
    expect(plane1.setCurrentLocation).toHaveBeenCalledWith("TestAirport");
  });

  it("should throw an error when trying to land a plane at a full airport", function() {
    airport.currentPlanes = [1, 1];

    expect(function() {
      airport.landPlane({});
    }).toThrowError("Cannot land plane");
  });

  it("should be able to let a plane take off", function() {
    const plane1 = {
      setStatus: jasmine.createSpy("setStatus"),
      setCurrentLocation: jasmine.createSpy("setCurrentLocation")
    };

    airport.currentPlanes = [plane1];

    airport.takeoffPlane(plane1);

    expect(airport.currentPlanes).not.toContain(plane1);
    expect(plane1.setStatus).toHaveBeenCalledWith("in_air");
    expect(plane1.setCurrentLocation).toHaveBeenCalledWith(null);
  });

  it("should throw an error when trying to let a plane take off that is not at the airport", function() {
    const plane1 = {};

    expect(function() {
      airport.takeoffPlane(plane1);
    }).toThrowError("This plane is not at this airport.");
  });
});
