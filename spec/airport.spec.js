import Airport from "../src/airport.js";

describe("Airport Class Tests", function () {
  let airport, plane;

  beforeEach(function () {
    airport = new Airport(3);
    // plane = new plane();
    plane = { id: "A1234" };
  });

  afterEach(function () {
    airport = undefined;
    plane = undefined;
  });

  describe("should land a plane", function () {
    it("and add a plane in the list when landPlane is called", function () {
      airport.landPlane(plane);

      expect(airport.listOfPlanes.length).toBe(1);
    });

    it("only if it is a plane", function () {
      const bird = { color: "grey" };
      airport.landPlane(bird);

      expect(airport.listOfPlanes.length).toBe(0);
    });
  });

  describe("should override the default airport capacity", function () {
    it("with the new capacity", function () {
      airport.overrideCapacity(5);

      expect(airport.capacity).toBe(5);
    });

    it("provided it is an integer", function () {
      airport.overrideCapacity(5.85);

      expect(airport.capacity).toBe(3);
    });

    it("provided it is a positive integer", function () {
      airport.overrideCapacity(-5);

      expect(airport.capacity).toBe(3);
    });
  });

  it("should return true when airport is full", function () {
    airport.landPlane(plane);
    airport.landPlane(plane);
    airport.landPlane(plane);

    expect(airport.isFull()).toBeTrue();
  });

  it("should not allow plane to land when airport is full", function () {
    airport.landPlane(plane);
    airport.landPlane(plane);
    airport.landPlane(plane);
    airport.landPlane(plane);

    expect(airport.listOfPlanes.length).toEqual(3);
  });
});
