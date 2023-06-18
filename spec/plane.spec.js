import Plane from "../src/plane.js";

describe("Plane Class Tests", function () {
  let plane;
  const mockAirport = { id: "KUL" };

  beforeEach(function () {
    plane = new Plane("A1234");
  });

  describe("when constructing a new plane", function () {
    it("should return the plane id", function () {
      expect(plane.getId()).toEqual("A1234");
    });

    it("should initialized as landed", function () {
      expect(plane.hasLanded()).toBeTrue();
    });

    it("should check that the plane cannot land at an airport", function () {
      expect(plane.canLand()).toBeFalse();
    });
  });

  describe("when the plane is in flight", function () {
    beforeEach(function () {
      plane = new Plane("B0987", "IN_FLIGHT", null);
    });

    it("should check that the plane can land at an airport", function () {
      expect(plane.canLand()).toBeTrue();
    });

    it('should assign the "LANDED" status to the plane after landing', function () {
      plane.landAt(mockAirport);

      expect(plane.hasLanded()).toBeTrue();
    });
  });

  describe("when plane is ready to take off", function () {
    it("should check that the plane can takeoff at an airport", function () {
      plane.landAt(mockAirport);
      expect(plane.canTakeOff(mockAirport)).toBeTrue();
    });

    it('should change the status of the plane to "IN_FLIGHT" when taking off from airport', function () {
      plane.landAt(mockAirport);
      plane.takeOffFrom(mockAirport);

      expect(plane.hasLanded()).toBeFalse();
    });
  });
});
