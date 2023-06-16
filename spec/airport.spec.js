import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

describe("Airport Class Tests", function () {
  let airport, plane;

  beforeEach(function () {
    airport = new Airport(3);
    plane = new Plane("A1234");
  });

  // afterEach(function () {
  //   airport = undefined;
  //   plane = undefined;
  // });

  // describe("when constructing an airport", function () {
  //   it("should be initialised with a default capacity.", () => { });
  //   it("should be possible to override the default capacity.", () => { });
  // });

  describe("when landing a plane", function () {
    it("should check if the object to be landed is actually a plane", function () {
      const bird = {
        getId() {},
      };
      airport.landPlane(bird);

      expect(airport.listOfPlanes.length).toBe(0);
    });

    it("calling isFull() should return true when airport is full", function () {
      airport.landPlane(plane);
      airport.landPlane(plane);
      airport.landPlane(plane);

      expect(airport.isFull()).toBeTrue();
    });

    it("should check if there is space in the airport to accommodate the plane", function () {
      airport.landPlane(plane);
      airport.landPlane(plane);
      airport.landPlane(plane);
      airport.landPlane(plane);

      expect(airport.listOfPlanes.length).toEqual(3);
    });

    it("should add a plane in the list when landPlane is called", function () {
      airport.landPlane(plane);

      expect(airport.listOfPlanes.length).toBe(1);
    });
  });

  describe("when constructing an airport", function () {
    // it("should be initialised with a default capacity.", function () {});
    it("should be possible to override the default capacity.", function () {
      airport.setCapacity(5);

      expect(airport.capacity).toBe(5);
    });

    it("should only accept integer for new capacity", function () {
      airport.setCapacity(5.85);

      expect(airport.capacity).toBe(3);
    });

    it("should only accept a positive integer for new capacity", function () {
      airport.setCapacity(-5);

      expect(airport.capacity).toBe(3);
    });
  });

  describe("should let a plane take off", function () {
    it("and remove from list", function () {
      airport.landPlane(plane);
      airport.takeOffPlane(plane);

      expect(airport.listOfPlanes.length).toEqual(0);
    });

    it("and check that the plane that was removed is the right plane", function () {
      const plane2 = new Plane("B0987");
      airport.landPlane(plane);
      airport.landPlane(plane2);

      expect(airport.takeOffPlane(plane)[0]).toEqual(plane);
    });
  });
});
