import Airport from "../src/airport.js";

describe("Airport Class Tests", function () {
  let airport, plane;

  beforeEach(function () {
    airport = new Airport();
    // plane = new plane();
    plane = { id: "A1234" };
  });

  afterEach(function () {
    airport = undefined;
    plane = undefined;
  });

  it("should add a plane in the list when landPlane is called", function () {
    airport.landPlane(plane);

    expect(airport.listOfPlanes.length).toBe(1);
  });

  it("should allow to land only if it is a plane", function () {
    const bird = { color: "grey" };
    airport.landPlane(bird);

    expect(airport.listOfPlanes.length).toBe(0);
  });

  it("should override the default airport capacity with the provided capacity", function () {
    airport.overrideCapacity(5);

    expect(airport.capacity).toBe(5);
  });

  it("should only override default capacity if provided a positive number", function () {
    airport = new Airport(1);
    airport.overrideCapacity(-5);

    expect(airport.capacity).toBe(1);
  });

  it("should only override default capacity if provided a positive integer", function () {
    airport = new Airport(1);

    airport.overrideCapacity(5.85);

    expect(airport.capacity).toBe(1);
  });

  it("should return true when airport is full", function () {
    airport.landPlane(plane);
    airport.landPlane(plane);
    airport.landPlane(plane);

    expect(airport.isFull()).toBeTrue();
  });
});
