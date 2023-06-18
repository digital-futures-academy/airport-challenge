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
      expect(plane.hasLanded()).toBeTrue();
      expect(plane.canLand()).toBeFalse();
    });
  });

  describe("when the plane is in flight", function () {
    beforeEach(function () {
      plane = new Plane("B0987", "IN_FLIGHT", null);
    });

    it("should check that the plane can land at an airport", function () {
      expect(plane.canTakeOff()).toBeFalse();
      expect(plane.canLand()).toBeTrue();
    });

    it("should change the plane status after landing", function () {
      expect(plane.hasLanded()).toBeFalse();
      plane.landAt(mockAirport);

      expect(plane.hasLanded()).toBeTrue();
    });
  });

  describe("when plane is ready to take off", function () {
    it("should check that the plane can takeoff at the airport", function () {
      expect(plane.canTakeOff(mockAirport)).toBeFalse();

      plane.landAt(mockAirport);

      expect(plane.canTakeOff(mockAirport)).toBeTrue();
    });

    it("should change the plane status after taking off", function () {
      expect(plane.canTakeOff(mockAirport)).toBeFalse();

      plane.landAt(mockAirport);
      plane.takeOffFrom(mockAirport);

      expect(plane.hasLanded()).toBeFalse();
    });
  });
});
