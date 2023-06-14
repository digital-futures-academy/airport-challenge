import Airport from "../src/airport.js";

describe("Airport Class Tests", function () {
  let airport, plane;

  beforeEach(function () {
    airport = new Airport();
    // plane = new plane();
  });

  afterEach(function () {
    airport = undefined;
    plane = undefined;
  });

  it("should add a plane in the list when landPlane is called", function () {
    const plane = { id: "A1234" };

    airport.landPlane(plane);

    expect(airport.listOfPlanes.length).toBe(1);
  });

  it("should override the default airport capacity with the provided capacity", function () {
    airport.overrideCapacity(5);

    expect(airport.capacity).toBe(5);
  });
});
