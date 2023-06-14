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
    const expected = 1;

    airport.landPlane(plane);
    console.log(airport.listOfPlanes);
    expect(airport.listOfPlanes.length).toBe(expected);
  });
});
