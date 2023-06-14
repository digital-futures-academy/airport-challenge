import Airport from "../src/airport.js";

let airport, plane, plane2, plane3;
class MockPlane {
  aircraftId = "";
  aircraftStatus = "";
}

describe("Airport", () => {
  beforeEach(() => {
    plane = new MockPlane();
    airport = new Airport();
    plane.aircraftId = "G-XLEE";
    plane.aircraftStatus = "departed";
    plane2 = new MockPlane();
    plane2.aircraftId = "G-KELS";
    plane2.aircraftStatus = "departed";
    plane3 = new MockPlane();
    plane3.aircraftId = "G-BETI";
    plane3.aircraftStatus = "departed";
  });

  afterEach(() => {
    plane = undefined;
    airport = undefined;
    plane = undefined;
    plane2 = undefined;
    plane3 = undefined;
  });

  it("returns [] for empty airport", () => {
    //assert
    expect(airport.landedPlanes).toEqual([]);
  });

  it("lands one plane in the airport", () => {
    //arrange
    //act
    airport.landPlane(plane);
    //assert
    expect(airport.landedPlanes.length).toEqual(1);
  });

  it("lands a plane with id `G-XLEE` in the airport", () => {
    //arrange
    //act
    airport.landPlane(plane);
    //assert
    expect(airport.landedPlanes[0].aircraftId).toBe("G-XLEE");
  });

  it(" does not land plane without id in the airport", () => {
    //arrange
    plane.aircraftId = "";
    //act
    airport.landPlane(plane);
    airport.landPlane(plane2);
    //assert
    expect(airport.landedPlanes.length).toBe(1);
  });

  it("does not land plane without status in the airport", () => {
    //arrange
    plane.aircraftStatus = "";
    //act
    airport.landPlane(plane);
    //assert
    expect(airport.landedPlanes.length).toBe(0);
  });

  it("should return an error when a plane number status attempts to land in the airport", () => {
    //arrange
    plane.aircraftStatus = 23;
    //act
    //assert
    expect(() => { airport.landPlane(plane) }).toThrowError('Unidentified plane status. Plane status must be a string.');
  });

    it("should return an error when a plane number id attempts to land in the airport", () => {
    //arrange
    plane.aircraftId= 23;
    //act
    //assert
    expect(() => { airport.landPlane(plane) }).toThrowError('Unidentified plane id. Plane id must be a string.');
  });

  it("lands 3 planes with in the airport", () => {
    //arrange
    //act
    airport.landPlane(plane);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    //assert
    expect(airport.landedPlanes.length).toBe(3);
  });

  it("changes plane status from `departed` to `landed` once it lands in the airport", () => {
    //arrange
    //act
    airport.landPlane(plane);
    //assert
    expect(airport.landedPlanes[0].aircraftStatus).toBe("landed");
  });

  it("overrides airport capacity from 10 to 1500", () => {
    //act
    airport.overrideAirportCapacity(1490);
    //assert
    expect(airport.maxAirportCapacity).toEqual(1500);
  });

  it("overrides airport capacity from 1500 to 1000", () => {
    //act
    airport.overrideAirportCapacity(1490);
    airport.overrideAirportCapacity(-500);

    //assert
    expect(airport.maxAirportCapacity).toEqual(1000);
  });

  it("informs if airport is not full if there is 1 plane in the airport", () => {
    //arrange
    //act
    airport.landPlane(plane);
    //assert
    expect(airport.isFull()).toEqual(false);
  });

  it("informs if airport is full if there are 3 planes in the airport", () => {
    //arrange
    //act
    airport.overrideAirportCapacity(-7);
    airport.landPlane(plane);
    airport.landPlane(plane2);
    airport.landPlane(plane3);
    //assert
    expect(airport.isFull()).toEqual(true);
  });

  it("does not land plane if airplane is full", () => {
    //arrange
    //act
    airport.landPlane(plane);
    airport.landPlane(plane2);
    airport.overrideAirportCapacity(-8);
    airport.landPlane(plane3);
    //assert
    expect(airport.landedPlanes).toEqual([plane, plane2]);
  });

  it("confirms plane with id of G-XLEE took off with message: `G-XLEE took off from airport` ", () => {
    //arrange
    //act
    airport.landPlane(plane);
    const message = airport.planeTakeOff("G-XLEE");
    //assert
    expect(message).toBe(`G-XLEE took off from airport`);
  });
});
