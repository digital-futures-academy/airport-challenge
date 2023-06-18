import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import Weather from "../src/weather.js";

describe("Airport Class Tests", function () {
  let airport, plane, plane2, plane3, plane4;

  beforeEach(function () {
    airport = new Airport(3, "KUL", new Weather("SUNNY"));
    plane = new Plane("A1234", "IN_FLIGHT", null);
    plane2 = new Plane("B0987", "IN_FLIGHT", null);
    plane3 = new Plane("C1029", "IN_FLIGHT", null);
    plane4 = new Plane("D3847", "IN_FLIGHT", null);
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

  describe("when a plane is about to land", function () {
    it("should check if the object to be landed is actually a plane", function () {
      const bird = {
        getId() {},
      };
      airport.landPlane(bird);

      expect(airport.listOfPlanes.length).toBe(0);
    });

    it("should not be able to land if the airport is full", function () {
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.landPlane(plane3);

      expect(airport.isFull()).toBeTrue();
      expect(airport.canLand(plane4)).toBeFalse();
    });

    it("should be allowed to land if the airport is not full", function () {
      expect(airport.isFull()).toBeFalse();
      expect(airport.canLand(plane)).toBeTrue();
    });

    it("should be allowed to land if the weather is sunny", function () {
      expect(airport.canLand(plane)).toBeTrue();
    });
  });

  describe("when a plane lands", function () {
    it("should be at the airport", function () {
      expect(airport.hasPlane(plane)).toBeFalse();

      airport.landPlane(plane);

      expect(airport.hasPlane(plane)).toBeTrue();
    });
  });

  describe("when a plane is about to take off", function () {
    it("should check that the plane that took off is the right plane", function () {
      airport.landPlane(plane);
      airport.landPlane(plane2);

      expect(airport.takeOffPlane(plane2)[0]).toEqual(plane2);
    });

    it("should check that the plane is already landed at the airport", function () {
      airport.landPlane(plane);

      expect(airport.canTakeOff(plane)).toBeTrue();
    });

    it("should be allowed if the weather is sunny", function () {
      airport.landPlane(plane);

      expect(airport.canTakeOff(plane)).toBeTrue();
    });
  });

  describe("when a plane takes off", function () {
    it("should no longer be at the airport", function () {
      airport.landPlane(plane);
      airport.takeOffPlane(plane);

      expect(airport.hasPlane(plane)).toBeFalse();
    });
  });
});
