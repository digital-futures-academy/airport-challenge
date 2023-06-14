import Plane from "../src/plane.js";

describe("Plane Class Tests", function () {
  let plane;

  beforeEach(function () {
    plane = new Plane("A1234");
  });

  it("should return the plane id", function () {
    expect(plane.getId()).toEqual("A1234");
  });
});
