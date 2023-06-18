import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

describe("Airport Class Tests", function () {
  let airport, plane, plane2, plane3, plane4;

  beforeEach(function () {
    airport = new Airport(3);
  });

  describe("when landing a plane", function () {
    beforeEach(function () {
      plane = new Plane("A1234", "IN_FLIGHT", null);
      plane2 = new Plane("B0987", "IN_FLIGHT", null);
      plane3 = new Plane("C1029", "IN_FLIGHT", null);
      plane4 = new Plane("D3847", "IN_FLIGHT", null);
    });

    it("should check if the object to be landed is actually a plane", function () {
      const bird = {
        getId() {},
      };
      airport.landPlane(bird);

      expect(airport.listOfPlanes.length).toBe(0);
    });

    it("calling isFull() should return true when airport is full", function () {
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.landPlane(plane3);

      expect(airport.isFull()).toBeTrue();
    });

    it("should check if there is space in the airport to accommodate the plane", function () {
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.landPlane(plane3);
      airport.landPlane(plane4);

      expect(airport.listOfPlanes.length).toEqual(3);
    });

    it("should add a plane in the list when landPlane is called", function () {
      airport.landPlane(plane);

      expect(airport.listOfPlanes.length).toBe(1);
    });

    it("should check that the plane can land", function () {
      expect(airport.canLand(plane)).toBeTrue();
    });
  });

  describe("when constructing an airport", function () {
    it("should be initialized with a default capacity.", function () {
      expect(airport.capacity).toBe(3);
    });

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

  describe("when a plane takes off", function () {
    beforeEach(function () {
      plane = new Plane("A1234", "IN_FLIGHT", null);
      plane2 = new Plane("B0987", "IN_FLIGHT", null);
    });

    it("should be removed from the list", function () {
      airport.landPlane(plane);
      airport.takeOffPlane(plane);

      expect(airport.listOfPlanes.length).toEqual(0);
    });

    it("should check that the plane that took off is the right plane", function () {
      airport.landPlane(plane);
      airport.landPlane(plane2);

      expect(airport.takeOffPlane(plane2)[0]).toEqual(plane2);
    });

    it("should check that the plane is already landed at the airport", function () {
      airport.landPlane(plane);

      expect(airport.canTakeOff(plane)).toBeTrue();
    });
  });
});
